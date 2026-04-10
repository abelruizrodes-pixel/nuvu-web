document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;

    function closeMobileMenu() {
        if(burgerMenu) burgerMenu.classList.remove('active');
        if(mobileMenu) mobileMenu.classList.remove('active');
        body.classList.remove('no-scroll');
    }

    if (burgerMenu && mobileMenu) {
        // Abrir y cerrar manualmente
        burgerMenu.addEventListener('click', (e) => {
            e.stopPropagation(); 
            burgerMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });

        // Cerrar si clicas fuera
        document.addEventListener('click', (e) => {
            if (burgerMenu.classList.contains('active')) {
                if (!mobileMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
                    closeMobileMenu();
                }
            }
        });

        // NAVEGACIÓN PURAMENTE NATIVA
        // No interceptamos nada con preventDefault(). Dejamos que el navegador haga el salto normal.
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Cerramos el menú con un pequeñísimo retraso
                // para que el salto HTML nativo comience sin que Safari lo cancele al alterar el DOM.
                setTimeout(() => {
                    closeMobileMenu();
                }, 100);
            });
        });
    }

    // Sticky nav effect para la barra
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const nav = document.querySelector('.sticky-nav');
        if (scrolled > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
