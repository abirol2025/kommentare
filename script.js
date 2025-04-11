const details = document.querySelector('details');
const jsConfetti = new JSConfetti();

details.addEventListener('toggle', () => {
    if (details.open) {
        jsConfetti.addConfetti({
            confettiColors: [
                '#ff6d57', '#87dcf3', '#e3ffc2', '#ff90f6',
            ],
        });
    }
});
// JavaScript Document
