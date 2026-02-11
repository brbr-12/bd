const btn = document.getElementById('surpriseBtn');
const hiddenMessage = document.getElementById('hiddenMessage');

btn.addEventListener('click', () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#ff85a2', '#ffffff', '#fce4ec']
    });
    btn.style.display = 'none';
    hiddenMessage.classList.add('show');
});