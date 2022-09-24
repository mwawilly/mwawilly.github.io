/*
 * ---------------------------------------------------------------------------------------------------
 * Ouverture et fermeture du volet + gestion boutons
 * ---------------------------------------------------------------------------------------------------
 */

// Références JavaScript aux éléments du DOM
let boutonVolet = document.getElementById("boutonVolet");
let boutonRond = document.getElementById("boutonRond");
let volet = document.getElementById("voletHaut");

// Fonction : ouvre / ferme le volet
function ouvreFermeVolet() {
  volet.classList.toggle("open");

  // délais de 2.5 sec avant réactivation des boutons
  // empèche le spam click,  délais de 2.5 sec avant réactivation des boutons
  boutonVolet.disabled = true;
  setTimeout(function () {
    boutonVolet.disabled = false;
  }, 2500);

  boutonRond.disabled = true;
  setTimeout(function () {
    boutonRond.disabled = false;
  }, 2500);
}

// Activation et programmation des clics
boutonVolet.addEventListener("click", ouvreFermeVolet);
boutonRond.addEventListener("click", ouvreFermeVolet);

//masque le bouton cliqué et rend visible l'autre bouton
boutonVolet.addEventListener("click", function () {
  boutonVolet.style.visibility = "hidden";
  boutonRond.style.visibility = "visible";
});
//masque le bouton cliqué et rend visible l'autre bouton
boutonRond.addEventListener("click", function () {
  boutonVolet.style.visibility = "visible";
  boutonRond.style.visibility = "hidden";
});

/*
 * --------------------------------
 * Text Auto write
 * ---------------------------------
 */

const text = " < Site De MWAWILLY />     ";
let index = 0;
let limit = false;

function start() {
  document.getElementById("autoText").innerHTML = text.slice(0, index);
  if (!limit) {
    index++;
  } else {
    index--;
  }
  if (index === text.length) {
    limit = true;
  }
  if (index === 0) {
    limit = false;
  }
}
let timer = setInterval(start, 350);

/*
 * --------------------------------
 * draggable box
 * ---------------------------------
 */
$(function () {
  $(".cube").draggable();
});

$(document).ready(function () {
  var shouldCancel = false;
  $("#box1").draggable({
    containment: "#mainBox",
    revert: function () {
      if (shouldCancel) {
        shouldCancel = false;
        return true;
      } else {
        return false;
      }
    },
  });
});
