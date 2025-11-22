// smooth scroll
$(".scroll-btn, .nav-link").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().top - 70
        }, 300);
    }
});

//read more card
$(document).ready(function(){
  $(".ler-mais").click(function(e){
    e.preventDefault();
    const card = $(this).closest(".card");
    const moreText = card.find(".more-text");
    const shortText = card.find(".short-text");

    if (moreText.is(":visible")) {
      // Ocultar
      moreText.slideUp(300);
      $(this).text("ler mais...");
    } else {
      // Exibir
      moreText.slideDown(300);
      $(this).text("menos...");
    }
  });
});

//loader 
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = Array.from(document.querySelectorAll("section[id]"));

  // Mapear id -> link
  const linkById = {};
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href.includes("#")) return;
    const hash = href.substring(href.indexOf("#"));
    linkById[hash] = link;
  });

  // Remove .active de todos os links
  function clearActive() {
    navLinks.forEach(link => link.classList.remove("active"));
  }

  // Ativa link correspondente ao hash
  function setActive(hash) {
    clearActive();
    if (linkById[hash]) linkById[hash].classList.add("active");
  }

  // Clique nos links (scroll suave)
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (!href.startsWith("#")) return;

      e.preventDefault();
      const targetId = href.substring(href.indexOf("#") + 1);
      const target = document.getElementById(targetId);
      if (!target) return;

      // Scroll suave
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Ativa o link temporariamente
      clearActive();
      link.classList.add("active");
    });
  });

  // Função spy-scroll: ativa o link da seção visível e desativa os outros
  function onScroll() {
    const scrollY = window.scrollY;
    let currentSection = null;

    sections.forEach(section => {
      const top = section.offsetTop - 100; // pequeno offset
      const bottom = top + section.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        currentSection = "#" + section.id;
      }
    });

    if (currentSection) {
      setActive(currentSection);
    }
  }

  // Evento de scroll
  window.addEventListener("scroll", onScroll, { passive: true });

  // Executa no carregamento inicial
  onScroll();
});

//pop up imagens
let currentImages = [];
let currentIndex = 0;

$('#imageModal').on('show.bs.modal', function (event) {
  const button = $(event.relatedTarget); // link que abriu o modal
  currentImages = button.data('images'); // pega as imagens do card
  currentIndex = 0;
  $('#modalImage').attr('src', currentImages[currentIndex]);
});

// Botão próximo
$('#nextImage').click(function(){
  if(currentImages.length > 1){
    currentIndex = (currentIndex + 1) % currentImages.length;
    $('#modalImage').attr('src', currentImages[currentIndex]);
  }
});

// Botão anterior
$('#prevImage').click(function(){
  if(currentImages.length > 1){
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    $('#modalImage').attr('src', currentImages[currentIndex]);
  }
});
