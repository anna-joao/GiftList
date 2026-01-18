// Animação suave ao carregar a página
window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    
    container.style.opacity = '0';
    container.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});