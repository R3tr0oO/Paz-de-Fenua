/* =============================================
   PAZ DE FENUA - JavaScript
   Cosmétiques Naturels de Polynésie
   ============================================= */

// =============================================
// DONNÉES PRODUITS
// =============================================
const products = [
    { 
        id: 1, 
        name: "Huile de Monoï Tiaré", 
        description: "Huile traditionnelle tahitienne à la fleur de tiaré", 
        price: 28.90, 
        icon: "🌺", 
        category: "cheveux", 
        categoryLabel: "Cheveux", 
        longDescription: "Notre huile de Monoï est élaborée selon la méthode traditionnelle tahitienne.", 
        ingredients: "Cocos Nucifera Oil, Gardenia Tahitensis Flower Extract, Tocopherol", 
        usage: "Appliquer sur cheveux secs ou humides.", 
        badge: "Nouveau" 
    },
    { 
        id: 2, 
        name: "Crème Visage Coco-Tamanu", 
        description: "Soin hydratant intense à l'huile de tamanu et lait de coco", 
        price: 35.00, 
        icon: "🥥", 
        category: "soin-visage", 
        categoryLabel: "Soin Visage", 
        longDescription: "Cette crème onctueuse combine les propriétés régénérantes de l'huile de tamanu.", 
        ingredients: "Aqua, Cocos Nucifera Oil, Calophyllum Inophyllum Seed Oil, Glycerin", 
        usage: "Appliquer matin et soir sur une peau propre.", 
        badge: "Best-seller" 
    },
    { 
        id: 3, 
        name: "Baume Lèvres Vanille", 
        description: "Baume nourrissant à la vanille de Tahiti", 
        price: 12.50, 
        icon: "💄", 
        category: "maquillage", 
        categoryLabel: "Maquillage", 
        longDescription: "Un baume fondant qui répare et protège les lèvres sèches.", 
        ingredients: "Ricinus Communis Seed Oil, Cera Alba, Vanilla Planifolia", 
        usage: "Appliquer sur les lèvres aussi souvent que nécessaire." 
    },
    { 
        id: 4, 
        name: "Savon Surgras au Tamanu", 
        description: "Savon artisanal enrichi en huile de tamanu", 
        price: 18.00, 
        icon: "🧼", 
        category: "soin-corps", 
        categoryLabel: "Soin Corps", 
        longDescription: "Ce savon surgras nettoie en douceur tout en préservant la peau.", 
        ingredients: "Sodium Palmate, Sodium Cocoate, Calophyllum Inophyllum Seed Oil", 
        usage: "Faire mousser et appliquer sur le corps." 
    },
    { 
        id: 5, 
        name: "Sérum Perle des Îles", 
        description: "Sérum éclat à la poudre de perle de Tahiti", 
        price: 58.00, 
        icon: "✨", 
        category: "soin-visage", 
        categoryLabel: "Soin Visage", 
        longDescription: "Ce sérum précieux illumine le teint grâce à la poudre de perle.", 
        ingredients: "Aqua, Glycerin, Niacinamide, Pearl Powder, Sodium Hyaluronate", 
        usage: "Appliquer quelques gouttes sur le visage.", 
        badge: "Premium" 
    },
    { 
        id: 6, 
        name: "Masque Argile & Aloe", 
        description: "Masque purifiant à l'argile verte et aloe vera", 
        price: 24.90, 
        icon: "🌿", 
        category: "soin-visage", 
        categoryLabel: "Soin Visage", 
        longDescription: "Ce masque associe l'argile verte purifiante et l'aloe vera hydratant.", 
        ingredients: "Aqua, Montmorillonite, Kaolin, Aloe Barbadensis Leaf Juice", 
        usage: "Laisser poser 10-15 minutes puis rincer." 
    },
    { 
        id: 7, 
        name: "Gommage Café & Coco", 
        description: "Exfoliant corps au café de Tahiti et noix de coco", 
        price: 32.00, 
        icon: "☕", 
        category: "soin-corps", 
        categoryLabel: "Soin Corps", 
        longDescription: "Ce gommage gourmand élimine les cellules mortes.", 
        ingredients: "Sucrose, Coffea Arabica Seed Powder, Cocos Nucifera Oil", 
        usage: "Appliquer sur peau humide en massages circulaires." 
    },
    { 
        id: 8, 
        name: "Lait Corps au Tiaré", 
        description: "Lait hydratant léger au parfum de fleur de tiaré", 
        price: 29.50, 
        icon: "🌴", 
        category: "soin-corps", 
        categoryLabel: "Soin Corps", 
        longDescription: "Ce lait fondant pénètre rapidement pour hydrater sans effet gras.", 
        ingredients: "Aqua, Cocos Nucifera Oil, Gardenia Tahitensis Flower Extract", 
        usage: "Appliquer généreusement après la douche." 
    },
    { 
        id: 9, 
        name: "Crème Anti-Âge Nacre", 
        description: "Soin anti-rides à la nacre de Polynésie", 
        price: 42.00, 
        icon: "💆", 
        category: "soin-visage", 
        categoryLabel: "Soin Visage", 
        longDescription: "Cette crème luxueuse combat les signes de l'âge.", 
        ingredients: "Aqua, Glycerin, Squalane, Pearl Powder, Tocopherol", 
        usage: "Appliquer matin et soir sur visage et cou." 
    },
    { 
        id: 10, 
        name: "Shampoing Coco Réparateur", 
        description: "Shampoing nourrissant au lait de coco", 
        price: 26.50, 
        icon: "🧴", 
        category: "cheveux", 
        categoryLabel: "Cheveux", 
        longDescription: "Ce shampoing crémeux nettoie en douceur les cheveux secs.", 
        ingredients: "Aqua, Sodium Laureth Sulfate, Cocos Nucifera Oil", 
        usage: "Appliquer sur cheveux mouillés, masser puis rincer." 
    },
    { 
        id: 11, 
        name: "Rouge à Lèvres Corail", 
        description: "Rouge à lèvres hydratant aux pigments naturels", 
        price: 38.90, 
        icon: "💋", 
        category: "maquillage", 
        categoryLabel: "Maquillage", 
        longDescription: "Un rouge à lèvres crémeux qui colore intensément.", 
        ingredients: "Ricinus Communis Seed Oil, Cera Alba, CI 77491", 
        usage: "Appliquer directement sur les lèvres." 
    },
    { 
        id: 12, 
        name: "Beurre Corporel Frangipane", 
        description: "Beurre fondant au parfum de frangipane", 
        price: 19.00, 
        icon: "🌸", 
        category: "soin-corps", 
        categoryLabel: "Soin Corps", 
        longDescription: "Ce beurre riche et onctueux fond sur la peau.", 
        ingredients: "Butyrospermum Parkii Butter, Plumeria Alba Flower Extract", 
        usage: "Appliquer sur les zones sèches." 
    }
];

// =============================================
// ÉTAT DE L'APPLICATION
// =============================================
let filteredProducts = [...products];
let currentCategory = 'all';
let currentSort = 'default';
let cart = [];
let favorites = [];
let currentView = 'grid';
let currentPage = 'home';
let selectedQuantity = 1;

// =============================================
// STOCKAGE LOCAL
// =============================================
function loadData() {
    const savedCart = localStorage.getItem('pazdefenua_cart');
    const savedFavorites = localStorage.getItem('pazdefenua_favorites');
    if (savedCart) cart = JSON.parse(savedCart);
    if (savedFavorites) favorites = JSON.parse(savedFavorites);
    updateCart();
    updateFavoritesCount();
}

function saveCart() {
    localStorage.setItem('pazdefenua_cart', JSON.stringify(cart));
}

function saveFavorites() {
    localStorage.setItem('pazdefenua_favorites', JSON.stringify(favorites));
}

// =============================================
// NOTIFICATIONS TOAST
// =============================================
function showToast(message, type = 'default') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast';
    if (type) toast.classList.add(type);
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// =============================================
// NAVIGATION
// =============================================
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) link.classList.add('active');
    });
    
    currentPage = page;
    window.scrollTo(0, 0);
    if (page === 'products') renderProducts();
    if (page === 'favorites') renderFavorites();
    
    document.getElementById('navLinks').classList.remove('mobile-open');
}

function scrollToAbout() {
    document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileNav() {
    document.getElementById('navLinks').classList.toggle('mobile-open');
}

// =============================================
// FILTRES ET TRI
// =============================================
function toggleFilters() {
    document.getElementById('filtersContent').classList.toggle('collapsed');
    document.getElementById('toggleIcon').classList.toggle('collapsed');
}

function setView(view) {
    if (event) event.stopPropagation();
    currentView = view;
    const grid = document.getElementById('productsGrid');
    document.getElementById('gridViewBtn').classList.toggle('active', view === 'grid');
    document.getElementById('listViewBtn').classList.toggle('active', view === 'list');
    grid.classList.toggle('list-view', view === 'list');
}

function filterByCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    applyFilters();
}

function sortProducts() {
    currentSort = document.getElementById('sortSelect').value;
    applyFilters();
}

function applyFilters() {
    filteredProducts = currentCategory === 'all' 
        ? [...products] 
        : products.filter(p => p.category === currentCategory);
    
    switch(currentSort) {
        case 'name-asc': 
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name)); 
            break;
        case 'name-desc': 
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name)); 
            break;
        case 'price-asc': 
            filteredProducts.sort((a, b) => a.price - b.price); 
            break;
        case 'price-desc': 
            filteredProducts.sort((a, b) => b.price - a.price); 
            break;
        default: 
            filteredProducts.sort((a, b) => a.id - b.id);
    }
    
    renderProducts();
}

// =============================================
// FAVORIS
// =============================================
function isFavorite(productId) {
    return favorites.includes(productId);
}

function toggleFavorite(productId, event) {
    if (event) {
        event.stopPropagation();
    }
    
    const btn = event ? event.currentTarget : null;
    
    if (isFavorite(productId)) {
        favorites = favorites.filter(id => id !== productId);
        showToast('Retiré des favoris', 'default');
    } else {
        favorites.push(productId);
        showToast('Ajouté aux favoris ❤️', 'favorite');
        if (btn) {
            btn.classList.add('pop');
            setTimeout(() => btn.classList.remove('pop'), 300);
        }
    }
    
    saveFavorites();
    updateFavoritesCount();
    
    if (btn) {
        btn.classList.toggle('active', isFavorite(productId));
    }
    
    if (currentPage === 'products') renderProducts();
    if (currentPage === 'favorites') renderFavorites();
    
    const productPageOverlay = document.getElementById('productPageOverlay');
    if (productPageOverlay.classList.contains('active')) {
        const favBtn = document.getElementById('productDetailFavBtn');
        if (favBtn) {
            favBtn.classList.toggle('active', isFavorite(productId));
        }
    }
}

function updateFavoritesCount() {
    const count = favorites.length;
    document.getElementById('favCount').textContent = count;
    const productPageFavCount = document.getElementById('productPageFavCount');
    if (productPageFavCount) productPageFavCount.textContent = count;
}

function quickOrderFavorites() {
    if (favorites.length === 0) return;
    
    favorites.forEach(favId => {
        const product = products.find(p => p.id === favId);
        if (product) {
            const existingItem = cart.find(item => item.id === favId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
        }
    });
    
    saveCart();
    updateCart();
    showToast(`${favorites.length} produit(s) ajouté(s) au panier ! 🛒`, 'success');
}

// =============================================
// RENDU DES FAVORIS
// =============================================
function renderFavorites() {
    const grid = document.getElementById('favoritesGrid');
    const banner = document.getElementById('quickOrderBanner');
    const favoriteProducts = products.filter(p => favorites.includes(p.id));
    
    if (favoriteProducts.length === 0) {
        banner.innerHTML = '';
        grid.innerHTML = `
            <div class="empty-favorites" style="grid-column: 1/-1;">
                <div class="empty-favorites-icon">💔</div>
                <h3>Aucun favori pour l'instant</h3>
                <p>Découvrez nos produits et ajoutez vos préférés en cliquant sur le cœur !</p>
                <button class="browse-products-btn" onclick="navigateTo('products')">Parcourir les produits</button>
            </div>
        `;
        return;
    }
    
    const total = favoriteProducts.reduce((sum, p) => sum + p.price, 0);
    
    banner.innerHTML = `
        <div class="quick-order-banner">
            <div class="quick-order-info">
                <h3>⚡ Commande Rapide</h3>
                <p>Ajoutez tous vos favoris au panier en un clic !</p>
            </div>
            <div class="quick-order-total">
                <div class="total-label">${favoriteProducts.length} produit(s)</div>
                <div class="total-amount">${total.toFixed(2)} €</div>
            </div>
            <button class="quick-order-btn" onclick="quickOrderFavorites()">
                <span>🛒</span> Tout ajouter au panier
            </button>
        </div>
    `;
    
    grid.innerHTML = favoriteProducts.map(product => `
        <div class="product-card" onclick="openProductPage(${product.id})">
            <div class="product-image">
                <button class="favorite-btn active" onclick="toggleFavorite(${product.id}, event)" title="Retirer des favoris">
                    <span class="heart-empty">🤍</span>
                    <span class="heart-full">❤️</span>
                </button>
                <div class="product-placeholder">${product.icon}</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price.toFixed(2)} €</span>
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Ajouter</button>
                </div>
            </div>
        </div>
    `).join('');
}

// =============================================
// RENDU DES PRODUITS
// =============================================
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (filteredProducts.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 3rem; color: #999;">Aucun produit trouvé</p>';
        return;
    }
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductPage(${product.id})">
            <div class="product-image">
                <button class="favorite-btn ${isFavorite(product.id) ? 'active' : ''}" onclick="toggleFavorite(${product.id}, event)" title="${isFavorite(product.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
                    <span class="heart-empty">🤍</span>
                    <span class="heart-full">❤️</span>
                </button>
                <div class="product-placeholder">${product.icon}</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price.toFixed(2)} €</span>
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Ajouter</button>
                </div>
            </div>
        </div>
    `).join('');
}

// =============================================
// PAGE PRODUIT DÉTAILLÉE
// =============================================
function openProductPage(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    selectedQuantity = 1;
    const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    
    document.getElementById('productPageContent').innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-image">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <div class="product-detail-favorite">
                    <button class="favorite-btn ${isFavorite(product.id) ? 'active' : ''}" id="productDetailFavBtn" onclick="toggleFavorite(${product.id}, event)" style="width: 50px; height: 50px; font-size: 1.5rem;">
                        <span class="heart-empty">🤍</span>
                        <span class="heart-full">❤️</span>
                    </button>
                </div>
                <div class="product-detail-icon">${product.icon}</div>
            </div>
            <div class="product-detail-info">
                <div class="product-category-tag">${product.categoryLabel}</div>
                <h1 class="product-detail-title">${product.name}</h1>
                <div class="product-detail-price">${product.price.toFixed(2)} €</div>
                <p class="product-detail-description">${product.longDescription}</p>
                
                <div class="product-quantity-selector">
                    <span class="quantity-label">Quantité :</span>
                    <div class="quantity-controls">
                        <button class="quantity-btn-page" onclick="updateSelectedQuantity(-1)">−</button>
                        <span class="quantity-display" id="quantityDisplay">1</span>
                        <button class="quantity-btn-page" onclick="updateSelectedQuantity(1)">+</button>
                    </div>
                </div>
                
                <div class="product-detail-actions">
                    <button class="add-to-cart-large" onclick="addToCartWithQuantity(${product.id})">
                        <span>🛒</span> Ajouter au panier
                    </button>
                    <button class="add-to-favorites-large ${isFavorite(product.id) ? 'active' : ''}" onclick="toggleFavorite(${product.id}, event)" title="${isFavorite(product.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
                        ${isFavorite(product.id) ? '❤️' : '🤍'}
                    </button>
                </div>
                
                <div class="product-features">
                    <div class="feature-item">
                        <div class="feature-icon">🌿</div>
                        <div class="feature-text"><strong>100% Naturel</strong>Sans parabènes</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🚚</div>
                        <div class="feature-text"><strong>Livraison offerte</strong>Dès 50€</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">↩️</div>
                        <div class="feature-text"><strong>Retour gratuit</strong>Sous 30 jours</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="product-sections">
            <div class="product-section-card">
                <h3 class="product-section-title"><span>🌺</span> Ingrédients</h3>
                <p class="product-section-content">${product.ingredients}</p>
            </div>
            <div class="product-section-card">
                <h3 class="product-section-title"><span>📋</span> Conseils d'utilisation</h3>
                <p class="product-section-content">${product.usage}</p>
            </div>
        </div>
        
        ${related.length > 0 ? `
        <div style="margin-top: 4rem; padding-top: 3rem; border-top: 2px solid var(--light);">
            <h2 style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; text-align: center; color: var(--primary); margin-bottom: 2rem;">Vous aimerez aussi</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem;">
                ${related.map(p => `
                    <div onclick="openProductPage(${p.id})" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); cursor: pointer; transition: all 0.3s ease; position: relative;">
                        <button class="favorite-btn ${isFavorite(p.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${p.id}, event)" style="position: absolute; top: 0.5rem; right: 0.5rem; width: 35px; height: 35px; font-size: 1rem;">
                            <span class="heart-empty">🤍</span>
                            <span class="heart-full">❤️</span>
                        </button>
                        <div style="height: 150px; background: linear-gradient(135deg, var(--accent), var(--light)); display: flex; align-items: center; justify-content: center; font-size: 3rem;">${p.icon}</div>
                        <div style="padding: 1rem;">
                            <h4 style="font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: var(--primary); margin-bottom: 0.3rem;">${p.name}</h4>
                            <span style="font-weight: 500; color: var(--secondary);">${p.price.toFixed(2)} €</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
    `;
    
    document.getElementById('productPageOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductPage() {
    document.getElementById('productPageOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function updateSelectedQuantity(change) {
    selectedQuantity = Math.max(1, selectedQuantity + change);
    document.getElementById('quantityDisplay').textContent = selectedQuantity;
}

function addToCartWithQuantity(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += selectedQuantity;
    } else {
        cart.push({ ...product, quantity: selectedQuantity });
    }
    
    saveCart();
    updateCart();
    
    const btn = event.target.closest('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>✓</span> Ajouté !';
    btn.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 1500);
    
    showToast(`${selectedQuantity} × ${product.name} ajouté au panier`, 'success');
}

// =============================================
// PANIER
// =============================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCart();
    
    if (event && event.target) {
        const btn = event.target;
        btn.textContent = 'Ajouté ✓';
        btn.style.background = '#27ae60';
        setTimeout(() => {
            btn.textContent = 'Ajouter';
            btn.style.background = '';
        }, 1000);
    }
    
    showToast(`${product.name} ajouté au panier`, 'success');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) removeFromCart(productId);
        else {
            saveCart();
            updateCart();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const productPageCartCount = document.getElementById('productPageCartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartFooter = document.getElementById('cartFooter');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    if (productPageCartCount) productPageCartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="empty-cart"><div class="empty-cart-icon">🛍️</div><p>Votre panier est vide</p></div>`;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} €</div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">🗑️</button>
                    </div>
                </div>
            </div>
        `).join('');
        cartFooter.style.display = 'block';
        cartTotal.textContent = `${totalPrice.toFixed(2)} €`;
    }
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) return;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showOrderConfirmation(total);
    cart = [];
    saveCart();
    updateCart();
    toggleCart();
}

function showOrderConfirmation(total) {
    const notification = document.createElement('div');
    notification.style.cssText = `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2.5rem 3rem; border-radius: 20px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); z-index: 10000; text-align: center; min-width: 320px;`;
    notification.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
        <div style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #0d4d4d; margin-bottom: 1rem;">Commande validée</div>
        <div style="font-size: 1.5rem; color: #e8a55c; font-weight: 500; margin-bottom: 1.5rem;">Total : ${total.toFixed(2)} €</div>
        <div style="color: #666; margin-bottom: 1.5rem;">Mauruuru ! Merci pour votre commande 🌺</div>
        <button onclick="this.parentElement.remove(); document.getElementById('checkoutOverlay').remove();" style="background: linear-gradient(135deg, #4db8a8 0%, #0a7a8c 100%); color: white; border: none; padding: 1rem 2.5rem; border-radius: 30px; cursor: pointer; font-size: 1rem; font-weight: 500;">Continuer</button>
    `;
    document.body.appendChild(notification);
    
    const overlay = document.createElement('div');
    overlay.id = 'checkoutOverlay';
    overlay.style.cssText = `position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); z-index: 9999;`;
    overlay.onclick = function() { notification.remove(); overlay.remove(); };
    document.body.appendChild(overlay);
}

// =============================================
// FORMULAIRE DE CONTACT
// =============================================
function submitForm() {
    const notification = document.createElement('div');
    notification.style.cssText = `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2.5rem 3rem; border-radius: 20px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); z-index: 10000; text-align: center;`;
    notification.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem;">📨</div>
        <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; color: #0d4d4d; margin-bottom: 1rem;">Message envoyé !</div>
        <div style="color: #666; margin-bottom: 1.5rem;">Nous vous répondrons rapidement.</div>
        <button onclick="this.parentElement.remove(); document.getElementById('formOverlay').remove();" style="background: linear-gradient(135deg, #4db8a8 0%, #0a7a8c 100%); color: white; border: none; padding: 1rem 2rem; border-radius: 30px; cursor: pointer;">OK</button>
    `;
    document.body.appendChild(notification);
    
    const overlay = document.createElement('div');
    overlay.id = 'formOverlay';
    overlay.style.cssText = `position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); z-index: 9999;`;
    overlay.onclick = function() { notification.remove(); overlay.remove(); };
    document.body.appendChild(overlay);
}

// =============================================
// ÉVÉNEMENTS CLAVIER
// =============================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (document.getElementById('productPageOverlay').classList.contains('active')) closeProductPage();
        else if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
    }
});

// =============================================
// INITIALISATION
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    renderProducts();
});
