/* =========================================================
   EMY MAANY — SHARED DARK / LIGHT THEME
   - Remembers the selected mode across all website pages.
   - Changes only the specifically approved content sections.
   - Repositions the single toggle beside the mobile menu
     button on screens up to 800px wide.
   ========================================================= */

(() => {
    "use strict";

    const root = document.documentElement;
    const header = document.querySelector(".site-header");
    const navigation = document.querySelector(".main-nav");
    const menuButton = document.querySelector(".menu-toggle");
    const themeButton = document.querySelector(".theme-toggle");

    if (!header || !navigation || !menuButton || !themeButton) return;

    const mobileQuery = window.matchMedia("(max-width: 800px)");
    const storageKey = "emy-maany-color-mode";

    /* -------------------- Theme state -------------------- */
    function readSavedTheme() {
        try {
            const savedTheme = localStorage.getItem(storageKey);
            return savedTheme === "dark" ? "dark" : "light";
        } catch (error) {
            return "light";
        }
    }

    function applyTheme(theme, save = true) {
        const selectedTheme = theme === "dark" ? "dark" : "light";

        root.dataset.theme = selectedTheme;

        const isDark = selectedTheme === "dark";
        const nextAction = isDark ? "light" : "dark";

        themeButton.setAttribute("aria-pressed", String(isDark));
        themeButton.setAttribute("aria-label", `Switch to ${nextAction} mode`);
        themeButton.setAttribute("title", `Switch to ${nextAction} mode`);

        const icon = themeButton.querySelector(".theme-toggle-icon");
        const label = themeButton.querySelector(".theme-toggle-label");

        if (icon) icon.textContent = isDark ? "☀" : "☾";
        if (label) label.textContent = isDark ? "Light" : "Dark";

        if (save) {
            try {
                localStorage.setItem(storageKey, selectedTheme);
            } catch (error) {
                /* Theme still works for the current page if storage is unavailable. */
            }
        }
    }

    /* -------------------- Responsive button placement -------------------- */
    function placeThemeButton() {
        if (mobileQuery.matches) {
            /* Mobile order: brand → theme button → hamburger. */
            header.insertBefore(themeButton, menuButton);
        } else {
            /* Desktop order: theme button → Home → Our Work → Contact. */
            const firstLink = navigation.querySelector("a");
            navigation.insertBefore(themeButton, firstLink);
        }
    }

    /* -------------------- User interaction -------------------- */
    themeButton.addEventListener("click", () => {
        const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
    });

    /* -------------------- Initialization -------------------- */
    applyTheme(readSavedTheme(), false);
    placeThemeButton();

    if (typeof mobileQuery.addEventListener === "function") {
        mobileQuery.addEventListener("change", placeThemeButton);
    } else {
        /* Older Safari compatibility. */
        mobileQuery.addListener(placeThemeButton);
    }
})();
