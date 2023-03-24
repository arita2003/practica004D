var typed =new Typed(".multiple-text",{
    strings:["cariño","amor","refugio"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

var typed =new Typed(".segundo-text",{
    strings:[ "","Araceli","Anderson"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


const NosotrosLink = document.querySelector('a[href="#Nosotros"]');

// Obtiene la posición vertical de la sección "Nosotros"
const NosotrosPosition = document.getElementById('Nosotros').offsetTop;

// Agrega un evento "scroll" al objeto window para detectar cuándo el usuario se desplaza por la página
window.addEventListener('scroll', () => {
  // Compara la posición vertical actual de la página con la posición de la sección "Nosotros"
    if (window.scrollY >= NosotrosPosition) {
    // Agrega la clase "active" a la etiqueta <a> correspondiente a la sección "Nosotros"
    NosotrosLink.classList.add('active');
    } else {
    // Quita la clase "active" de la etiqueta <a> correspondiente a la sección "Nosotros"
    NosotrosLink.classList.remove('active');
}
});
