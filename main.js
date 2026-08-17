document.addEventListener('DOMContentLoaded', function() {
    
    // Lógica de validação do formulário
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio tradicional para testarmos a validação

        let isValid = true;
        const formGroups = document.querySelectorAll('.form-group');

        // Limpa erros antigos
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
            el.textContent = '';
            el.setAttribute('aria-hidden', 'true');
        });
        document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => {
            el.style.borderColor = '#ccc';
        });

        // Valida cada campo
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const errorDiv = group.querySelector('.error-message');
            let hasError = false;

            if (input.hasAttribute('required') && input.value.trim() === '') {
                hasError = true;
                errorDiv.textContent = 'Este campo é obrigatório.';
            } else if (input.type === 'email' && input.value.trim() !== '') {
                // Validação simples de email
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(input.value.trim())) {
                    hasError = true;
                    errorDiv.textContent = 'Por favor, insira um e-mail válido.';
                }
            }

            // Verifica tamanho da mensagem (mínimo 10 caracteres)
            if (input.id === 'mensagem' && input.value.trim().length < 10 && input.value.trim() !== '') {
                hasError = true;
                errorDiv.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
            }

            if (hasError) {
                isValid = false;
                input.style.borderColor = '#cc0000'; // Vermelho
                errorDiv.style.display = 'block';
                errorDiv.removeAttribute('aria-hidden');
            }
        });

        if (isValid) {
            alert('Formulário enviado com sucesso! (Simulação)');
            form.reset(); // Limpa o formulário após envio bem-sucedido
        } else {
            // Foca no primeiro erro encontrado
            const firstError = document.querySelector('.error-message[style*="display: block"]');
            if (firstError) {
                firstError.previousElementSibling.previousElementSibling.focus(); // Volta para o input do erro
            }
        }
    });

    // Exemplo visual extra: como o botão de "alto contraste" poderia funcionar
    const contrastBtn = document.querySelector('.contrast-btn');
    contrastBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? '#f5f5f0' : 'black';
        document.body.style.color = document.body.style.color === 'white' ? '#1a1a1a' : 'white';
    });

});