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

//navbar hide mobile
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Fecha o menu hamburguer caso esteja aberto
      if (navbarCollapse.classList.contains("show")) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  });
});

//read more card
$(document).ready(function(){
  $(".read-more").click(function(e){
    e.preventDefault();
    const card = $(this).closest(".card");
    const moreText = card.find(".more-text");
    const shortText = card.find(".short-text");

    if (moreText.is(":visible")) {
      // Ocultar
      moreText.slideUp(300);
      $(this).text("read more...");
    } else {
      // Exibir
      moreText.slideDown(300);
      $(this).text("less...");
    }
  });
});

//load more character
$(document).ready(function() {
  $(".more-characters").click(function(e) {
    e.preventDefault();

    // Select after the div button
    const moreSection = $(this).next(".more-characters-text");

    if (moreSection.is(":visible")) {
      moreSection.slideUp(400);
      $(this).text("load more...");
    } else {
      moreSection.slideDown(400);
      $(this).text("");
    }
  });
});

//loader 
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

//image change
const images = ["img/kitsune-ansoen.png", "img/ninjin-ansoen.png", "img/yuki-ansoen.png", "img/kai-ansoen.png", "img/taka-ansoen.png"];
let index = 0;
const img = document.getElementById("character-img");

setInterval(() => {
  img.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % images.length;
    img.src = images[index];
    img.style.opacity = 1;
  }, 1000);
}, 5000);

//from sent
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
        document.getElementById("sentPopup").style.display = "block";

        // limpa o parâmetro da URL
        history.replaceState(null, "", window.location.pathname);
    }
});

