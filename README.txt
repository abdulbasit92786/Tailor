Tailor Manager

Offline-ready PWA source.

Upload all files in this folder to the root of the GitHub Pages site.
Required PWA files include manifest.json, pwabuilder-sw.js, icon-192.png and icon-512.png.
After deployment, retest the site in PWABuilder. Generate the Android package only after the manifest and service worker checks pass.
For a verified TWA without a browser address bar, publish the assetlinks.json generated for the final signed package at:
.well-known/assetlinks.json
