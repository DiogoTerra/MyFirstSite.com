const casamentos = document.getElementById('casamentos');
const album= document.getElementById('album');
const buffet = document.getElementById('buffet');

const videoCasamentos = document.querySelector('#videoCasamentos');
const videoAlbum = document.querySelector('#videoAlbum');
const videoBuffet = document.querySelector('#videoBuffet');


casamentos.addEventListener('click', () => {
    casamentos.classList.toggle('active');
    videoCasamentos.classList.toggle('active');
});
album.addEventListener('click', () => {
    album.classList.toggle('active');
    videoAlbum.classList.toggle('active');
});
buffet.addEventListener('click', () => {
    buffet.classList.toggle('active');
    videoBuffet.classList.toggle('active');
});