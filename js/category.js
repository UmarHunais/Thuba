// THUBA - Category Page JS
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('cat-products-grid');
    const countEl = document.getElementById('cat-count');
    const category = document.getElementById('cat-data')?.dataset.category;
    if (!grid || !category) return;

    const products = getProductsByCategory(category);
    if (countEl) countEl.textContent = products.length + ' products';

    grid.innerHTML = products.map(p => createProductCard(p)).join('');
    observeFadeIns();
});
