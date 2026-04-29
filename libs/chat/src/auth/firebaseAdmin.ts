import * as fs from 'fs';
import * as path from 'path';
import * as admin from 'firebase-admin';

/**
 * Loads the Firebase Admin SDK using a service account JSON file.
 *
 * - Set `FIREBASE_SERVICE_ACCOUNT_PATH` to an absolute or relative path (relative to `process.cwd()`).
 * - If unset, defaults to `./jhamat-app-firebase-adminsdk-fbsvc-686f30ea30.json` in the project root.
 *
 * Do not commit the JSON key; keep it on the server and reference it via env in production.
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

function createOrGetApp(): admin.app.App {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  const serviceAccountPath = resolveServiceAccountPath();

  if (!fs.existsSync(serviceAccountPath)) {
    throw new Error(
      `[Firebase Admin] Service account file not found: ${serviceAccountPath}. ` +
        'Add jhamat-app-firebase-adminsdk-fbsvc-686f30ea30.json to the API project root, or set FIREBASE_SERVICE_ACCOUNT_PATH.',
    );
  }

  const raw = fs.readFileSync(serviceAccountPath, 'utf8');
  const serviceAccount = JSON.parse(raw) as admin.ServiceAccount;

  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const defaultApp = createOrGetApp();

export { defaultApp };
