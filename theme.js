/* =========================================================
   EMY MAANY — SHARED DARK / LIGHT THEME
   - Remembers the selected mode across all website pages.
   - Changes only the specifically approved content sections.
   - Repositions the theme and language controls together
     beside the mobile menu button on screens up to 800px wide.
   ========================================================= */

(() => {
    "use strict";

    const root = document.documentElement;
    const header = document.querySelector(".site-header");
    const navigation = document.querySelector(".main-nav");
    const menuButton = document.querySelector(".menu-toggle");
    const themeButton = document.querySelector(".theme-toggle");
    const languageButton = document.querySelector(".language-toggle");

    if (!header || !navigation || !menuButton || !themeButton || !languageButton) return;

    /* Keep both utility controls together so LTR/RTL flex direction cannot
       introduce different spacing or reorder them independently. */
    const tools = document.createElement("div");
    tools.className = "header-tools";
    tools.setAttribute("aria-label", "Display preferences");
    tools.append(themeButton, languageButton);

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
            /* Keep the two controls directly beside the hamburger. */
            header.insertBefore(tools, menuButton);
        } else {
            /* Desktop: keep the pair together before the page links. */
            const firstLink = navigation.querySelector("a");
            navigation.insertBefore(tools, firstLink);
        }
    }

    /* -------------------- User interaction -------------------- */
    document.addEventListener("emy-language-change", updateThemeLabel);

    function updateThemeLabel() {
        const isDark = root.dataset.theme === "dark";
        const label = themeButton.querySelector(".theme-toggle-label");
        if (label) label.textContent = isDark ? "Light" : "Dark";
    }

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
