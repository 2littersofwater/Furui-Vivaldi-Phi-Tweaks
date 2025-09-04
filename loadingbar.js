// ==UserScript==
// @name        Vivaldi Extension Popup Ultimate Fix
// @description The definitive mod to anchor all extension popups to the main toggle
// ==/UserScript==

(function () {
    // A function to create and append the progress bar.
    const createProgressBar = () => {
        const progressBar = document.createElement('div');
        progressBar.id = 'loading-bar';
        document.body.appendChild(progressBar);

        let currentProgress = 0;

        const getPageColor = () => {
            const themeColorMeta = document.querySelector('meta[name="theme-color"]');
            if (themeColorMeta) {
                return themeColorMeta.content;
            }
            return '#0066ff'; 
        };

        const updateProgress = (newWidth) => {
            if (newWidth > currentProgress) {
                progressBar.style.transition = 'width 0.5s ease-out';
                progressBar.style.width = newWidth + '%';
                currentProgress = newWidth;
            }
        };

        const handleComplete = () => {
            progressBar.style.transition = 'width 0.3s ease';
            progressBar.style.width = '100%';
            setTimeout(() => {
                progressBar.style.transition = 'none';
                progressBar.style.width = '0%';
                currentProgress = 0;
            }, 500);
        };

        // The primary event listeners.
        chrome.webNavigation.onBeforeNavigate.addListener(() => {
            progressBar.style.backgroundColor = getPageColor();
            updateProgress(20);
        });
        
        chrome.webNavigation.onDOMContentLoaded.addListener(() => updateProgress(70));
        chrome.webNavigation.onCompleted.addListener(handleComplete);
    };

    // Use a MutationObserver to wait for the Vivaldi UI to be ready.
    const observer = new MutationObserver((mutations, obs) => {
        const browserElement = document.getElementById('browser');
        if (browserElement) {
            obs.disconnect(); // Stop observing once the element is found.
            createProgressBar();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
