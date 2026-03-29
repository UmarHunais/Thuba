// THUBA - Shop Page JS
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('products-grid');
    const countEl = document.getElementById('result-count');
    const sortEl = document.getElementById('sort-select');
    if (!grid) return;

    let filteredProducts = [...PRODUCTS];

    function renderProducts(products) {
        grid.innerHTML = products.map(p => createProductCard(p)).join('');
        if (countEl) countEl.textContent = products.length + ' products';
        observeFadeIns();
    }

    function getFilters() {
        const categories = [...document.querySelectorAll('.filter-cat:checked')].map(c => c.value);
        const types = [...document.querySelectorAll('.filter-type:checked')].map(c => c.value);
        const minPrice = parseInt(document.getElementById('min-price')?.value) || 0;
        const maxPrice = parseInt(document.getElementById('max-price')?.value) || 999999;
        return { categories, types, minPrice, maxPrice };
    }

    function applyFilters() {
        const f = getFilters();
        filteredProducts = PRODUCTS.filter(p => {
            if (f.categories.length && !f.categories.includes(p.category)) return false;
            if (f.types.length && !f.types.includes(p.type)) return false;
            if (p.price < f.minPrice || p.price > f.maxPrice) return false;
            return true;
        });
        applySort();
    }

    function applySort() {
        const sort = sortEl?.value || 'default';
        let sorted = [...filteredProducts];
        if (sort === 'price-low') sorted.sort((a, b) => a.price - b.price);
        else if (sort === 'price-high') sorted.sort((a, b) => b.price - a.price);
        else if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
        renderProducts(sorted);
    }

    // Event listeners
    document.querySelectorAll('.filter-cat, .filter-type').forEach(cb => cb.addEventListener('change', applyFilters));
    document.getElementById('min-price')?.addEventListener('input', applyFilters);
    document.getElementById('max-price')?.addEventListener('input', applyFilters);
    sortEl?.addEventListener('change', applySort);

    // Mobile filter toggle
    document.getElementById('mobile-filter-btn')?.addEventListener('click', () => {
        document.querySelector('.shop-sidebar')?.classList.toggle('active');
    });
    document.getElementById('close-filters')?.addEventListener('click', () => {
        document.querySelector('.shop-sidebar')?.classList.remove('active');
    });

    // Check URL for category pre-filter
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('category');
    if (catParam) {
        const cb = document.querySelector(`.filter-cat[value="${catParam}"]`);
        if (cb) { cb.checked = true; applyFilters(); return; }
    }

    renderProducts(PRODUCTS);
});
