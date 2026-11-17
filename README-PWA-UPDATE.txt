EMY MAANY WEBSITE — MOBILE LAYOUT & PWA UPDATE
================================================

What changed
------------
1. Fixed mobile horizontal overflow across Home, Our Work, and Connect.
2. Rebuilt the mobile navigation as a full-screen overlay. The closed menu
   no longer expands the document or leaves a right-side panel/blank strip.
3. Added PWA metadata and a web app manifest.
4. Generated app icons from the supplied Emy Maany logo.
5. Added a bottom install banner for browsers that support the native
   beforeinstallprompt event (for example, supported Chrome/Edge versions).
6. Added the iOS/iPadOS "Add to Home Screen" instructions because Safari does
   not provide the same automatic install prompt.
7. Added a service worker and a small offline app shell cache.

Files added
-----------
manifest.webmanifest
service-worker.js
pwa-install.js
pwa-install.css
favicon-32.png
icon-192.png
icon-512.png
icon-maskable-192.png
icon-maskable-512.png

Deployment
----------
- Upload/deploy the contents of the "Mum Project" folder as the site root.
- Keep all files in that folder together; do not move the manifest, icons,
  service worker, or PWA scripts into a subfolder.
- Deploy over HTTPS (Vercel already provides HTTPS).
- After deployment, open the site once and refresh. If an older service
  worker is installed, close/reopen the site or clear the site's cached data
  once so the new service worker can take control.
- The automatic install banner is browser-controlled: it appears only when
  the browser decides the site meets its installability criteria and fires
  beforeinstallprompt. The site cannot force that native prompt to appear.
- On iPhone/iPad, open the site in Safari, tap Share, then "Add to Home Screen".

No existing portfolio copy, image collections, contact details, or page
content was intentionally changed.
