/* **-------------------** */
    /* NOTE CI-DESSOUS */
/* **-------------------** */
/* version 1.0 */
/* Ici se situe les plus grande interaction du site */

// responsiveScreenAndNormalizeSize();
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

function animation3D() {
  const anim_var = document.getElementById('anim3D');
  anim_var.classList.toggle('animate3D');
} 

var i = 0;
var A = 0;
var txt = 'Aujourd\'hui, maman est morte. Ou peut-être hier, je ne sais pas.J\'ai reçu un telegramme de l\'asile : « Mère decedee. Enterrement demain. Sentiments distingues. »';
var txt2 = 'Le theâtre represente une chambre à demi demeublee; un grand fauteuil de malade est au milieu. Figaro, avec une toise, mesure le plancher';
var speed = 55;
var speed2 = 55;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  
}

function typeWriterD() {
  if (A < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(A);
    A++;
    setTimeout(typeWriterD, speed2);
  }
}

// function closeAperçu() {
//   document.getElementById("demo").style.display="none";
//   document.getElementById("demo2").style.display="none";
// } 