document.addEventListener('DOMContentLoaded', () => {
    const diamond = document.querySelector('.diamond__wrapper')
    const animItems = document.querySelectorAll('.diamond-circle__elem')
    for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i]
        window.addEventListener('scroll', () => {
            let scrollTop = window.scrollY;
            let diamondStart = diamond.offsetHeight / 2;

            if (isFullyVisible(diamondCircle)) {
                animItem.classList.add('diamond-circle__elem--active')
            } else {
                animItem.classList.remove('diamond-circle__elem--active')
            }
        })
    }
})


const diamondCircle = document.querySelector('.diamond-circle ') 


function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
   
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
   
    return ((top >= 0) && (bottom <= window.innerHeight));
}
