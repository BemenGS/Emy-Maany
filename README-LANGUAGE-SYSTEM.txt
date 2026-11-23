EMY MAANY — BILINGUAL LANGUAGE SYSTEM
=====================================

LANGUAGES
---------
English (en / LTR) is the default language. Arabic (ar / RTL) is available
through the language control in the shared header. The selected language is
saved with the `emy-maany-language` localStorage key and is restored on all
three pages and after refresh.

FILES
-----
i18n.js
  Central English-to-Arabic dictionary, language state, DOM translation,
  accessible-label translation, metadata description translation and
  dynamic-node observation. Add or update Arabic strings in this file.

language.css
  Arabic font stack (Alexandria), RTL header/hero/gallery adjustments,
  mirrored slider and viewer arrows, mobile RTL navigation and language
  toggle styling.

theme.js
  Keeps the independent color-mode preference and places both controls
  together in desktop navigation or beside the mobile menu.

DYNAMIC CONTENT
---------------
- Portfolio cards and the collection viewer use the central dictionary
  through the EmyI18n.t() helper and re-render when the language changes.
- Other DOM nodes inserted after page load are handled by the language
  observer, including the PWA installation banner and shared controls.
- Keep English source strings canonical in HTML and JavaScript data.

PERSISTENCE KEYS
----------------
Language: emy-maany-language
Color mode: emy-maany-color-mode
These keys must remain separate. Do not clear the language key from shared
page scripts.

PWA
---
The service-worker cache version is incremented when language assets change.
Keep `i18n.js`, `language.css`, `pwa-install.js` and `pwa-install.css` in the
app shell when updating the offline cache list.
