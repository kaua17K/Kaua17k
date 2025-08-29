// Seleciona todos os links do menu que começam com #
const links = document.querySelectorAll('nav ul li a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // evita o comportamento padrão

    const targetId = this.getAttribute('href'); // pega o id da seção
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth', // scroll suave
      block: 'start'      // alinha no topo
    });
  });
});
