let slideIndex = 1;
const profileElements = document.querySelectorAll('.profile');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showSlides(n) {
  let i;
  if (n > profileElements.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = profileElements.length;
  }
  for (i = 0; i < profileElements.length; i++) {
    profileElements[i].style.display = 'none';
  }
  profileElements[slideIndex - 1].style.display = 'block';
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

showSlides(slideIndex);

// Selectionner les diapositives
const profiles = document.querySelectorAll('.profile');

// Initialiser l'index de la diapositive active
let activeProfileIndex = 0;

// Ajouter un ecouteur d'evenement de clic pour le bouton precedent
document.getElementById('prev').addEventListener('click', () => {
  // Enlever la classe active de la diapositive actuelle
  profiles[activeProfileIndex].classList.remove('active');
  // Decrementer l'index de la diapositive active
  activeProfileIndex--;
  // Verifier si l'index est inferieur à 0
  if (activeProfileIndex < 0) {
    // Si oui, revenir à la dernière diapositive
    activeProfileIndex = profiles.length - 1;
  }
  // Ajouter la classe active à la nouvelle diapositive active
  profiles[activeProfileIndex].classList.add('active');
});

// Ajouter un ecouteur d'evenement de clic pour le bouton suivant
document.getElementById('next').addEventListener('click', () => {
  // Enlever la classe active de la diapositive actuelle
  profiles[activeProfileIndex].classList.remove('active');
  // Incrementer l'index de la diapositive active
  activeProfileIndex++;
  // Verifier si l'index est superieur ou egal au nombre de diapositives
  if (activeProfileIndex >= profiles.length) {
    // Si oui, revenir à la première diapositive
    activeProfileIndex = 0;
  }
  // Ajouter la classe active à la nouvelle diapositive active
  profiles[activeProfileIndex].classList.add('active');
});