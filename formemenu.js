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
            const mensagem = document.getElementById('mensagem').value;

            const telefone = "5579999450473"; // Substitua pelo número real
            const texto = encodeURIComponent(`Olá! Meu nome é ${nome}.\n.\nMensagem: ${mensagem}`);

            window.open(`https://api.whatsapp.com/send?phone=5579999450473&text=Ol%C3%A1%20gostaria%20de%20agendar${5579999450473}?text=${texto}`, '_blank');
        });

