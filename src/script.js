let headerBg = document.getElementById('headerBg')
let arrowLeft = document.getElementById('arrowLeft')
let arrowRight = document.getElementById('arrowRight')
let headerH1 = document.getElementById('headerH1')
let headerP = document.getElementById('headerP')


// Carrusel
// Empieza con el orden normal de imagenes, a medida que se hace el cambio, se cambia el boolean de la imagen ( como si fuera un if para facilitar otro if ) y asi modificar el fondo y textos
let img1 = true
let img2 = false
let img3 = false
arrowRight.addEventListener('click', function(){
    if (img1 === true) {
        headerBg.style.backgroundImage = 'url(./../images/mobile-image-hero-2.jpg)'
        img1 = false
        img2 = true
        img3 = false
        headerH1.innerHTML = 'We are available all across the globe'
        headerP.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    } else if (img2 === true) {
        headerBg.style.backgroundImage = 'url(./../images/mobile-image-hero-3.jpg)'
        img1 = false
        img2 = false
        img3 = true
        headerH1.innerHTML = 'Manufactured with the best materials'
        headerP.innerHTML = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    } else if (img3 === true){
        headerBg.style.backgroundImage = 'url(./../images/mobile-image-hero-1.jpg)'
        img1 = true
        img2 = false
        img3 = false
        headerH1.innerHTML = 'Discover innovative ways to decorate'
        headerP.innerHTML = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    }
})
arrowLeft.addEventListener('click', function(){
    if (img1 === true) {
        headerBg.style.backgroundImage = 'url(./../images/mobile-image-hero-3.jpg)'
        img1 = false
        img2 = false
        img3 = true
        headerH1.innerHTML = 'Manufactured with the best materials'
        headerP.innerHTML = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    } else if (img3 === true) {
        headerBg.style.backgroundImage = 'url(./../images/mobile-image-hero-2.jpg)'
        img1 = false
        img2 = true
        img3 = false
        headerH1.innerHTML = 'We are available all across the globe'
        headerP.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    } else if (img2 === true){
        headerBg.style.backgroundImage = 'url(./../images/mobile-image-hero-1.jpg)'
        img1 = true
        img2 = false
        img3 = false
        headerH1.innerHTML = 'Discover innovative ways to decorate'
        headerP.innerHTML = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    }
})