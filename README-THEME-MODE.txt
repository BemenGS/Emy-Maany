EMY MAANY — DARK / LIGHT THEME
================================

Files added
-----------
theme.css
    Shared visual styles for the dark/light theme. It only targets:
    - Home: Introduction, Experience Counters, Services
    - Our Work: Decorations, Cakes, Catering portfolio sections
    - Contact: Contact Details

theme.js
    Shared theme behavior. It:
    - Toggles between Light and Dark mode.
    - Saves the selected mode in localStorage.
    - Restores the same mode on all three pages.
    - Places the same theme button in desktop navigation or beside
      the hamburger menu on tablet/mobile.

Navigation changes
------------------
- Removed the "Plan Your Event" navigation button from all three pages.
- Desktop order is: theme toggle, Home, Our Work, Contact.
- On tablet/mobile, the theme toggle and language toggle sit together immediately beside the menu button.
- The theme uses its own localStorage key and remains independent from the selected language.

Color palette
-------------
Light mode:
    Smoke white background: #F5F5F3
    Main text:               #28221E
    Secondary text:         #716A62

Dark mode:
    Espresso brown:         #2B2118
    Main text:               #F1E8DC
    Secondary text:         #B8AA98

Persistence and PWA
-------------------
The service-worker cache version was increased to v6 and the shared theme
and language files were added to the app shell. This helps the PWA fetch the
new files after deployment. If an installed PWA keeps showing an old
version, close it completely and reopen it after the updated service
worker has activated.

Important
---------
The hero sections, headers, footers, work gallery viewer, and unrelated
buttons are intentionally not themed. Only the sections listed above
change their background and text colors.
