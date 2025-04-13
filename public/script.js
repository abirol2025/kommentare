const detailsElements = document.querySelectorAll('details'); // Alle details-Elemente auswählen
const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

detailsElements.forEach((detail) => {
    detail.addEventListener('toggle', () => {
        if (detail.open) { // Wenn das details-Element geöffnet wird
            jsConfetti.addConfetti({
                confettiColors: [
                    '#ff6d57', '#87dcf3', '#e3ffc2', '#ff90f6',
                ],
            });
        }
    });
});
// JavaScript Document
