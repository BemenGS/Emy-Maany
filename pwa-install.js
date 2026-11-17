/* =========================================================
   EMY MAANY — PWA INSTALL EXPERIENCE
   Native install prompt where supported; iOS home-screen guide otherwise.
   ========================================================= */
(() => {
  "use strict";

  const isStandalone = () =>
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  const isIOS = /iphone|ipad|ipod/i.test(window.navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isStandalone) return;

  let deferredPrompt = null;
  let banner = null;
  let helpVisible = false;

  const dismissedKey = "emyMaanyInstallDismissed";
  try {
    if (sessionStorage.getItem(dismissedKey) === "1") return;
  } catch (_) {}

  function createBanner(mode) {
    if (banner || isStandalone()) return;
    banner = document.createElement("aside");
    banner.className = "pwa-install-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Install Emy Maany app");

    const title = mode === "ios" ? "Add Emy Maany to your Home Screen" : "Install Emy Maany";
    const description = mode === "ios"
      ? "Enjoy a faster, app-like experience."
      : "Add to your device for a faster, app-like experience.";
    const action = mode === "ios" ? "How to" : "Install";

    banner.innerHTML = `
      <img class="pwa-install-icon" src="/icon-192.png" alt="Emy Maany logo">
      <div class="pwa-install-copy">
        <strong class="pwa-install-title">${title}</strong>
        <span class="pwa-install-description">${description}</span>
        <span class="pwa-install-help" hidden></span>
      </div>
      <div class="pwa-install-actions">
        <button class="pwa-install-dismiss" type="button">Not now</button>
        <button class="pwa-install-button" type="button">${action}</button>
      </div>`;

    const dismiss = banner.querySelector(".pwa-install-dismiss");
    const install = banner.querySelector(".pwa-install-button");
    const help = banner.querySelector(".pwa-install-help");

    dismiss.addEventListener("click", () => {
      try { sessionStorage.setItem(dismissedKey, "1"); } catch (_) {}
      banner?.remove();
      banner = null;
    });

    install.addEventListener("click", async () => {
      if (mode === "ios") {
        helpVisible = !helpVisible;
        help.hidden = !helpVisible;
        help.textContent = "In Safari, tap Share (the square with the arrow), then choose “Add to Home Screen” and tap Add.";
        install.textContent = helpVisible ? "Got it" : "How to";
        return;
      }

      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      deferredPrompt = null;
      if (choice && choice.outcome === "accepted") {
        banner?.remove();
        banner = null;
      }
    });

    document.body.appendChild(banner);
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    createBanner("native");
  });

  window.addEventListener("appinstalled", () => {
    banner?.remove();
    banner = null;
    deferredPrompt = null;
  });

  // Safari on iOS/iPadOS does not expose beforeinstallprompt.
  if (isIOS) {
    window.addEventListener("load", () => {
      if (!isStandalone()) createBanner("ios");
    }, { once: true });
  }

  // Register the service worker required for installability and offline shell.
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").catch((error) => {
        console.warn("Emy Maany service worker registration failed:", error);
      });
    }, { once: true });
  }
})();
