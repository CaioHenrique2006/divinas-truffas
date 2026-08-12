// FUNÇÃO PARA ABRIR E FECHAR O MENU
const menuBtn = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', abrirMenu);


function abrirMenu() {
    sideBar.classList.toggle('active');
    overlay.classList.toggle('active');
}

const links = document.querySelectorAll('.menu a')

function fecharMenu() {
    sideBar.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', fecharMenu);

links.forEach((link) => {
    link.addEventListener('click', fecharMenu)
})

// FUNÇÃO PARA ENVIAR MENSAGEM PARA O WHATSAPP

function enviarWhatsapp(event) {
 event.preventDefault()

const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');
const telefone = '5579998634165';

const msgFormatada = `Olá, meu nome é ${nome.value.trim()}. ${mensagem.value.trim()}`;
const textoCodificado = encodeURIComponent(msgFormatada);

const url = `https://wa.me/${telefone}?text=${textoCodificado}`;

window.open(url, "_blank")

}
