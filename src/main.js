// MLVDS main entry point

// Import components
import './components/mlv-button.js';
import './components/mlv-header.js';
import './components/mlv-footer.js';
import './components/mlv-tabs.js';
import './components/mlv-drawer.js';
import './components/mlv-pill.js';
import './components/mlv-card.js';

// --- Version Display ---
// This script reads the version from the meta tag and displays it on the page.
document.addEventListener('DOMContentLoaded', () => {
    const versionMeta = document.querySelector('meta[name="mlvds-version"]');
    const versionDisplay = document.getElementById('version-display');

    if (versionMeta && versionDisplay) {
        const version = versionMeta.getAttribute('content');
        versionDisplay.textContent = `v${version}`;
    }
});


console.log("MLVDS Initialized and components loaded.");
