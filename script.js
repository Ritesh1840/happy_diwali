document.addEventListener('DOMContentLoaded', () => {
    const fireworkContainer = document.querySelector('.firework-container');

    // Function to create a firework explosion
    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');

        // Random position on the screen
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        // Random size for the explosion
        const size = Math.random() * 3 + 2; // Random scale between 2 and 5
        
        firework.style.left = `${posX}px`;
        firework.style.top = `${posY}px`;
        firework.style.transform = `scale(${size})`;

        // Random color for the firework
        const colors = ['#FFD700', '#FF4500', '#00FF00', '#00BFFF', '#FF69B4', '#FFFFFF', '#FF1493'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.background = `radial-gradient(circle, ${randomColor}, transparent)`;
        
        fireworkContainer.appendChild(firework);

        // Create sparkles for the firework explosion
        for (let i = 0; i < 30; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');

            // Position the sparkle randomly around the firework
            sparkle.style.left = `${posX + Math.random() * 100 - 50}px`;
            sparkle.style.top = `${posY + Math.random() * 100 - 50}px`;

            // Random color for each sparkle
            const sparkleColor = colors[Math.floor(Math.random() * colors.length)];
            sparkle.style.background = `radial-gradient(circle, ${sparkleColor}, transparent)`;

            fireworkContainer.appendChild(sparkle);

            // Remove sparkle after animation ends
            sparkle.addEventListener('animationend', () => {
                sparkle.remove();
            });
        }

        // Remove the firework after 1.5 seconds
        setTimeout(() => {
            firework.remove();
        }, 1500);
    }

    // Create fireworks every 500ms for smoother appearance
    setInterval(createFirework, 500);
});