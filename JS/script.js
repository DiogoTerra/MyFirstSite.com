const projetos = document.getElementById('projetos');
const codigos= document.getElementById('codigos');
const jogos = document.getElementById('jogos');

const videoprojetos = document.querySelector('#videoprojetos');
const videocodigos = document.querySelector('#videocodigos');
const videojogos = document.querySelector('#videojogos');


projetos.addEventListener('click', () => {
    projetos.classList.toggle('active');
    videoprojetos.classList.toggle('active');
});
codigos.addEventListener('click', () => {
    codigos.classList.toggle('active');
    videocodigos.classList.toggle('active');
});
jogos.addEventListener('click', () => {
    jogos.classList.toggle('active');
    videojogos.classList.toggle('active');
});