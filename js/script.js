const menu_links = document.querySelectorAll('.menu a')

function distance(element){
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop
}

function nativescroll(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    })
}

const scrollToSection = event => {
    event.preventDefault()
    const distanceFromTheTop = distance(event.target) - 50
    nativescroll(distanceFromTheTop)
}

menu_links.forEach((link) =>{
    link.addEventListener("click", scrollToSection)
})