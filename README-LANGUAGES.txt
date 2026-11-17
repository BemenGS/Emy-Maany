EMY MAANY — ENGLISH / ARABIC LANGUAGE SYSTEM

The language toggle is injected into the header on all three pages. English is the default. The selected language is saved in localStorage under emy-maany-language and persists across page navigation and reloads. Arabic sets lang=ar and dir=rtl.

Translations live in site-enhancements.js in the translations and groupTranslations objects. Add a key matching the exact English text and its Arabic value. The MutationObserver also translates dynamic portfolio cards and the collection viewer when they are created.

To publish: replace site-enhancements.js and the three CSS files (home.css, work.css, contact.css) in the same paths on GitHub. Keep all other assets and files unchanged.
