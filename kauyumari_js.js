// script.js

// Animación del menú responsive
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Animaciones para tarjetas de productos al pasar el mouse
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  // Cuando el mouse entra sobre la tarjeta - agregar clase "hovered"
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });

  // Cuando el mouse sale - quitar clase "hovered"
  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});

// Animación menú con efecto de deslizamiento suave para enlaces
const links = document.querySelectorAll('.nav ul li a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
      // Cerrar menú si está abierto en móvil
      if(navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
      }
    }
  });
});