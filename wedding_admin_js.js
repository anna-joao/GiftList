// Total de presentes disponíveis
const TOTAL_GIFTS = 12;

// Carregar dados dos presentes
function loadGiftsData() {
    const stored = localStorage.getItem('selectedGifts');
    return stored ? JSON.parse(stored) : [];
}

// Renderizar lista de presentes
function renderGiftsList() {
    const giftsData = loadGiftsData();
    const giftsList = document.getElementById('giftsList');
    const emptyState = document.getElementById('emptyState');
    
    // Atualizar estatísticas
    document.getElementById('totalGifts').textContent = giftsData.length;
    document.getElementById('totalAvailable').textContent = TOTAL_GIFTS - giftsData.length;
    
    if (giftsData.length === 0) {
        giftsList.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    giftsList.style.display = 'block';
    emptyState.style.display = 'none';
    giftsList.innerHTML = '';
    
    // Ordenar por data (mais recentes primeiro)
    giftsData.sort((a, b) => {
        const dateA = new Date(a.date.split(' ').reverse().join(' '));
        const dateB = new Date(b.date.split(' ').reverse().join(' '));
        return dateB - dateA;
    });
    
    giftsData.forEach(gift => {
        const item = document.createElement('div');
        item.className = 'gift-item';
        item.innerHTML = `
            <div class="gift-details">
                <div class="gift-item-name">${gift.giftName}</div>
                <div class="guest-name">${gift.guestName}</div>
                <div class="gift-date">${gift.date}</div>
            </div>
            <div class="gift-icon"></div>
        `;
        giftsList.appendChild(item);
    });
}

// Limpar todos os dados
function clearAllData() {
    if (confirm('Tem certeza que deseja limpar TODOS os dados? Esta ação não pode ser desfeita!')) {
        if (confirm('Confirmação final: Realmente deseja apagar todos os presentes escolhidos?')) {
            localStorage.removeItem('selectedGifts');
            renderGiftsList();
            alert('Todos os dados foram removidos com sucesso!');
        }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderGiftsList();
    
    document.getElementById('clearBtn').addEventListener('click', clearAllData);
    
    // Atualizar a cada 5 segundos (caso múltiplas pessoas estejam escolhendo)
    setInterval(renderGiftsList, 5000);
});