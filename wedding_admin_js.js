// Total de presentes disponíveis
const TOTAL_GIFTS = 60;

// Aguardar Firebase estar pronto
function waitForFirebase() {
    return new Promise((resolve) => {
        const checkFirebase = setInterval(() => {
            if (window.firebaseDb) {
                clearInterval(checkFirebase);
                resolve();
            }
        }, 100);
    });
}

// Carregar dados dos presentes do Firestore
async function loadGiftsData() {
    try {
        // Aguardar Firebase estar pronto
        await waitForFirebase();
        
        const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js");
        const db = window.firebaseDb;
        
        console.log('Carregando presentes do Firestore...');
        const querySnapshot = await getDocs(collection(db, 'selectedGifts'));
        
        const giftsData = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log(`Documento ${doc.id}:`, data);
            
            // Só adiciona se estiver ocupado E tiver nome
            if (data.occupied === true && data.guestName && data.guestName.trim() !== '') {
                giftsData.push({
                    giftId: data.giftId,
                    giftName: data.giftName,
                    guestName: data.guestName,
                    date: data.date || 'Data não disponível'
                });
            }
        });
        
        console.log(`Total de presentes ocupados: ${giftsData.length}`);
        return giftsData;
    } catch (error) {
        console.error('Erro ao carregar presentes:', error);
        return [];
    }
}

// Renderizar lista de presentes
async function renderGiftsList() {
    const giftsData = await loadGiftsData();
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
        try {
            // Tentar converter as datas
            const dateA = new Date(a.date.split(' ').reverse().join(' '));
            const dateB = new Date(b.date.split(' ').reverse().join(' '));
            return dateB - dateA;
        } catch (e) {
            return 0; // Se der erro na conversão, manter ordem original
        }
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

// Limpar todos os dados - resetar todos os presentes para occupied: false
async function clearAllData() {
    if (confirm('Tem certeza que deseja limpar TODOS os dados? Esta ação não pode ser desfeita!')) {
        if (confirm('Confirmação final: Realmente deseja resetar todos os presentes escolhidos?')) {
            try {
                await waitForFirebase();
                
                const { collection, getDocs, updateDoc, doc } = await import("https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js");
                const db = window.firebaseDb;
                
                console.log('Resetando todos os presentes...');
                const querySnapshot = await getDocs(collection(db, 'selectedGifts'));
                
                const updatePromises = [];
                querySnapshot.forEach((docSnap) => {
                    const docRef = doc(db, 'selectedGifts', docSnap.id);
                    updatePromises.push(
                        updateDoc(docRef, {
                            guestName: '',
                            date: '',
                            occupied: false,
                            timestamp: null
                        })
                    );
                });
                
                await Promise.all(updatePromises);
                
                console.log('Todos os presentes foram resetados!');
                renderGiftsList();
                alert('Todos os dados foram resetados com sucesso!');
            } catch (error) {
                console.error('Erro ao resetar dados:', error);
                alert('Erro ao resetar dados. Tente novamente.');
            }
        }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Página admin carregada');
    
    // Aguardar Firebase e renderizar
    await waitForFirebase();
    console.log('Firebase pronto, carregando presentes...');
    
    renderGiftsList();
    
    document.getElementById('clearBtn').addEventListener('click', clearAllData);
    
    // Atualizar a cada 5 segundos (caso múltiplas pessoas estejam escolhendo)
    setInterval(renderGiftsList, 5000);
});