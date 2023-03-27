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


// Selecciona todos los enlaces de la barra de navegación
const navLinks = document.querySelectorAll('.navbar a');

// Para cada enlace, agrega un "event listener" que se activa cuando se hace clic
navLinks.forEach(link => {
link.addEventListener('click', () => {
    // Remueve la clase "active" de todos los enlaces
    navLinks.forEach(link => link.classList.remove('active'));
    // Agrega la clase "active" al enlace correspondiente
    link.classList.add('active');
});
});

// Agrega un "event listener" que se activa cuando el usuario se desplaza por la página
window.addEventListener('scroll', () => {
  // Obtiene la posición vertical del usuario
const scrollPos = window.scrollY;
  // Para cada sección, verifica si está visible en la pantalla
document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      // Si la sección está visible, agrega la clase "active" al enlace correspondiente
    const link = document.querySelector(`.navbar a[href="#${section.id}"]`);
    link.classList.add('active');
    } else {
      // Si la sección no está visible, remueve la clase "active" del enlace correspondiente
    const link = document.querySelector(`.navbar a[href="#${section.id}"]`);
    link.classList.remove('active');
    }
});
});




