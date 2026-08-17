document.addEventListener('DOMContentLoaded', () => {
    // Elementos
    const body = document.body;
    const fontSizeDisplay = document.getElementById('font-size-display');
    
    // Botões de Fonte
    const btnFontDown = document.getElementById('btn-font-down');
    const btnFontUp = document.getElementById('btn-font-up');
    
    // Botões de Tema
    const btnLight = document.getElementById('btn-theme-light');
    const btnDark = document.getElementById('btn-theme-dark');
    const btnContrast = document.getElementById('btn-theme-contrast');

    // 1. Lógica de Tamanho da Fonte
    let currentFontSize = 16; // Valor inicial em pixels

    function updateFontSize() {
        // Aplica o tamanho no root do CSS (afeta tudo que usa 'rem')
        document.documentElement.style.fontSize = currentFontSize + 'px';
        fontSizeDisplay.textContent = currentFontSize + 'px';
    }

    btnFontUp.addEventListener('click', () => {
        if (currentFontSize < 24) { // Limite máximo
            currentFontSize += 2;
            updateFontSize();
        }
    });

    btnFontDown.addEventListener('click', () => {
        if (currentFontSize > 12) { // Limite mínimo
            currentFontSize -= 2;
            updateFontSize();
        }
    });

    // 2. Lógica de Troca de Temas (Claro, Escuro, Alto Contraste)
    function setTheme(themeName) {
        // Remove as classes de tema antigas
        body.classList.remove('theme-dark', 'theme-contrast');
        
        // Remove o estado ativo de todos os botões
        [btnLight, btnDark, btnContrast].forEach(btn => btn.classList.remove('active'));

        if (themeName === 'dark') {
            body.classList.add('theme-dark');
            btnDark.classList.add('active');
        } else if (themeName === 'contrast') {
            body.classList.add('theme-contrast');
            btnContrast.classList.add('active');
        } else {
            // Tema Claro (padrão)
            btnLight.classList.add('active');
        }
    }

    // Eventos de clique para os botões de tema
    btnLight.addEventListener('click', () => setTheme('light'));
    btnDark.addEventListener('click', () => setTheme('dark'));
    btnContrast.addEventListener('click', () => setTheme('contrast'));

});