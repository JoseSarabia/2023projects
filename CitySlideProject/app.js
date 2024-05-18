//const fish = document.getElementById('start')
//fish.addEventListener('click', () => {

// })

document.querySelector('start').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.slideshow-wrapper').style.cssText = 'opacity: 1s
    '
    // visibility: visible
    document.querySelector('.slideshow-wrapper') .style.visibility = 'visible'
    document.querySelector('slideshow').style.animation = 'slideshow  24s; infinite'
    
});