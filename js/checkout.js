// THUBA - Checkout JS
document.addEventListener('DOMContentLoaded', () => {
    const items = Cart.getItems();
    const container = document.getElementById('checkout-content');
    if (!items.length) {
        container.innerHTML = '<div class="checkout-empty"><h2>Your Cart is Empty</h2><p>Add some items to your cart before checking out.</p><a href="shop.html" class="btn btn-primary btn-lg">Continue Shopping</a></div>';
        return;
    }
    // Render order summary items
    const summaryItems = document.getElementById('summary-items');
    summaryItems.innerHTML = items.map(item => {
        const p = getProductById(item.id);
        if (!p) return '';
        return `<div class="order-summary-item"><img src="${p.image}" alt="${p.name}"><div class="order-summary-item-info"><span class="name">${p.name}</span><span class="meta">Qty: ${item.qty}</span></div><span class="price">${formatPrice(p.price * item.qty)}</span></div>`;
    }).join('');
    document.getElementById('summary-subtotal').textContent = formatPrice(Cart.getTotal());
    document.getElementById('summary-total').textContent = formatPrice(Cart.getTotal());

    // Form submit
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('c-name').value.trim();
        const phone = document.getElementById('c-phone').value.trim();
        const address = document.getElementById('c-address').value.trim();
        const city = document.getElementById('c-city').value.trim();
        if (!name || !phone || !address || !city) { alert('Please fill in all fields.'); return; }
        orderViaWhatsApp(name, phone, address, city);
    });
});
