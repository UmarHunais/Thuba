// THUBA - Cart System (localStorage)
const Cart = {
    KEY: 'thuba_cart',
    getItems() {
        return JSON.parse(localStorage.getItem(this.KEY) || '[]');
    },
    saveItems(items) {
        localStorage.setItem(this.KEY, JSON.stringify(items));
        this.updateUI();
    },
    addItem(productId, qty = 1) {
        const items = this.getItems();
        const existing = items.find(i => i.id === productId);
        if (existing) { existing.qty += qty; }
        else { items.push({ id: productId, qty }); }
        this.saveItems(items);
        this.openSidebar();
    },
    removeItem(productId) {
        const items = this.getItems().filter(i => i.id !== productId);
        this.saveItems(items);
    },
    updateQty(productId, qty) {
        if (qty <= 0) { this.removeItem(productId); return; }
        const items = this.getItems();
        const item = items.find(i => i.id === productId);
        if (item) { item.qty = qty; this.saveItems(items); }
    },
    getTotal() {
        return this.getItems().reduce((sum, item) => {
            const product = getProductById(item.id);
            return sum + (product ? product.price * item.qty : 0);
        }, 0);
    },
    getCount() {
        return this.getItems().reduce((sum, item) => sum + item.qty, 0);
    },
    clear() {
        localStorage.removeItem(this.KEY);
        this.updateUI();
    },
    updateUI() {
        // Update cart count badges
        document.querySelectorAll('.cart-count').forEach(el => {
            const count = this.getCount();
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
        this.renderSidebar();
    },
    renderSidebar() {
        const container = document.getElementById('cart-items');
        const totalEl = document.getElementById('cart-total');
        if (!container) return;
        const items = this.getItems();
        if (items.length === 0) {
            container.innerHTML = '<div class="cart-empty"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg><p>Your cart is empty</p><a href="' + Cart.getPagePath('pages/shop.html') + '" class="btn btn-primary">Continue Shopping</a></div>';
            if (totalEl) totalEl.textContent = 'Rs. 0';
            return;
        }
        container.innerHTML = items.map(item => {
            const p = getProductById(item.id);
            if (!p) return '';
            return `<div class="cart-item" data-id="${p.id}">
                <img src="${p.image}" alt="${p.name}">
                <div class="cart-item-info">
                    <span class="cart-item-name">${p.name}</span>
                    <span class="cart-item-price">${formatPrice(p.price)}</span>
                    <div class="cart-item-qty">
                        <button onclick="Cart.updateQty(${p.id},${item.qty - 1})">-</button>
                        <span>${item.qty}</span>
                        <button onclick="Cart.updateQty(${p.id},${item.qty + 1})">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="Cart.removeItem(${p.id})">Remove</button>
                </div>
            </div>`;
        }).join('');
        if (totalEl) totalEl.textContent = formatPrice(this.getTotal());
    },
    openSidebar() {
        document.getElementById('cart-overlay')?.classList.add('active');
        document.getElementById('cart-sidebar')?.classList.add('active');
        document.body.style.overflow = 'hidden';
    },
    closeSidebar() {
        document.getElementById('cart-overlay')?.classList.remove('active');
        document.getElementById('cart-sidebar')?.classList.remove('active');
        document.body.style.overflow = '';
    },
    getPagePath(path) {
        const loc = window.location.pathname;
        if (loc.includes('/pages/')) return '../' + path;
        return path;
    }
};

// Generate cart sidebar HTML
function initCartSidebar() {
    const sidebarHTML = `
    <div class="cart-overlay" id="cart-overlay" onclick="Cart.closeSidebar()"></div>
    <div class="cart-sidebar" id="cart-sidebar">
        <div class="cart-header">
            <h3>Shopping Bag</h3>
            <button class="cart-close" onclick="Cart.closeSidebar()">&times;</button>
        </div>
        <div class="cart-items" id="cart-items"></div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Total</span>
                <span id="cart-total">Rs. 0</span>
            </div>
            <a href="${Cart.getPagePath('pages/checkout.html')}" class="btn btn-primary" style="text-align:center">Checkout</a>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', sidebarHTML);
    Cart.updateUI();
}

// Order via WhatsApp
function orderViaWhatsApp(name, phone, address, city) {
    const items = Cart.getItems();
    let msg = `Hello Thuba! I'd like to place an order.\n\n`;
    msg += `*Customer Details*\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nCity: ${city}\n\n`;
    msg += `*Order Details*\n`;
    items.forEach(item => {
        const p = getProductById(item.id);
        if (p) msg += `- ${p.name} x${item.qty} = ${formatPrice(p.price * item.qty)}\n`;
    });
    msg += `\n*Total: ${formatPrice(Cart.getTotal())}*`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/94778502118?text=${encoded}`, '_blank');
    Cart.clear();
}

document.addEventListener('DOMContentLoaded', initCartSidebar);
