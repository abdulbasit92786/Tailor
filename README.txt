Tailor Simple App V5
====================

Upload all files together to the same hosting folder.

Included:
- login.html
- index.html
- customers.html
- save-customer.html
- new-user.html
- pending.html
- completed.html
- search.html
- menu.html
- app.js
- style.css

APK:
This package is still a web app; no APK binary is generated yet.
After the web version is approved, convert it to Android using a wrapper such as Capacitor.
Typical process:
1. Put these web files in a project www/ folder.
2. Install Node.js and Android Studio.
3. Install Capacitor: npm install @capacitor/core @capacitor/cli @capacitor/android
4. Run npx cap init, set the web directory to the folder containing these files.
5. Run npx cap add android.
6. Run npx cap copy.
7. Open Android Studio with npx cap open android.
8. Build a signed APK/AAB from Android Studio.
9. Upload the final APK to your own hosting/storage.
10. Put that final APK URL into the Download APK button in menu.html.

The current Menu APK button intentionally does not pretend that an APK exists yet.
