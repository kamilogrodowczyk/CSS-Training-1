const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
    links.classList.toggle('open');  
})