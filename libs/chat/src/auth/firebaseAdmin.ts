import * as fs from 'fs';
import * as path from 'path';
import * as admin from 'firebase-admin';

/**
 * Firebase Admin for FCM. Credentials (pick one):
 * - FIREBASE_SERVICE_ACCOUNT_JSON — full JSON string (Render secret; minified one line)
 * - FIREBASE_SERVICE_ACCOUNT_BASE64 — base64-encoded JSON
 * - FIREBASE_SERVICE_ACCOUNT_PATH — file path (local dev)
 * - Default file: ./jhamat-app-firebase-adminsdk-fbsvc-686f30ea30.json in project root
 *
 * If none are set, the API still starts; push notifications are skipped.
 */
function resolveServiceAccountPath(): string {
  const fromEnv = process.env.FIREBASE_SERVICE_ACCOUNT_PATH?.trim();
  if (fromEnv) {
    return path.isAbsolute(fromEnv) ? fromEnv : path.resolve(process.cwd(), fromEnv);
  }
  return path.join(
    process.cwd(),
    'jhamat-app-firebase-adminsdk-fbsvc-686f30ea30.json',
  );
}

function loadServiceAccount(): admin.ServiceAccount | null {
  const jsonEnv = process.env.FIREBASE_SERVICE_ACCOUNT_JSON?.trim();
  if (jsonEnv) {
    try {
      return JSON.parse(jsonEnv) as admin.ServiceAccount;
    } catch {
      console.warn('[Firebase Admin] FIREBASE_SERVICE_ACCOUNT_JSON is not valid JSON');
      return null;
    }
  }

  const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64?.trim();
  if (b64) {
    try {
      const raw = Buffer.from(b64, 'base64').toString('utf8');
      return JSON.parse(raw) as admin.ServiceAccount;
    } catch {
      console.warn('[Firebase Admin] FIREBASE_SERVICE_ACCOUNT_BASE64 is invalid');
      return null;
    }
  }

  const serviceAccountPath = resolveServiceAccountPath();
  if (!fs.existsSync(serviceAccountPath)) {
    return null;
  }

  try {
    const raw = fs.readFileSync(serviceAccountPath, 'utf8');
    return JSON.parse(raw) as admin.ServiceAccount;
  } catch (e) {
    console.warn(
      `[Firebase Admin] Failed to read service account file: ${e instanceof Error ? e.message : e}`,
    );
    return null;
  }
}

let cachedApp: admin.app.App | null | undefined;

export function isFirebaseConfigured(): boolean {
  return getFirebaseAdmin() !== null;
}

/** Lazy init — does not run at import time (safe for Render without JSON file on disk). */
export function getFirebaseAdmin(): admin.app.App | null {
  if (cachedApp !== undefined) {
    return cachedApp;
  }

  if (admin.apps.length > 0) {
    cachedApp = admin.app();
    return cachedApp;
  }

  const serviceAccount = loadServiceAccount();
  if (!serviceAccount) {
    console.warn(
      '[Firebase Admin] Not configured — FCM push disabled. Set FIREBASE_SERVICE_ACCOUNT_JSON (or BASE64 / PATH) on Render.',
    );
    cachedApp = null;
    return null;
  }

  try {
    cachedApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log('[Firebase Admin] Initialized successfully');
  } catch (e) {
    console.warn(
      `[Firebase Admin] Initialize failed: ${e instanceof Error ? e.message : e}`,
    );
    cachedApp = null;
  }

  return cachedApp;
}
