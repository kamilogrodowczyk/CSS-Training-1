const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    links.classList.toggle('open');  
})

// *** stop animation while resizing *** //

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);  
});

// *** slider *** //

const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return; {
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk
  }
});

// slider.addEventListener('touchmove', (e) => {
//   if(!isDown) return; {
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 2;
//     slider.scrollLeft = scrollLeft - walk
//   }
// });