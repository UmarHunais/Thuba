// THUBA - Home Page JS
document.addEventListener('DOMContentLoaded', () => {
    // PRELOADER LOGIC
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('loader-progress');
    if (preloader && progressBar) {
        let width = 0;
        const interval = setInterval(() => {
            width += Math.random() * 8; // Slower increments
            if (width > 90) width = 90;
            progressBar.style.width = width + '%';
        }, 300); // Slower tick rate

        window.addEventListener('load', () => {
            clearInterval(interval);
            progressBar.style.transition = 'width 0.8s ease-in-out';
            progressBar.style.width = '100%';
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }, 1200); // 1.2 seconds wait at 100%
        });
        
        // Fallback
        setTimeout(() => {
            clearInterval(interval);
            progressBar.style.transition = 'width 0.8s ease-in-out';
            progressBar.style.width = '100%';
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }, 1200);
        }, 4000); // 4 seconds max wait
    }

    // TESTIMONIAL SLIDER LOGIC
    const slider = document.getElementById('testi-slider');
    if (slider) {
        setInterval(() => {
            const slideWidth = slider.children[0].offsetWidth + parseInt(window.getComputedStyle(slider).gap || 0);
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            
            if (slider.dataset.currentScroll === undefined) slider.dataset.currentScroll = 0;
            let currentScroll = parseFloat(slider.dataset.currentScroll);
            
            currentScroll += slideWidth;
            if (currentScroll >= maxScroll + 10) currentScroll = 0; // reset
            
            slider.dataset.currentScroll = currentScroll;
            slider.style.transform = `translateX(-${currentScroll}px)`;
        }, 5000);
    }

    // Countdown Timer (set to 7 days from now)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    function updateCountdown() {
        const now = new Date();
        const diff = endDate - now;
        if (diff <= 0) return;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('cd-days') && (document.getElementById('cd-days').textContent = String(days).padStart(2, '0'));
        document.getElementById('cd-hours') && (document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0'));
        document.getElementById('cd-mins') && (document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0'));
        document.getElementById('cd-secs') && (document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0'));
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Render best sellers
    const bestSellerIds = [23, 9, 66, 29, 86, 24, 68, 10];
    const grid = document.getElementById('bestsellers-grid');
    if (grid) {
        grid.innerHTML = bestSellerIds.map(id => {
            const p = getProductById(id);
            if (!p) return '';
            return createProductCard(p);
        }).join('');
        observeFadeIns();
    }
});
