// ==UserScript==
// @name        Vivaldi Extension Popup Ultimate Fix
// @description The definitive mod to anchor all extension popups to the main toggle
// ==/UserScript==

(function () {
  'use strict';

  // Function to reposition the popup
  function repositionPopup() {
    const popup = document.querySelector('.ExtensionPopup');
    const toggle = document.querySelector('.ToolbarButton-Button[name="Extensions"]');

    if (!popup || !toggle) {
      return;
    }

    const rect = toggle.getBoundingClientRect();

    // Use a short delay to ensure the popup is fully rendered and the
    // browser's initial styles have been applied before we override them.
    // The delay is minimal but crucial.
    setTimeout(() => {
      popup.style.position = 'fixed';
      popup.style.top = `${rect.bottom + 5}px`;
      popup.style.left = `${rect.left}px`;
      popup.style.right = 'auto'; // Ensures the popup doesn't align to the right side of the screen
      popup.style.zIndex = '9999'; // Give it a high z-index to ensure it's on top of everything
    }, 10);
  }

  // Use a MutationObserver to watch for the *creation* of the extension popup
  // This is more reliable than a simple click listener, as it's a direct
  // reaction to the DOM being changed.
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach((node) => {
          // Check if the added node is an element and has the specific class
          if (node.nodeType === 1 && node.classList.contains('ExtensionPopup')) {
            repositionPopup();
            // It's a good practice to disconnect the observer after the first
            // popup is handled to avoid unnecessary performance overhead.
            // Or you can keep it running to handle multiple popups in a row.
            // For now, let's keep it running for simplicity.
          }
        });
      }
    });
  });

  // Start observing the main toolbar for child element additions
  const mainbar = document.querySelector('.mainbar');
  if (mainbar) {
    observer.observe(mainbar, { childList: true, subtree: true });
    console.debug('[ext-anchor] Vivaldi Popup Observer active');
  }
})();