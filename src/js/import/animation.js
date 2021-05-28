document.addEventListener('DOMContentLoaded', () => {
    const diamond = document.querySelector('.diamond__wrapper')
    console.log(diamond)
    const animItems = document.querySelectorAll('.diamond-circle__elem')
    for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i]
        window.addEventListener('scroll', () => {
            let scrollTop = window.scrollY;
            let diamondStart = diamond.offsetHeight / 2;
           console.log(diamondStart)

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














// const animItems = document.querySelectorAll('.diamond-circle__elem')
// console.log(animItems)

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll)
//     function animOnScroll() {
//         for (let i = 0; i < animItems.length; i++) {
//             const animItem = animItems[i]
//             const animItemHeight = animItem.offsetHeight
//             const animItemOffset = offset(animItem).top 
//             const animStart = 4

//             let animItemPoint = window.innerHeight - animItemHeight / animStart
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart
//             }

//             if ( (pageXOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset  + animItemHeight) ) {
//                 animItem.classList.add('diamond-circle__elem--active')
//             } else {
//                 // animItem.classList.remove('diamond-circle__elem--active')
//                 console.log('Not')
//             }

//         }
//     }
//     function offset (el) {
//         const rect = el.getBoundingClientRect()
//         const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
//     }
// }
