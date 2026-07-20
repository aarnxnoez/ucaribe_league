/* ==========================================================================
   INSCRIPCIONES.JS
   Lógica del contador regresivo para el cierre de inscripciones.
   ========================================================================== */

function startCountdown() {
    const targetDate = new Date('2026-09-04T00:00:00').getTime();

    const timerInterval = setInterval(function () {
        const now = new Date().getTime();
        const difference = targetDate - now;

        const daysEl      = document.getElementById('days');
        const hoursEl     = document.getElementById('hours');
        const minutesEl   = document.getElementById('minutes');
        const secondsEl   = document.getElementById('seconds');
        const timerContainer = document.querySelector('.countdown-timer');

        if (difference < 0) {
            clearInterval(timerInterval);
            if (timerContainer) {
                timerContainer.innerHTML = "<p class='closed-badge'>LAS INSCRIPCIONES HAN CERRADO</p>";
            }
            return;
        }

        const days    = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (daysEl)    daysEl.innerText    = String(days).padStart(2, '0');
        if (hoursEl)   hoursEl.innerText   = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');

    }, 1000);
}

window.onload = startCountdown;
