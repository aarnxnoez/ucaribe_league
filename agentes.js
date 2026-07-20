document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.agentes-form');
    const positionBox = document.getElementById('positions-selector-box');

    if (!form || !positionBox) return;

    form.addEventListener('submit', (event) => {
        const selectedPositions = positionBox.querySelectorAll('input[name="posiciones"]:checked');

        if (selectedPositions.length === 0) {
            event.preventDefault();
            alert('Debes seleccionar al menos una posición para enviar tu registro.');
        }
    });
});
