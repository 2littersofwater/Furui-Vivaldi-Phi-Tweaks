// ==UserScript==
// @name        Vivaldi Extension List Auto-Collapse
// @description Hides the vertical extension list after you click an extension
// ==/UserScript==

(function () {
  'use strict';

  function attachCollapseHandler() {
    const menus = document.querySelectorAll('.extensionIconPopupMenu');
    menus.forEach(menu => {
      if (menu.dataset._collapseAttached) return;
      menu.dataset._collapseAttached = '1';

      menu.addEventListener('click', (evt) => {
        if (evt.button !== 0) return; // only respond to left-click
        // let the extension popup open first, then hide the list
        setTimeout(() => {
          try { 
            menu.style.display = 'none'; 
          } catch (e) {}
        }, 80);
      }, true); // use capture to catch early
    });
  }

  // MutationObserver to attach handler whenever menu is created
  const mo = new MutationObserver(() => attachCollapseHandler());
  mo.observe(document.body, { childList: true, subtree: true });

  // run once for any existing menus
  attachCollapseHandler();

  console.debug('[ext-collapse] auto-collapse active');
})();
