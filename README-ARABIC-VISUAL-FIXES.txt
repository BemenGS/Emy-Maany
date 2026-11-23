EMY MAANY — BILINGUAL VISUAL FIXES
=================================

Changes in this revision
------------------------
1. Arabic typography:
   - Increased Arabic text line-height to protect dots, diacritics and descenders.
   - Gave Arabic headings more vertical room, including the Home hero slider.

2. Back-to-top control:
   - Kept the same arrow glyph rendering in both languages by isolating the
     direction-neutral icon from Arabic font shaping. Its RTL screen position
     remains mirrored intentionally.

3. Portfolio images:
   - Collection-card cover images now use object-fit: contain so the complete
     photograph/artwork remains visible.
   - The full-size collection viewer already used contain and remains unchanged.
   - Existing hero product images continue to use contain.

4. Header controls:
   - Theme and language controls are grouped into one compact flex container.
   - Their internal spacing is fixed and independent of LTR/RTL text direction.
   - Theme preference remains independent from language preference.

5. Brand logo:
   - Added emy-maany-logo.png from the supplied artwork.
   - Replaced the E monogram in all three navigation bars.

PWA
---
- Added the new logo asset to the app-shell precache.
- Updated the service-worker cache name to emy-maany-shell-v7.

Files changed
-------------
index.html, work.html, contact.html
home.css, work.css, contact.css
theme.css, theme.js, language.css
service-worker.js
emy-maany-logo.png (new)
README-ARABIC-VISUAL-FIXES.txt (new)

Validation performed
--------------------
- JavaScript syntax checks passed for all page and shared scripts.
- CSS parser checks passed for all edited stylesheets.
- HTML local asset references were checked, including URL-encoded paths.
- ZIP archive integrity is checked after packaging.

Note: A real-device visual pass and deployed HTTPS/PWA install test are still
recommended before publishing.
