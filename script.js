document.addEventListener('DOMContentLoaded', () => {
    const fireworkContainer = document.querySelector('.firework-container');

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');

        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        const size = Math.random() * 3 + 2; 

        firework.style.left = `${posX}px`;
        firework.style.top = `${posY}px`;
        firework.style.transform = `scale(${size})`;

        const colors = ['#FFD700', '#FF4500', '#00FF00', '#00BFFF', '#FF69B4', '#FFFFFF', '#FF1493'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.background = `radial-gradient(circle, ${randomColor}, transparent)`;
        
        fireworkContainer.appendChild(firework);

        for (let i = 0; i < 40; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');

            sparkle.style.left = `${posX + Math.random() * 150 - 75}px`;
            sparkle.style.top = `${posY + Math.random() * 150 - 75}px`;

            const sparkleColor = colors[Math.floor(Math.random() * colors.length)];
            sparkle.style.background = `radial-gradient(circle, ${sparkleColor}, transparent)`;

            fireworkContainer.appendChild(sparkle);

            sparkle.addEventListener('animationend', () => {
                sparkle.remove();
            });
        }

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }

    setInterval(createFirework, 400);
});
