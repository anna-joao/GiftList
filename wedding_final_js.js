function redirectToMain() {
    // Substitua 'pagina-principal.html' pelo caminho correto da sua página principal
    window.location.href = 'wedding_gifts_html.html';
}

// Animação suave ao carregar a página
window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    const button = document.querySelector('.cta-button');
    
    container.style.opacity = '0';
    button.style.opacity = '0';
    container.style.transform = 'translateY(-30px)';
    button.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.8s ease';
        button.style.transition = 'all 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 300);
    }, 100);
});