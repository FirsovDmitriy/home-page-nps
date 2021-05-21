
var slideIndex = 0
showSlides()

function showSlides() {
    var i
    var slides = document.getElementsByClassName("full-screen__list-item")
    console.log(slides)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateY(0)"
        console.log('Hello js')
    }
    slideIndex++
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.transform = "translateY(-100%)"
    setTimeout(showSlides, 4000)
}
