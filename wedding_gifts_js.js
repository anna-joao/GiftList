// Lista de presentes
const gifts = [
    // Móveis e Decoração
    { 
        id: 1, 
        name: 'Cama de casal', 
        image: 'Imagens/3c2b1df85505a076d40ef8d4f4d24fac.jpg' 
    },

    { 
        id: 2, 
        name: 'Cabeceira e baú, cama de casal', 
        image: 'Imagens/e45236485d48220b5103e6ae5cf262cc.jpg' 
    },

    { 
        id: 3, 
        name: 'Guarda-roupa casal', 
        image: 'Imagens/2c9ef51b778ae8e0a3e2094aab54bf85.jpg' 
    },

    { 
        id: 4, 
        name: 'Criado-mudo', 
        image: 'Imagens/b93549903612158c98abc28c2585d288.jpg' 
    },

    { 
        id: 5, 
        name: 'Sofá 6 lugares, retrátil e reclinável', 
        image: 'Imagens/ebf09842879a3042b5f262e5493f3bee.jpg' 
    },

    { 
        id: 6, 
        name: 'Aparador', 
        image: 'Imagens/d8d90c070f4c00b105602621f68cf9f5.jpg' 
    },

    { 
        id: 7, 
        name: 'Tapete de sala', 
        image: 'Imagens/58a7e669f63373401a5cb073a4cf9acb.jpg' 
    },

    { 
        id: 8, 
        name: 'Cortina', 
        image: 'Imagens/f6c93551eb2d24dd14c95d21d39d4837.jpg' 
    },

    // Roupas de Cama e Banho
    { 
        id: 9, 
        name: 'Jogo de cama casal', 
        image: 'Imagens/ee0c3168726cbb49ccf90aee2110277a.jpg' 
    },

    { 
        id: 10, 
        name: 'Jogo de cama casal, cobre-leito/edredom', 
        image: 'Imagens/1eee544292e9b7a72d56a17759d12809.jpg' 
    },

    { 
        id: 11, 
        name: 'Jogo de cama casal, cobre-leito/edredom', 
        image: 'Imagens/5284e37ba067bbad50548a1fd43e9a73.jpg' 
    },

    { 
        id: 12, 
        name: 'Jogo de cama casal, cobre-leito/edredom', 
        image: 'Imagens/a5ab4a697ab72984827e250b934b37b1.jpg' 
    },

    { 
        id: 13, 
        name: 'Kit de toalhas', 
        image: 'Imagens/6a57918687d26aaa264bf9d270cd46c2.jpg' 
    },

    { 
        id: 14, 
        name: 'Kit de roupão de banho e toalhas', 
        image: 'Imagens/ec5a595c36ca68fcc29e15811aad1878.jpg' 
    },

    { 
        id: 15, 
        name: 'Kit para banheiro', 
        image: 'Imagens/61eca934a1ac2ed824758d7a71172145.jpg' 
    },

    // Eletrodomésticos Grandes
    { 
        id: 16, 
        name: 'Geladeira, cor inox', 
        image: 'Imagens/06dbc43bf0282d32cd7278e25a8cf14d.jpg' 
    },

    { 
        id: 17, 
        name: 'Máquina de lavar roupas', 
        image: 'Imagens/4687a4bcffadc7b2647340b803b8583d.jpg' 
    },

    { 
        id: 18, 
        name: 'Lava-louças inox', 
        image: 'Imagens/063a7b608a96c453dc0de6cd6b076470.jpg' 
    },

    { 
        id: 19, 
        name: 'Ar-condicionado portátil', 
        image: 'Imagens/images (9).jpeg' 
    },

    // Eletrodomésticos de Cozinha
    { 
        id: 20, 
        name: 'Cooktop 5 bocas à gás', 
        image: 'Imagens/70accb14b9458c22f6f67811414f3051.jpg' 
    },

    { 
        id: 21, 
        name: 'Micro-ondas', 
        image: 'Imagens/bdf2e8615788335c1160b50be2091787.jpg' 
    },

    { 
        id: 22, 
        name: 'Forno e Air Fryer multifunções', 
        image: 'Imagens/8f76c07e60ce3224853dc9f22680a395.jpg' 
    },

    { 
        id: 23, 
        name: 'Fritadeira Air Fryer', 
        image: 'Imagens/cf9e26ed633b6b69d24f7120b697b70f.jpg' 
    },

    { 
        id: 24, 
        name: 'Liquidificador de copo de vidro', 
        image: 'Imagens/26784391cd31befe1bee3c13ea2b6c03.jpg' 
    },

    { 
        id: 25, 
        name: 'Batedeira', 
        image: 'Imagens/6db6b234860d386800d0c57dacc19ce2.jpg' 
    },

    { 
        id: 26, 
        name: 'Mixer', 
        image: 'Imagens/1e47a6d6892dec7f1b923a3d1ac01970.jpg' 
    },

    { 
        id: 27, 
        name: 'Chaleira elétrica', 
        image: 'Imagens/63ca9ff7c375f57991ed397d1b20729c.jpg' 
    },

    { 
        id: 28, 
        name: 'Sanduicheira e grill', 
        image: 'Imagens/03ea0ab7fc3f360ad83cb68ae8980400.jpg' 
    },

    { 
        id: 29, 
        name: 'Purificador de água elétrico compacto', 
        image: 'Imagens/f2421375a2ddaaa4aaf9e69f73c8d7fb.jpg' 
    },

    // Utensílios de Limpeza
    { 
        id: 30, 
        name: 'Aspirador de pó portátil', 
        image: 'Imagens/ac5d52fb9e9124960c4eaf815458bd92.jpg' 
    },

    { 
        id: 31, 
        name: 'Robô aspirador', 
        image: 'Imagens/17470e630a3d9c311cfd2a837d1b97db.jpg' 
    },

    { 
        id: 32, 
        name: 'Ferro de passar a vapor', 
        image: 'Imagens/5e388b2eb5bee9d008153a4910ba762a.jpg' 
    },

    { 
        id: 33, 
        name: 'Passadeira a vapor portátil', 
        image: 'Imagens/e9a0846b9c1136e402358df51ac7333c.jpg' 
    },

    { 
        id: 34, 
        name: 'Lixeira automática de 50 litros, aço inoxidável', 
        image: 'Imagens/7941f6eb0f8801f333eb65dcb6685e71.jpg' 
    },

    { 
        id: 35, 
        name: 'Lixeira com sensor automático', 
        image: 'Imagens/0ba06430f6fc4481baf9008f60373520.jpg' 
    },

    // Panelas e Utensílios de Cozinha
    { 
        id: 36, 
        name: 'Panela de pressão', 
        image: 'Imagens/b24fe7b96b3050a23a538c7888872a7e.jpg' 
    },

    { 
        id: 37, 
        name: 'Jogo de assadeira de vidro', 
        image: 'Imagens/eece73fb3f3a7449dd3d4a47a82badac.jpg' 
    },

    { 
        id: 38, 
        name: 'Conjunto de utensílios de cozinha em silicone', 
        image: 'Imagens/78a4674a11c367662318283cb9741733.jpg' 
    },

    { 
        id: 39, 
        name: 'Jogo de facas com lâminas em aço inox', 
        image: 'Imagens/16c63edcf624a543fbb903c4e9ca9637.jpg' 
    },

    { 
        id: 40, 
        name: 'Tábua de carne', 
        image: 'Imagens/3bc81d31df31b380f0a516b60473129f.jpg' 
    },

    // Armazenamento e Organização
    { 
        id: 41, 
        name: 'Vasilhas de vidro herméticas', 
        image: 'Imagens/963cd8539c29e1be70ed6ef465fe22eb.png' 
    },

    { 
        id: 42, 
        name: 'Potes herméticos para mantimentos', 
        image: 'Imagens/4b7b91a45ee87af88dc3eaacb6efc99c.jpg' 
    },

    { 
        id: 43, 
        name: 'Potes herméticos para mantimentos', 
        image: 'Imagens/a174af5743af22967aa1942c44b221af.jpg' 
    },

    { 
        id: 44, 
        name: 'Porta-temperos', 
        image: 'Imagens/2484b1318735dbe539fd30eca3d68eff.jpg' 
    },

    { 
        id: 45, 
        name: 'Porta-doces', 
        image: 'Imagens/cd9acbe52ee7e2a49aa71f8e605a34bd.jpg' 
    },

    { 
        id: 46, 
        name: 'Queijeira em vidro', 
        image: 'Imagens/247406719446f83ff209a33890e34dce.jpg' 
    },

    { 
        id: 47, 
        name: 'Cesto com forro em tecido', 
        image: 'Imagens/e24fd062a013c99964d64c15dd296e0e.jpg' 
    },

    // Louças e Jogos de Mesa
    { 
        id: 48, 
        name: 'Kit de jantar porcelana', 
        image: 'Imagens/0538fcdea0f5c58a5a98ac691e52dd14.jpg' 
    },

    { 
        id: 49, 
        name: 'Jogo de jantar e chá Oxford', 
        image: 'Imagens/4bd14084c06e095844fcd45311796e95.jpg' 
    },

    { 
        id: 50, 
        name: 'Conjunto de talheres em aço inox', 
        image: 'Imagens/a25b4d50a6682f5b4fd7d74bb2779d53.jpg' 
    },

    { 
        id: 51, 
        name: 'Jogo americano', 
        image: 'Imagens/d71ba503a77f4b9af413cbc642c50169.jpg' 
    },

    // Copos e Taças

    { 
        id: 53, 
        name: 'Jogo de copos com borda dourada', 
        image: 'Imagens/ecfcdd1549d2fdfc219bc8eec3883d9f.jpg' 
    },

    { 
        id: 54, 
        name: 'Copos de vidro com borda dourada', 
        image: 'Imagens/458d722cc2745953c5b7fe0d27196d2e.jpg' 
    },

    { 
        id: 55, 
        name: 'Jogo de taças com borda dourada', 
        image: 'Imagens/98f408ddde4759132c9fa8ac61fca869.jpg' 
    },

    { 
        id: 56, 
        name: 'Taças de vidro para sobremesa', 
        image: 'Imagens/24cc5710cb4d680e672f2ca5e66a00a0.jpg' 
    },

    // Xícaras e Chá
    { 
        id: 57, 
        name: 'Jogo de xícaras e bule de porcelana', 
        image: 'Imagens/45f15c091a820c2f0b7350f19dc56d35.jpg' 
    },

    { 
        id: 58, 
        name: 'Kit de garrafa térmica, açucareiro e pote hermético', 
        image: 'Imagens/18d3c29a710909859b31022add238a51.jpg' 
    },

    // Ferramentas
    { 
        id: 59, 
        name: 'Furadeira elétrica', 
        image: 'Imagens/9ab3394851e7902afcae56e605919b22.jpg' 
    },

    { 
        id: 60, 
        name: 'Jogo de ferramentas', 
        image: 'Imagens/77b645f4f86c11fbecfa39ff08979429.jpg' 
    }
];

let selectedGift = null;
let selectedGifts = [];

// Carregar presentes já selecionados do localStorage
function loadSelectedGifts() {
    const stored = localStorage.getItem('selectedGifts');
    if (stored) {
        selectedGifts = JSON.parse(stored);
    }
}

// Salvar presente selecionado
function saveSelectedGift(giftId, guestName) {
    const now = new Date();
    const dateStr = now.toLocaleString('pt-BR');
    
    const giftData = {
        giftId: giftId,
        giftName: gifts.find(g => g.id === giftId).name,
        guestName: guestName,
        date: dateStr
    };
    
    selectedGifts.push(giftData);
    localStorage.setItem('selectedGifts', JSON.stringify(selectedGifts));
}

// Renderizar grid de presentes
function renderGifts() {
    const grid = document.getElementById('giftGrid');
    grid.innerHTML = '';
    
    gifts.forEach(gift => {
        const isSelected = selectedGifts.some(sg => sg.giftId === gift.id);
        
        const card = document.createElement('div');
        card.className = `gift-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
            <img src="${gift.image}" alt="${gift.name}" class="gift-image">
            <div class="gift-info">
                <div class="gift-name">${gift.name}</div>
                ${!isSelected ? '<div class="click-indicator">Clique para escolher</div>' : ''}
            </div>
        `;
        
        if (!isSelected) {
            card.addEventListener('click', () => openModal(gift));
        }
        
        grid.appendChild(card);
    });
}

// Abrir modal
function openModal(gift) {
    selectedGift = gift;
    document.getElementById('modalTitle').textContent = gift.name;
    document.getElementById('modalImage').src = gift.image;
    document.getElementById('guestName').value = '';
    
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
}

// Fechar modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    selectedGift = null;
}

// Confirmar presente
function confirmGift() {
    const guestName = document.getElementById('guestName').value.trim();
    
    if (!guestName) {
        alert('Por favor, digite seu nome!');
        return;
    }
    
    if (!selectedGift) return;
    
    // Salvar presente
    saveSelectedGift(selectedGift.id, guestName);
    
    // Fechar modal de seleção
    closeModal();
    
    // Mostrar modal de agradecimento
    document.getElementById('thanksModal').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
    
    // Redirecionar após 3 segundos
    setTimeout(() => {
        window.location.href = 'wedding_final_html.html';
    }, 3000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadSelectedGifts();
    renderGifts();
    
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('confirmBtn').addEventListener('click', confirmGift);
    
    document.getElementById('overlay').addEventListener('click', () => {
        closeModal();
        document.getElementById('thanksModal').style.display = 'none';
    });
});