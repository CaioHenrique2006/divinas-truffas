const menuBtn = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');


function abrirMenu() {
    menuBtn.addEventListener('click', (event) => {
        sideBar.classList.toggle('active');
        sideBar.style.left = '0';

        sideBar.addEventListener('click', (event) => {
            sideBar.classList.remove('active');
            sideBar.style.left = '-200px';
        })
    })
}