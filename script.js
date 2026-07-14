// FUNÇÃO PARA ABRIR E FECHAR O MENU
const menuBtn = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');


function abrirMenu() {
    menuBtn.addEventListener('click', (e) => {
        sideBar.classList.toggle('active');
        sideBar.style.left = '0';

        sideBar.addEventListener('click', (e) => {
            sideBar.classList.remove('active');
            sideBar.style.left = '-200px';
        })
    })
}

// FUNÇÃO PARA ENVIAR MENSAGEM PARA O WHATSAPP

function enviarWhatsapp(event) {
 event.preventDefault()

const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');
const telefone = '5579998634165';

const msgFormatada = `Olá, meu nome é ${nome.value}, ${mensagem.value}`;

const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

window.open(url, "_blank")

}

