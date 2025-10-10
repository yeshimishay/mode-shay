// =======================
// PANIER DYNAMIQUE
// =======================
const addButtons = document.querySelectorAll('.add-cart');
const cartCount = document.getElementById('cart-count');
let count = 0;

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        cartCount.classList.add('bump');
        setTimeout(() => cartCount.classList.remove('bump'), 200);
        btn.textContent = "Ajouté !";
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = "Ajouter au panier";
            btn.disabled = false;
        }, 1000);
    });
});

// =======================
// MODAL CONNEXION
// =======================
const loginBtn = document.getElementById('login-btn');
const modal = document.getElementById('login-modal');
const closeModal = document.querySelector('.close');

loginBtn.addEventListener('click', () => { modal.style.display = 'flex'; });
closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', (e) => { if(e.target == modal) modal.style.display = 'none'; });

// =======================
// MENU HAMBURGER
// =======================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// =======================
// MOTS-CLÉS INTERACTIFS
// =======================
const keywords = document.querySelectorAll('.keywords span');
keywords.forEach(kw => {
    kw.addEventListener('click', () => {
        alert(`Filtrer les produits par "${kw.textContent}" (fonction à compléter)`);
    });
});