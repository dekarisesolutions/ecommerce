/* script.js */

// ==========================================================================
// DEMO DATA
// ==========================================================================
const productsData = [
    // Mobiles
    { id: 1, name: "iPhone 16 Pro", category: "Mobiles", subcategory: "Smartphones", brand: "Apple", price: 999, originalPrice: 1099, discount: 9, rating: 4.8, reviews: 1245, image: "assets/images/iphone.jpg", description: "The ultimate iPhone with A18 Pro chip.", stock: 15, badge: "New" },
    { id: 2, name: "Samsung Galaxy S25 Ultra", category: "Mobiles", subcategory: "Smartphones", brand: "Samsung", price: 1199, originalPrice: 1299, discount: 8, rating: 4.9, reviews: 856, image: "assets/images/iphone.jpg", description: "AI-powered performance with S-Pen.", stock: 10, badge: "Bestseller" },
    { id: 3, name: "OnePlus 13", category: "Mobiles", subcategory: "Smartphones", brand: "OnePlus", price: 699, originalPrice: 799, discount: 12, rating: 4.7, reviews: 520, image: "assets/images/iphone.jpg", description: "Fast and smooth with Hasselblad camera.", stock: 25, badge: "Sale" },
    { id: 4, name: "Google Pixel 9 Pro", category: "Mobiles", subcategory: "Smartphones", brand: "Google", price: 899, originalPrice: 999, discount: 10, rating: 4.6, reviews: 430, image: "assets/images/iphone.jpg", description: "Best camera with Gemini AI.", stock: 18, badge: "" },
    { id: 5, name: "Redmi Note 14 Pro", category: "Mobiles", subcategory: "Smartphones", brand: "Xiaomi", price: 299, originalPrice: 349, discount: 14, rating: 4.5, reviews: 2100, image: "assets/images/iphone.jpg", description: "Mid-range king with 200MP camera.", stock: 50, badge: "" },
    { id: 6, name: "Realme 13 Pro+", category: "Mobiles", subcategory: "Smartphones", brand: "Realme", price: 349, originalPrice: 399, discount: 12, rating: 4.4, reviews: 890, image: "assets/images/iphone.jpg", description: "Curved display and premium design.", stock: 30, badge: "" },
    { id: 7, name: "iPad Air M2", category: "Mobiles", subcategory: "Tablets", brand: "Apple", price: 599, originalPrice: 649, discount: 8, rating: 4.9, reviews: 750, image: "assets/images/iphone.jpg", description: "Supercharged by M2 chip.", stock: 22, badge: "" },
    { id: 8, name: "Samsung Galaxy Tab S9", category: "Mobiles", subcategory: "Tablets", brand: "Samsung", price: 799, originalPrice: 899, discount: 11, rating: 4.8, reviews: 410, image: "assets/images/iphone.jpg", description: "Premium Android tablet with AMOLED display.", stock: 12, badge: "" },
    
    // Electronics
    { id: 9, name: "MacBook Air M3", category: "Electronics", subcategory: "Laptops", brand: "Apple", price: 1099, originalPrice: 1199, discount: 8, rating: 4.9, reviews: 1560, image: "assets/images/laptop.jpg", description: "Lean. Mean. M3 machine.", stock: 20, badge: "Popular" },
    { id: 10, name: "Dell XPS 15", category: "Electronics", subcategory: "Laptops", brand: "Dell", price: 1299, originalPrice: 1499, discount: 13, rating: 4.7, reviews: 680, image: "assets/images/laptop.jpg", description: "Creator's choice with OLED display.", stock: 15, badge: "" },
    { id: 11, name: "Sony WH-1000XM5", category: "Electronics", subcategory: "Headphones", brand: "Sony", price: 348, originalPrice: 399, discount: 13, rating: 4.8, reviews: 3200, image: "assets/images/laptop.jpg", description: "Industry leading noise cancellation.", stock: 40, badge: "Sale" },
    { id: 12, name: "Samsung 55\" Neo QLED 4K", category: "Electronics", subcategory: "TVs", brand: "Samsung", price: 899, originalPrice: 1099, discount: 18, rating: 4.7, reviews: 450, image: "assets/images/laptop.jpg", description: "Brilliant 4K AI upscaling.", stock: 8, badge: "" },
    { id: 13, name: "Apple AirPods Pro 2", category: "Electronics", subcategory: "Headphones", brand: "Apple", price: 249, originalPrice: 299, discount: 17, rating: 4.9, reviews: 5400, image: "assets/images/laptop.jpg", description: "Magic like you've never heard.", stock: 60, badge: "Bestseller" },
    { id: 14, name: "Apple Watch Series 10", category: "Electronics", subcategory: "Smart Watches", brand: "Apple", price: 399, originalPrice: 399, discount: 0, rating: 4.8, reviews: 890, image: "assets/images/laptop.jpg", description: "Thinner, lighter, brighter.", stock: 25, badge: "New" },
    { id: 15, name: "Canon EOS R5", category: "Electronics", subcategory: "Cameras", brand: "Canon", price: 2999, originalPrice: 3399, discount: 12, rating: 4.9, reviews: 210, image: "assets/images/laptop.jpg", description: "Professional mirrorless camera.", stock: 5, badge: "" },
    { id: 16, name: "JBL Flip 6", category: "Electronics", subcategory: "Speakers", brand: "JBL", price: 99, originalPrice: 129, discount: 23, rating: 4.6, reviews: 1800, image: "assets/images/laptop.jpg", description: "Portable waterproof speaker.", stock: 45, badge: "" },

    // Grocery
    { id: 17, name: "Premium India Gate Basmati Rice", category: "Grocery", subcategory: "Staples", brand: "India Gate", price: 25, originalPrice: 30, discount: 16, rating: 4.8, reviews: 4500, image: "assets/images/grocery.jpg", description: "Aged premium basmati rice, 5kg.", stock: 100, badge: "Sale" },
    { id: 18, name: "Aashirvaad Whole Wheat Atta", category: "Grocery", subcategory: "Staples", brand: "Aashirvaad", price: 12, originalPrice: 15, discount: 20, rating: 4.7, reviews: 3200, image: "assets/images/grocery.jpg", description: "100% pure whole wheat flour, 10kg.", stock: 150, badge: "" },
    { id: 19, name: "Fortune Sunflower Oil", category: "Grocery", subcategory: "Staples", brand: "Fortune", price: 18, originalPrice: 22, discount: 18, rating: 4.6, reviews: 2100, image: "assets/images/grocery.jpg", description: "Refined sunflower oil, 5L.", stock: 80, badge: "" },
    { id: 20, name: "Amul Taaza Milk Carton", category: "Grocery", subcategory: "Dairy", brand: "Amul", price: 4, originalPrice: 4, discount: 0, rating: 4.9, reviews: 8900, image: "assets/images/grocery.jpg", description: "Toned milk, 1L tetra pack.", stock: 200, badge: "" },
    { id: 21, name: "Britannia Good Day Cookies", category: "Grocery", subcategory: "Snacks", brand: "Britannia", price: 5, originalPrice: 6, discount: 16, rating: 4.5, reviews: 1500, image: "assets/images/grocery.jpg", description: "Cashew cookies family pack.", stock: 120, badge: "" },
    { id: 22, name: "Tata Tea Gold", category: "Grocery", subcategory: "Beverages", brand: "Tata", price: 8, originalPrice: 10, discount: 20, rating: 4.7, reviews: 3400, image: "assets/images/grocery.jpg", description: "Premium rich tea leaves, 500g.", stock: 90, badge: "" },
    { id: 23, name: "Nescafe Classic Coffee", category: "Grocery", subcategory: "Beverages", brand: "Nescafe", price: 15, originalPrice: 18, discount: 16, rating: 4.8, reviews: 4100, image: "assets/images/grocery.jpg", description: "Instant coffee powder, 200g.", stock: 60, badge: "" },
    { id: 24, name: "Dove Deep Moisture Body Wash", category: "Grocery", subcategory: "Personal Care", brand: "Dove", price: 12, originalPrice: 16, discount: 25, rating: 4.6, reviews: 1200, image: "assets/images/grocery.jpg", description: "Nourishing body wash, 800ml.", stock: 45, badge: "Sale" }
];

const coupons = {
    'WELCOME10': { type: 'percent', value: 10, min: 0 },
    'SAVE500': { type: 'flat', value: 50, min: 200 }, // Scaled down flat value for demo prices
    'FREESHIP': { type: 'shipping', value: 0, min: 50 }
};

// ==========================================================================
// STATE MANAGEMENT (LocalStorage)
// ==========================================================================
let appState = {
    cart: JSON.parse(localStorage.getItem('shopnex_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('shopnex_wishlist')) || [],
    orders: JSON.parse(localStorage.getItem('shopnex_orders')) || [],
    user: JSON.parse(localStorage.getItem('shopnex_user')) || null,
    appliedCoupon: null
};

function saveState() {
    localStorage.setItem('shopnex_cart', JSON.stringify(appState.cart));
    localStorage.setItem('shopnex_wishlist', JSON.stringify(appState.wishlist));
    localStorage.setItem('shopnex_orders', JSON.stringify(appState.orders));
    if (appState.user) localStorage.setItem('shopnex_user', JSON.stringify(appState.user));
    else localStorage.removeItem('shopnex_user');
    
    updateBadges();
}

// ==========================================================================
// CORE APP LOGIC & ROUTING
// ==========================================================================
let currentCategory = 'All';
let filteredProducts = [...productsData];
let searchKeyword = '';

function initApp() {
    updateBadges();
    
    // Check if logged in
    if (!appState.user) {
        // Allow browsing, but some actions need login
    }
    
    // Init hero slider
    initSlider();
    
    // Default route
    navigate('home');
}

function navigate(viewId, param = null) {
    // Show spinner briefly for realistic feel
    document.getElementById('loading-spinner').classList.add('active');
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    
    // Handle auth routes
    if ((viewId === 'profile' || viewId === 'orders' || viewId === 'checkout') && !appState.user) {
        viewId = 'login';
        showToast('Please login to continue', 'warning');
    }
    
    // Admin guards
    if (viewId === 'admin' && (!appState.user || appState.user.role !== 'admin')) {
        viewId = 'login';
        switchLoginTab('admin');
    }
    if (viewId === 'delivery' && (!appState.user || appState.user.role !== 'delivery')) {
        viewId = 'login';
        switchLoginTab('delivery');
    }

    setTimeout(() => {
        document.getElementById('loading-spinner').classList.remove('active');
        document.getElementById(`view-${viewId}`).classList.add('active');
        window.scrollTo(0, 0);
        
        // Update Mobile Nav
        document.querySelectorAll('#mobile-bottom-nav .nav-item').forEach(el => el.classList.remove('active'));
        let navItem = document.querySelector(`#mobile-bottom-nav .nav-item[onclick*="${viewId}"]`);
        if(navItem) navItem.classList.add('active');

        // Route specific initialization
        switch(viewId) {
            case 'home':
                renderProducts(productsData.filter(p => p.category === 'Mobiles'), 'home-mobiles');
                renderProducts(productsData.filter(p => p.category === 'Electronics'), 'home-electronics');
                renderProducts(productsData.filter(p => p.category === 'Grocery'), 'home-grocery');
                break;
            case 'category':
                currentCategory = param || 'All';
                document.getElementById('category-title').innerText = currentCategory === 'All' ? 'All Products' : currentCategory;
                buildFilters();
                applyFilters();
                break;
            case 'cart':
                renderCart();
                break;
            case 'orders':
                renderOrders();
                break;
            case 'wishlist':
                renderWishlist();
                break;
            case 'admin':
                renderAdminDashboard();
                break;
            case 'delivery':
                renderDeliveryDashboard();
                break;
        }
    }, 300);
}

function goBack() {
    navigate('category', currentCategory);
}

// ==========================================================================
// UI HELPERS (Toasts, Modals, Badges)
// ==========================================================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = type === 'success' ? '✓' : '!';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => {
        if(container.contains(toast)) container.removeChild(toast);
    }, 3000);
}

function updateBadges() {
    const cartCount = appState.cart.reduce((acc, item) => acc + item.qty, 0);
    const wishCount = appState.wishlist.length;
    
    document.getElementById('cart-badge').innerText = cartCount;
    document.getElementById('mobile-cart-badge').innerText = cartCount;
    document.getElementById('wishlist-badge').innerText = wishCount;
    
    if(cartCount > 0) {
        document.querySelector('.cart-nav-item .badge').style.display = 'block';
    } else {
        document.querySelector('.cart-nav-item .badge').style.display = 'none';
    }
}

// Bottom Sheet (Mobile)
function openFilterSheet() {
    document.getElementById('bottom-sheet-overlay').classList.add('active');
    document.getElementById('filter-bottom-sheet').classList.add('open');
    // Copy desktop filters to mobile
    document.getElementById('mobile-filters-content').innerHTML = document.getElementById('desktop-filters').innerHTML;
}
function closeBottomSheet() {
    document.getElementById('bottom-sheet-overlay').classList.remove('active');
    document.getElementById('filter-bottom-sheet').classList.remove('open');
}

// Mobile Menu
function toggleMobileMenu() {
    // Simple implementation for demo
    navigate('category', 'All');
}

// ==========================================================================
// PRODUCT RENDERING & INTERACTIONS
// ==========================================================================
function generateStars(rating) {
    let stars = '';
    for(let i=1; i<=5; i++) {
        if(i <= Math.round(rating)) stars += '<span class="star">★</span>';
        else stars += '<span style="color:#e2e8f0">★</span>';
    }
    return stars;
}

function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (products.length === 0) {
        container.innerHTML = '';
        if(containerId === 'category-products') {
            document.getElementById('empty-state').classList.remove('hidden');
            document.getElementById('product-count').innerText = `0 products found`;
        }
        return;
    }
    
    if(containerId === 'category-products') {
        document.getElementById('empty-state').classList.add('hidden');
        document.getElementById('product-count').innerText = `${products.length} products found`;
    }

    let html = '';
    products.forEach(p => {
        const isWishlisted = appState.wishlist.includes(p.id);
        html += `
            <div class="product-card" onclick="viewProductDetails(${p.id})">
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(event, ${p.id})">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                </button>
                <img src="${p.image}" alt="${p.name}" class="product-img">
                <div class="product-brand">${p.brand}</div>
                <h3 class="product-title">${p.name}</h3>
                <div class="product-rating">
                    ${generateStars(p.rating)} <span>(${p.reviews})</span>
                </div>
                <div class="product-price-row">
                    <span class="price">$${p.price}</span>
                    <span class="mrp">$${p.originalPrice}</span>
                    <span class="discount">${p.discount}% OFF</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(event, ${p.id})">Add to Cart</button>
            </div>
        `;
    });
    container.innerHTML = html;
}

function viewProductDetails(id) {
    const product = productsData.find(p => p.id === id);
    if(!product) return;
    
    const isWishlisted = appState.wishlist.includes(product.id);
    
    let specsHtml = '';
    if (product.category === 'Mobiles') {
        specsHtml = `<li>8GB RAM | 256GB ROM</li><li>6.7" OLED Display</li><li>5G Dual SIM</li>`;
    } else if (product.category === 'Electronics') {
        specsHtml = `<li>1 Year Warranty</li><li>Fast Charging</li><li>Bluetooth 5.3</li>`;
    } else {
        specsHtml = `<li>Fresh Quality</li><li>Pack Size: Standard</li><li>Best before 6 months</li>`;
    }

    const html = `
        <div class="pd-image-section">
            <img src="${product.image}" alt="${product.name}" class="pd-image">
        </div>
        <div class="pd-info-section">
            <div class="pd-brand">${product.brand}</div>
            <h1 class="pd-title">${product.name}</h1>
            <div class="pd-rating">${generateStars(product.rating)} (${product.reviews} reviews)</div>
            <div class="pd-price-row">
                <span class="pd-price">$${product.price}</span>
                <span class="mrp">$${product.originalPrice}</span>
                <span class="discount">${product.discount}% OFF</span>
            </div>
            <p class="pd-desc">${product.description}</p>
            
            <div class="pd-specs">
                <h4>Specifications:</h4>
                <ul>${specsHtml}</ul>
            </div>
            
            <div style="color: ${product.stock > 0 ? 'var(--success)' : 'var(--danger)'}; font-weight: 500;">
                ${product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </div>
            
            <div class="pd-actions">
                <button class="btn btn-outline" onclick="toggleWishlist(event, ${product.id})">
                    ${isWishlisted ? '❤️ Saved' : '🤍 Wishlist'}
                </button>
                <button class="btn btn-primary" onclick="addToCart(event, ${product.id}); navigate('cart')">Add to Cart</button>
            </div>
        </div>
    `;
    
    document.getElementById('product-details-content').innerHTML = html;
    navigate('product-details');
}

// ==========================================================================
// SEARCH, FILTER & SORT
// ==========================================================================
function performSearch() {
    searchKeyword = document.getElementById('search-input').value.toLowerCase();
    navigate('category', 'All');
}

function buildFilters() {
    // Get unique brands based on current category
    let brands = new Set();
    let cats = new Set();
    
    productsData.forEach(p => {
        cats.add(p.category);
        if(currentCategory === 'All' || p.category === currentCategory) {
            brands.add(p.brand);
        }
    });

    let catHtml = `<div class="filter-item"><input type="radio" name="cat" value="All" ${currentCategory==='All'?'checked':''} onchange="setCategory('All')"> All</div>`;
    cats.forEach(c => {
        catHtml += `<div class="filter-item"><input type="radio" name="cat" value="${c}" ${currentCategory===c?'checked':''} onchange="setCategory('${c}')"> ${c}</div>`;
    });
    
    let brandHtml = '';
    brands.forEach(b => {
        brandHtml += `<div class="filter-item"><input type="checkbox" class="brand-filter" value="${b}" onchange="applyFilters()"> ${b}</div>`;
    });

    document.getElementById('filter-categories').innerHTML = catHtml;
    document.getElementById('filter-brands').innerHTML = brandHtml;
}

function setCategory(cat) {
    currentCategory = cat;
    buildFilters();
    applyFilters();
    document.getElementById('category-title').innerText = currentCategory === 'All' ? 'All Products' : currentCategory;
}

function applyFilters() {
    let result = productsData;
    
    // Category filter
    if (currentCategory !== 'All') {
        result = result.filter(p => p.category === currentCategory);
    }
    
    // Search filter
    if (searchKeyword) {
        result = result.filter(p => 
            p.name.toLowerCase().includes(searchKeyword) || 
            p.brand.toLowerCase().includes(searchKeyword) ||
            p.category.toLowerCase().includes(searchKeyword)
        );
    }
    
    // Brand filter
    const brandCheckboxes = document.querySelectorAll('.brand-filter:checked');
    if (brandCheckboxes.length > 0) {
        const selectedBrands = Array.from(brandCheckboxes).map(cb => cb.value);
        result = result.filter(p => selectedBrands.includes(p.brand));
    }
    
    filteredProducts = result;
    sortProducts(document.getElementById('sort-select').value);
}

function clearFilters() {
    searchKeyword = '';
    document.getElementById('search-input').value = '';
    document.querySelectorAll('.brand-filter').forEach(cb => cb.checked = false);
    applyFilters();
}

function sortProducts(sortBy) {
    let sorted = [...filteredProducts];
    if(sortBy === 'price-low') sorted.sort((a,b) => a.price - b.price);
    if(sortBy === 'price-high') sorted.sort((a,b) => b.price - a.price);
    if(sortBy === 'rating') sorted.sort((a,b) => b.rating - a.rating);
    if(sortBy === 'popular') sorted.sort((a,b) => b.reviews - a.reviews);
    
    renderProducts(sorted, 'category-products');
}

// ==========================================================================
// CART & WISHLIST LOGIC
// ==========================================================================
function toggleWishlist(e, id) {
    e.stopPropagation();
    const index = appState.wishlist.indexOf(id);
    if(index > -1) {
        appState.wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    } else {
        appState.wishlist.push(id);
        showToast('Added to wishlist');
    }
    saveState();
    
    // Re-render if on wishlist page or refresh icon
    if(document.getElementById('view-wishlist').classList.contains('active')) {
        renderWishlist();
    } else if (document.getElementById('view-category').classList.contains('active')) {
        sortProducts(document.getElementById('sort-select').value); // quick re-render
    } else if (document.getElementById('view-home').classList.contains('active')) {
        renderProducts(productsData.slice(0, 8), 'home-products');
    }
}

function renderWishlist() {
    const wProducts = productsData.filter(p => appState.wishlist.includes(p.id));
    if(wProducts.length === 0) {
        document.getElementById('wishlist-grid').innerHTML = '<div class="empty-state"><h3>Your wishlist is empty</h3><button class="btn btn-primary" onclick="navigate(\'home\')">Continue Shopping</button></div>';
    } else {
        renderProducts(wProducts, 'wishlist-grid');
    }
}

function addToCart(e, id) {
    if(e) e.stopPropagation();
    const product = productsData.find(p => p.id === id);
    const cartItem = appState.cart.find(item => item.id === id);
    
    if(cartItem) {
        cartItem.qty += 1;
    } else {
        appState.cart.push({ ...product, qty: 1 });
    }
    
    saveState();
    showToast(`✓ ${product.name} added to cart`);
}

function updateCartQty(id, change) {
    const item = appState.cart.find(i => i.id === id);
    if(!item) return;
    
    item.qty += change;
    if(item.qty <= 0) {
        appState.cart = appState.cart.filter(i => i.id !== id);
    }
    
    appState.appliedCoupon = null; // Reset coupon on cart change
    saveState();
    renderCart();
}

function renderCart() {
    const itemsContainer = document.getElementById('cart-items');
    const summaryContainer = document.getElementById('cart-summary');
    
    if (appState.cart.length === 0) {
        itemsContainer.innerHTML = '<div class="empty-state"><h3>Your cart is empty</h3><button class="btn btn-primary" onclick="navigate(\'home\')">Shop Now</button></div>';
        summaryContainer.innerHTML = '';
        return;
    }
    
    let itemsHtml = '';
    let subtotal = 0;
    
    appState.cart.forEach(item => {
        subtotal += item.price * item.qty;
        itemsHtml += `
            <div class="cart-item">
                <img src="${item.image}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price}</div>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                </div>
                <button class="cart-remove" onclick="updateCartQty(${item.id}, -100)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>
        `;
    });
    
    itemsContainer.innerHTML = itemsHtml;
    
    // Calculate summary
    let discount = 0;
    let shipping = subtotal > 100 ? 0 : 15; // Free shipping over 100
    
    if(appState.appliedCoupon) {
        let code = appState.appliedCoupon;
        let c = coupons[code];
        if(subtotal >= c.min) {
            if(c.type === 'percent') discount = (subtotal * c.value) / 100;
            if(c.type === 'flat') discount = c.value;
            if(c.type === 'shipping') shipping = 0;
        } else {
            appState.appliedCoupon = null; // invalid
        }
    }
    
    let total = subtotal - discount + shipping;
    
    summaryContainer.innerHTML = `
        <h3>Order Summary</h3>
        <div class="summary-row">
            <span>Subtotal (${appState.cart.length} items)</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Discount</span>
            <span class="text-success">-$${discount.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Delivery</span>
            <span>${shipping === 0 ? '<span class="text-success">Free</span>' : '$'+shipping.toFixed(2)}</span>
        </div>
        
        <div class="coupon-box">
            <input type="text" id="coupon-input" placeholder="Coupon Code" class="form-group" style="margin:0;flex:1;padding:8px" value="${appState.appliedCoupon||''}">
            <button class="btn btn-outline" onclick="applyCoupon()">Apply</button>
        </div>
        <p style="font-size:11px;color:var(--text-light)">Demo codes: WELCOME10, SAVE500, FREESHIP</p>
        
        <div class="summary-row total">
            <span>Grand Total</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        <button class="btn btn-primary btn-block btn-lg" onclick="navigate('checkout')">Proceed to Checkout</button>
    `;
}

function applyCoupon() {
    const code = document.getElementById('coupon-input').value.toUpperCase().trim();
    if(coupons[code]) {
        appState.appliedCoupon = code;
        showToast('Coupon applied successfully');
        renderCart();
    } else {
        showToast('Invalid coupon code', 'error');
    }
}

// ==========================================================================
// CHECKOUT & ORDERS
// ==========================================================================
function processCheckout(e) {
    e.preventDefault();
    
    if(appState.cart.length === 0) {
        showToast('Cart is empty', 'error');
        return;
    }
    
    const orderId = 'SNX' + new Date().getFullYear() + Math.floor(Math.random() * 100000);
    
    // Calculate total
    let subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let total = subtotal; // Simplified for demo
    
    const newOrder = {
        id: orderId,
        date: new Date().toLocaleDateString(),
        items: [...appState.cart],
        total: total,
        status: 'Processing',
        customerName: document.getElementById('chk-name').value,
        address: document.getElementById('chk-address').value
    };
    
    appState.orders.unshift(newOrder);
    appState.cart = [];
    appState.appliedCoupon = null;
    saveState();
    
    document.getElementById('success-order-id').innerText = orderId;
    navigate('order-success');
}

function renderOrders() {
    const container = document.getElementById('orders-list');
    
    if(appState.orders.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>No orders yet</h3><button class="btn btn-primary" onclick="navigate(\'home\')">Start Shopping</button></div>';
        return;
    }
    
    let html = '';
    appState.orders.forEach(order => {
        let itemsHtml = order.items.map(i => `${i.name} (x${i.qty})`).join(', ');
        
        // Dynamic status color
        let sColor = 'var(--warning)';
        if(order.status === 'Delivered') sColor = 'var(--success)';
        if(order.status === 'Cancelled') sColor = 'var(--danger)';

        html += `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <strong>Order ID: ${order.id}</strong>
                        <div style="font-size:12px;color:var(--text-light)">Placed on ${order.date}</div>
                    </div>
                    <div class="order-status" style="color:${sColor}">${order.status}</div>
                </div>
                <div class="order-items">
                    <p style="font-size:14px">${itemsHtml}</p>
                    <p style="font-weight:600">Total: $${order.total.toFixed(2)}</p>
                </div>
                <div class="order-footer">
                    <button class="btn btn-outline">Track Order</button>
                    ${order.status !== 'Cancelled' ? `<button class="btn btn-outline text-danger" onclick="cancelOrder('${order.id}')">Cancel</button>` : ''}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function cancelOrder(id) {
    if(confirm('Are you sure you want to cancel this order?')) {
        let order = appState.orders.find(o => o.id === id);
        if(order) {
            order.status = 'Cancelled';
            saveState();
            renderOrders();
            showToast('Order Cancelled');
        }
    }
}

// ==========================================================================
// AUTHENTICATION (DEMO)
// ==========================================================================
let currentLoginTab = 'customer';

function switchLoginTab(type) {
    currentLoginTab = type;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.tab[onclick="switchLoginTab('${type}')"]`).classList.add('active');
    
    const idInput = document.getElementById('login-id');
    const label = document.getElementById('login-label');
    const passLabel = document.getElementById('login-pass-label');
    
    if(type === 'customer') {
        label.innerText = 'Mobile Number';
        idInput.value = '9876543210';
        passLabel.innerText = 'OTP';
    } else if(type === 'admin') {
        label.innerText = 'Email';
        idInput.value = 'admin@shopnex.demo';
        passLabel.innerText = 'Password';
    } else {
        label.innerText = 'Mobile Number';
        idInput.value = '9999999999';
        passLabel.innerText = 'Password';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const id = document.getElementById('login-id').value;
    const pass = document.getElementById('login-password').value;
    
    // Simple demo validation
    if(currentLoginTab === 'customer' && id === '9876543210' && pass === '123456') {
        appState.user = { role: 'customer', name: 'John Doe', phone: '9876543210' };
        saveState();
        navigate('home');
        showToast('Logged in successfully');
    } 
    else if(currentLoginTab === 'admin' && id === 'admin@shopnex.demo' && pass === 'admin123') {
        appState.user = { role: 'admin', name: 'Admin' };
        saveState();
        navigate('admin');
        showToast('Welcome Admin');
    }
    else if(currentLoginTab === 'delivery' && id === '9999999999' && pass === '123456') {
        appState.user = { role: 'delivery', name: 'Delivery Agent' };
        saveState();
        navigate('delivery');
        showToast('Welcome Delivery Partner');
    }
    else {
        showToast('Invalid credentials', 'error');
    }
}

function logout() {
    appState.user = null;
    saveState();
    navigate('home');
    showToast('Logged out');
}

// ==========================================================================
// ADMIN & DELIVERY DASHBOARDS
// ==========================================================================
function renderAdminDashboard() {
    const tbody = document.getElementById('admin-orders-table');
    let html = '';
    
    // Get all orders from localStorage (simulating DB)
    const allOrders = appState.orders;
    
    if(allOrders.length === 0) {
        html = '<tr><td colspan="5" class="text-center">No recent orders</td></tr>';
    } else {
        allOrders.forEach(o => {
            html += `
                <tr>
                    <td>${o.id}</td>
                    <td>${o.customerName}</td>
                    <td>$${o.total.toFixed(2)}</td>
                    <td><span class="badge" style="position:static;background:${o.status==='Delivered'?'var(--success)':'var(--warning)'}">${o.status}</span></td>
                    <td>
                        <button class="btn btn-outline" style="padding:4px 8px;font-size:12px" onclick="updateOrderStatus('${o.id}', 'Out for Delivery')">Ship</button>
                    </td>
                </tr>
            `;
        });
    }
    tbody.innerHTML = html;
}

function renderDeliveryDashboard() {
    const container = document.getElementById('delivery-orders-list');
    let html = '';
    
    // Simulate getting processing/shipped orders
    const deliveryOrders = appState.orders.filter(o => o.status !== 'Cancelled' && o.status !== 'Delivered');
    
    if(deliveryOrders.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>No pending deliveries</h3></div>';
        return;
    }
    
    deliveryOrders.forEach(o => {
        html += `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <strong>${o.id}</strong>
                        <div>${o.customerName}</div>
                    </div>
                    <div class="order-status" style="color:var(--warning)">${o.status}</div>
                </div>
                <div style="margin-bottom:15px;font-size:14px;color:var(--text-light)">
                    📍 ${o.address}
                </div>
                <div class="order-footer">
                    <button class="btn btn-outline text-success" onclick="updateOrderStatus('${o.id}', 'Delivered')">Mark Delivered</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function updateOrderStatus(id, status) {
    let order = appState.orders.find(o => o.id === id);
    if(order) {
        order.status = status;
        saveState();
        showToast(`Order ${id} marked as ${status}`);
        
        // Re-render current view
        if(document.getElementById('view-admin').classList.contains('active')) renderAdminDashboard();
        if(document.getElementById('view-delivery').classList.contains('active')) renderDeliveryDashboard();
    }
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
window.onload = initApp;

// ==========================================================================
// HERO SLIDER LOGIC
// ==========================================================================
let slideIndex = 0;
let slideInterval;

function initSlider() {
    const slides = document.querySelectorAll('#heroSlider .slide');
    if (slides.length > 0) {
        showSlide(slideIndex);
        startSlideTimer();
    }
}

function startSlideTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        const slides = document.querySelectorAll('#heroSlider .slide');
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }, 5000); // Change slide every 5 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
    startSlideTimer(); // Reset timer on manual click
}

function showSlide(n) {
    const slides = document.querySelectorAll('#heroSlider .slide');
    const dots = document.querySelectorAll('#heroSlider .dot');
    
    if (slides.length === 0) return;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[n].classList.add('active');
    if (dots[n]) dots[n].classList.add('active');
}
