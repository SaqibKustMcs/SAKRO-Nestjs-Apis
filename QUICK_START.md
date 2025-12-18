# 🚀 Quick Start - Network Configuration

## Change IP in ONE Command! 🎯

### Method 1: Automated Script (Recommended ⭐)

```bash
# Update both backend and frontend automatically
npm run update:ip 192.168.1.100

# Replace 192.168.1.100 with your machine's IP
```

**This will automatically update:**
- ✅ Backend `.env` file
- ✅ Frontend `api_constants.dart` file
- ✅ All related URLs (WebSocket, CORS, API, Media)

### Method 2: Manual Update

**Step 1:** Find your IP address
```bash
# macOS
ipconfig getifaddr en0

# Windows
ipconfig

# Linux
hostname -I
```

**Step 2:** Edit `.env` file
```env
NETWORK_IP=192.168.1.100  # 👈 Change this
```

**Step 3:** Edit frontend
```dart
// cloth_shop_flutter/lib/Constants/api_constants.dart
static const String baseUrl = 'http://192.168.1.100:3101';  // 👈 Match IP
static const String wsUrl = 'ws://192.168.1.100:3101';      // 👈 Match IP
```

**Step 4:** Restart
```bash
npm run start:dev
```

---

## 📝 Current Configuration

Your current settings (from `.env`):

```
NETWORK_IP=192.168.18.32
PORT=3101
```

**Your API URLs:**
- 📍 REST API: http://192.168.18.32:3101
- 🔌 WebSocket: ws://192.168.18.32:3101
- 📚 Swagger: http://192.168.18.32:3101/swagger
- 📁 Media: http://192.168.18.32:3101/

---

## 🔥 Common Scenarios

### Scenario 1: Working from home (New WiFi)
```bash
npm run update:ip 192.168.1.50
npm run start:dev
```

### Scenario 2: At office (Different network)
```bash
npm run update:ip 10.0.0.100
npm run start:dev
```

### Scenario 3: Local testing only
```bash
npm run update:ip localhost
npm run start:dev
```

---

## ✅ Verification Checklist

After changing IP:

1. ✅ Check backend console shows correct Network URL
2. ✅ Open Swagger in browser: `http://YOUR_IP:3101/swagger`
3. ✅ Test API: `curl http://YOUR_IP:3101`
4. ✅ Hot reload Flutter app
5. ✅ Test frontend connection

---

## 🐛 Troubleshooting

### Can't connect from phone?

1. **Same WiFi?** Ensure phone and computer are on same network
2. **Firewall?** Check if port 3101 is allowed
3. **Correct IP?** Verify with `ipconfig` / `ifconfig`
4. **Restart?** Stop and restart backend: `npm run start:dev`

### Script not working?

```bash
# Make sure you're in the backend directory
cd SAKRO-Nestjs-Apis

# Run script directly
node scripts/update-network-ip.js 192.168.1.100
```

---

## 📚 More Information

- Full network setup guide: `NETWORK_SETUP.md`
- Script location: `scripts/update-network-ip.js`
- Backend config: `.env`
- Frontend config: `../cloth_shop_flutter/lib/Constants/api_constants.dart`

---

## 💡 Pro Tips

1. **Save IPs:** Keep a note of common IPs (home, office, etc.)
2. **Use script:** Always use `npm run update:ip` to avoid mistakes
3. **Restart backend:** Always restart after changing `.env`
4. **Hot reload app:** Flutter usually hot-reloads API changes automatically
5. **Check logs:** Backend shows Network URL on startup

---

Need help? Check `NETWORK_SETUP.md` for detailed documentation!
