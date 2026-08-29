// This file is replaced with a bundled native plugin bridge during the Android build.
// On the normal GitHub Pages website it is never loaded because login.html uses the
// Firebase web popup flow unless running inside the native Capacitor app.
export async function unavailableOnWeb() {
  throw new Error('Native authentication is only available inside the Android app.');
}
