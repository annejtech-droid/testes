      //JAVASCRIPT PARA MENU E FORM 
        const menuBtn = document.querySelector('.menu-btn');
        const navMenu = document.querySelector('nav ul');

        // Alterna o menu responsivo
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Integração do formulário com WhatsApp
        document.getElementById('form-contato').addEventListener('submit', function(e) {
            e.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            const telefone = "5599999999999"; // Substitua pelo número real
            const texto = encodeURIComponent(`Olá! Meu nome é ${nome}.\nMeu e-mail é: ${email}.\nMensagem: ${mensagem}`);

            window.open(`https://wa.me/${telefone}?text=${texto}`, '_blank');
        });

