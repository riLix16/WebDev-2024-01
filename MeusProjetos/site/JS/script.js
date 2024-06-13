let slideIndex = 0;
mostrarSlides(slideIndex);

function mudarSlide(n) {
  mostrarSlides(slideIndex += n);
}

function mostrarSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Iniciar o carrossel automaticamente
function iniciarCarrossel() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(iniciarCarrossel, 3000); // Mudar imagem a cada 3 segundos
}

iniciarCarrossel();
