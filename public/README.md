# KOSO Smart Maintenance Dashboard

A web-based dashboard for monitoring CNC-04 machine parameters using Firebase for real-time data and authentication.

## Setup Instructions

1. **Extract the Zip File**:
   - Download and extract the `koso_dashboard.zip` file.
   - Navigate to the `koso_dashboard` folder.

2. **Firebase Setup**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a web app and copy the Firebase configuration.
   - Paste the configuration in `firebase.js` under `firebaseConfig`.
   - Enable **Email/Password Authentication** in the Authentication tab.
   - Set up a **Realtime Database** and configure rules:
     ```json
     {
       "rules": {
         ".read": "auth != null",
         ".write": "auth != null"
       }
     }
     ```

3. **Running the Application**:
   - Open `index.html` in a browser for basic testing.
   - For Firebase features (auth and real-time data), use a local server:
     - Install Node.js and run `npm install -g http-server`.
     - Navigate to the `koso_dashboard` folder and run `http-server`.
     - Access the app at `http://localhost:8080`.
   - Alternatively, use VS Code with the Live Server extension.

4. **Dependencies**:
   - All dependencies (Tailwind CSS, Chart.js, XLSX, Firebase SDK) are included via CDNs.
   - Ensure an internet connection for CDNs and Firebase.

5. **Assets**:
   - `favicon.ico`: App favicon.
   - `icon-192x192.png` and `icon-512x512.png`: PWA icons.
   - `alert-beep.mp3`: Sound for critical alerts.

6. **Features**:
   - Login/Signup with Firebase Authentication.
   - Real-time monitoring of CNC-04 parameters (Spindle, X, Z, Hydraulic).
   - Graphical charts using Chart.js.
   - Historical data analysis with filtering.
   - Excel report generation using SheetJS.
   - Multi-language support (English, Hindi, Marathi, Japanese, French, Spanish, German, Chinese).
   - Light/Dark theme toggle.
   - PWA support for offline access (requires `service-worker.js`).

7. **Optional: PWA Setup**:
   - Create a `service-worker.js` file in the root directory:
     ```javascript
     self.addEventListener('install', event => {
       event.waitUntil(
         caches.open('koso-cache').then(cache => {
           return cache.addAll([
             '/',
             '/index.html',
             '/dashboard.html',
             '/style.css',
             '/firebase.js',
             '/manifest.json',
             '/favicon.ico',
             '/icon-192x192.png',
             '/icon-512x512.png',
             '/alert-beep.mp3'
           ]);
         })
       );
     });

     self.addEventListener('fetch', event => {
       event.respondWith(
         caches.match(event.request).then(response => {
           return response || fetch(event.request);
         })
       );
     });
     ```
   - Serve the app over HTTPS or localhost for service worker registration.

## Notes
- Replace placeholder Firebase config in `firebase.js`.
- Ensure `alert-beep.mp3` is a valid audio file for alerts.
- For production, host on a secure server (e.g., Firebase Hosting).
