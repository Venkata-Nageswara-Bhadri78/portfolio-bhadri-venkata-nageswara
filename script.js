document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-slate-900', 'shadow-lg');
            header.classList.remove('bg-slate-800/50');
        } else {
            header.classList.remove('bg-slate-900', 'shadow-lg');
            header.classList.add('bg-slate-800/50');
        }
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stagger-in')) {
                    const children = entry.target.querySelectorAll(':scope > *');
                    children.forEach((child, index) => {
                        child.style.animationDelay = `${index * 100}ms`;
                        child.classList.add('fade-in');
                    });
                } else if (entry.target.classList.contains('experience-item')) {
                    entry.target.classList.add('fade-in');
                }
                else {
                    entry.target.classList.add('fade-in');
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe elements with animation classes
    document.querySelectorAll('.animate-in, .stagger-in, .experience-item').forEach(el => {
        observer.observe(el);
    });

});
