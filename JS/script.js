const Album = document.getElementById('AlbumFotos');
const Buffet = document.getElementById('Buffet');
const VideoBuffet = document.querySelector('#VideoBuffet');

const VideoAlbum = document.querySelector('#VideoAlbum');
const casamentos = document.getElementById('casamentos');
const VideoCasamentos = document.querySelector('#VideoCasamentos');


album.addEventListener('click', () => {
    Album.classList.toggle('active');
    VideoAlbum.classList.toggle('active');
});
casamentos.addEventListener('click', () => {
    casamentos.classList.toggle('active');
    VideoCasamentos.classList.toggle('active');
});
buffet.addEventListener('click', () => {
    Buffet.classList.toggle('active');
    VideoBuffet.classList.toggle('active');
});