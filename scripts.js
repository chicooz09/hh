document.addEventListener('DOMContentLoaded', () => {

    // Lógica para o Preloader
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader-hidden');
    });

    // Lógica para o Botão "Voltar ao Topo"
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
    }

    // Lógica para o Tema Escuro
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                body.classList.add('dark-mode');
                themeToggle.checked = true;
            } else {
                body.classList.remove('dark-mode');
                themeToggle.checked = false;
            }
        };

        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);

        themeToggle.addEventListener('change', () => {
            const newTheme = themeToggle.checked ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // Lógica para o Botão de Compartilhar
    const shareButton = document.querySelector('.share-button');
    if (shareButton) {
        const shareIcon = shareButton.querySelector('.share-icon');
        const copiedIcon = shareButton.querySelector('.copied-icon');
        const shareButtonText = shareButton.querySelector('span');

        shareButton.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                const originalText = shareButtonText.textContent;
                shareButtonText.textContent = 'Copiado!';
                shareButton.classList.add('copied');
                setTimeout(() => {
                    shareButtonText.textContent = originalText;
                    shareButton.classList.remove('copied');
                }, 2000);
            });
        });
    }

    // Lógica para o Contador de Visitas
    const visitCounterElement = document.querySelector('.visit-counter');
    if (visitCounterElement) {
        let visitCount = localStorage.getItem('pageVisitCount') || 0;

        visitCount = Number(visitCount) + 1;

        localStorage.setItem('pageVisitCount', visitCount);

        const visitText = visitCount === 1 
            ? `Esta é a sua primeira visita. Bem-vindo!`
            : `Você já visitou esta página ${visitCount} vezes.`;
        visitCounterElement.textContent = `| ${visitText}`;
    }
});