// THUBA - Navigation
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // Hamburger toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close nav on link click (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navLinks?.classList.remove('active');
        });
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar?.classList.add('scrolled');
        else navbar?.classList.remove('scrolled');
    });

    // Active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href')?.split('/').pop();
        if (href === currentPage) link.classList.add('active');
    });

    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// Generate Navbar HTML
function getNavHTML() {
    const isInPages = window.location.pathname.includes('/pages/');
    const prefix = isInPages ? '../' : '';
    const pagesPrefix = isInPages ? '' : 'pages/';
    return `
    <div class="announcement-bar">Free Shipping on Orders Above Rs. 5,000 | Sri Lanka's Premium Modest Fashion</div>
    <nav class="navbar" id="navbar">
        <div class="container">
            <a href="${prefix}index.html" class="nav-logo">THUBA</a>
            <div class="nav-links" id="nav-links">
                <a href="${prefix}index.html">Home</a>
                <a href="${pagesPrefix}shop.html">Shop</a>
                <a href="${pagesPrefix}hijabs.html">Hijabs</a>
                <a href="${pagesPrefix}prayer-sets.html">Prayer Sets</a>
                <a href="${pagesPrefix}accessories.html">Accessories</a>
                <a href="${pagesPrefix}about.html">About</a>
                <a href="${pagesPrefix}contact.html">Contact</a>
            </div>
            <div class="nav-actions">
                <button class="nav-cart-btn" onclick="Cart.openSidebar()" aria-label="Open cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                    <span class="cart-count" style="display:none">0</span>
                </button>
                <div class="hamburger" id="hamburger">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    </nav>`;
}

// Generate Footer HTML
function getFooterHTML() {
    const isInPages = window.location.pathname.includes('/pages/');
    const prefix = isInPages ? '../' : '';
    const pagesPrefix = isInPages ? '' : 'pages/';
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h3 style="color:#fff;font-size:1.875rem;letter-spacing:0.05em">THUBA</h3>
                    <p>Sri Lanka's premier destination for premium modest fashion. Crafted with care, worn with confidence. Each piece tells a story of elegance and grace, designed for the modern woman who values both modesty and style.</p>
                    <div class="footer-social" style="margin-top:20px">
                        <a href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                        <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
                        <a href="#" aria-label="TikTok"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.44a4.85 4.85 0 01-3.77-1.5V6.69h3.77z"/></svg></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <a href="${pagesPrefix}shop.html">Shop All</a>
                    <a href="${pagesPrefix}hijabs.html">Hijabs</a>
                    <a href="${pagesPrefix}prayer-sets.html">Prayer Sets</a>
                    <a href="${pagesPrefix}bags.html">Bags</a>
                    <a href="${pagesPrefix}jewellery.html">Jewellery</a>
                </div>
                <div class="footer-col">
                    <h4>Information</h4>
                    <a href="${pagesPrefix}about.html">Our Story</a>
                    <a href="${pagesPrefix}contact.html">Contact Us</a>
                    <a href="#">Shipping Policy</a>
                    <a href="#">Returns & Exchange</a>
                    <a href="#">Size Guide</a>
                </div>
                <div class="footer-col">
                    <h4>Stay Connected</h4>
                    <p style="font-size:0.875rem;color:var(--color-taupe);margin-bottom:16px">Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <div class="footer-newsletter">
                        <div class="newsletter-input">
                            <input type="email" placeholder="Your email address">
                            <button type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <span>2025 Thuba. All Rights Reserved. Designed in Sri Lanka.</span>
                <span>Colombo, Sri Lanka | +94 77 850 2118</span>
            </div>
        </div>
    </footer>`;
}

// Insert nav and footer
document.addEventListener('DOMContentLoaded', () => {
    const navPlaceholder = document.getElementById('nav-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = getNavHTML();
    if (footerPlaceholder) footerPlaceholder.outerHTML = getFooterHTML();
});
