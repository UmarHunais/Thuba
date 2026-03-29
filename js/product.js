// THUBA - Product Detail JS
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = getProductById(productId);
    if (!product) { window.location.href = 'shop.html'; return; }

    document.title = product.name + ' | Thuba';
    let qty = 1;

    const container = document.getElementById('product-detail');
    container.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-gallery">
                <div class="product-main-image"><img src="${product.image}" alt="${product.name}" id="main-img"></div>
                <div class="product-thumbnails">
                    <div class="thumb active" onclick="changeImage(this,'${product.image}')"><img src="${product.image}" alt="View 1"></div>
                    <div class="thumb" onclick="changeImage(this,'${product.image}&q=80')"><img src="${product.image}&q=80" alt="View 2"></div>
                    <div class="thumb" onclick="changeImage(this,'${product.image}&q=60')"><img src="${product.image}&q=60" alt="View 3"></div>
                </div>
            </div>
            <div class="product-info-detail">
                <div class="breadcrumb" style="color:var(--color-taupe)">
                    <a href="../index.html">Home</a><span>/</span>
                    <a href="shop.html">Shop</a><span>/</span>
                    <a href="shop.html?category=${encodeURIComponent(product.category)}">${product.category}</a><span>/</span>
                    <span style="color:var(--color-charcoal)">${product.name}</span>
                </div>
                <span class="product-category-tag">${product.category} - ${product.type}</span>
                <h1>${product.name}</h1>
                <span class="product-price-large">${formatPrice(product.price)}</span>
                <p class="product-desc">${product.description}</p>
                <div class="product-divider"></div>
                ${product.colors.length > 0 ? `
                <div class="variant-section">
                    <h4>Available Colours</h4>
                    <div class="variant-options">
                        ${product.colors.map((c, i) => `<button class="variant-btn ${i === 0 ? 'active' : ''}" onclick="selectVariant(this)">${c}</button>`).join('')}
                    </div>
                </div>` : ''}
                <div class="variant-section">
                    <h4>Quantity</h4>
                    <div class="qty-selector">
                        <button onclick="updateDetailQty(-1)">-</button>
                        <input type="number" id="detail-qty" value="1" min="1" max="10" readonly>
                        <button onclick="updateDetailQty(1)">+</button>
                    </div>
                </div>
                <div class="product-action-btns">
                    <button class="btn btn-primary btn-lg" onclick="Cart.addItem(${product.id}, getDetailQty())">Add to Cart</button>
                    <button class="btn btn-gold btn-lg" onclick="Cart.addItem(${product.id}, getDetailQty());window.location.href='checkout.html'">Order Now</button>
                </div>
                <div class="product-features">
                    <div class="feature-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                        <span>Free Shipping</span>
                    </div>
                    <div class="feature-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                        <span>Quality Guaranteed</span>
                    </div>
                    <div class="feature-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                        <span>Crafted with Love</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="related-section">
            <div class="section-header"><h2>You May Also Like</h2><div class="divider"></div></div>
            <div class="related-grid" id="related-grid"></div>
        </div>
    `;

    // Related products
    const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    const relatedGrid = document.getElementById('related-grid');
    if (relatedGrid) {
        relatedGrid.innerHTML = related.map(p => createProductCard(p)).join('');
        observeFadeIns();
    }
});

function changeImage(thumb, src) {
    document.getElementById('main-img').src = src;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}
function selectVariant(btn) {
    btn.parentElement.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}
function updateDetailQty(delta) {
    const input = document.getElementById('detail-qty');
    let val = parseInt(input.value) + delta;
    if (val < 1) val = 1; if (val > 10) val = 10;
    input.value = val;
}
function getDetailQty() { return parseInt(document.getElementById('detail-qty')?.value || 1); }
