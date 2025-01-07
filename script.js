// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        // Scroll to section
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listeners to game cards
document.querySelectorAll('.game').forEach(game => {
    game.addEventListener('mouseover', () => {
        game.style.transform = 'scale(1.1)';
    });
    game.addEventListener('mouseout', () => {
        game.style.transform = 'scale(1)';
    });
});