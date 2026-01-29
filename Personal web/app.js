const section = document.querySelector('.info');
const bubbles = document.querySelectorAll('.bubble');

if (window.innerWidth > 768) {
    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();

        const percentX = (e.clientX - rect.left) / rect.width - 0.5;
        const percentY = (e.clientY - rect.top) / rect.height - 0.5;

        bubbles.forEach((bubble, index) => {
            const depth = (index + 1) * 15;      // profundidad
            const moveX = percentX * depth;
            const moveY = percentY * depth * 0.6; // Y más suave

            bubble.style.transform = `
                translate(${moveX}px, ${moveY}px)
            `;
        });
    });
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
