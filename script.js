const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('hovered'));
  card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
});

const links = document.querySelectorAll('.nav ul li a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
      if(navMenu.classList.contains('show')) navMenu.classList.remove('show');
    }
  });
});
