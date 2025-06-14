
function getSaisonCoefficient(month) {
  if ([6, 7, 8].includes(month)) return 1.5; // Été
  if ([11, 12].includes(month)) return 2;   // Fêtes
  return 1; // Autres saisons
}

function getZoneCoefficient(ville) {
  const grandesVilles = ["paris", "lyon", "marseille", "bordeaux"];
  if (!ville) return 1;
  if (ville.toLowerCase() === "paris") return 2;
  if (grandesVilles.includes(ville.toLowerCase())) return 1.5;
  return 1;
}

function getSurfaceCoefficient(surface) {
  const value = parseFloat(surface);
  if (value <= 2) return 1;
  if (value <= 4) return 1.5;
  return 2;
}

function calculerPrix() {
  const ville = document.querySelector("input[placeholder='Ville ou Code postal']").value;
  const duree = document.querySelector("select:nth-of-type(1)").value;
  const surfaceType = document.querySelector("select:nth-of-type(2)").value;
  const startDateInput = document.getElementById("start-date").value;

  if (!ville || !duree || !surfaceType || !startDateInput) {
    document.querySelector("#prix-estime strong").textContent = "-- €";
    return;
  }

  let base = 100;
  let weeks = 1;

  switch (duree) {
    case "1mois": weeks = 4; break;
    case "3mois": weeks = 12; break;
    case "6mois": weeks = 24; break;
    case "1an": weeks = 52; break;
    default: weeks = 1;
  }

  
  const dateStart = new Date(startDateInput);
  const month = dateStart.getMonth() + 1;

  const coefSaison = getSaisonCoefficient(month);
  const coefZone = getZoneCoefficient(ville);
  const coefSurface = getSurfaceCoefficient(surfaceType.replace("m2", ""));

  const prix = Math.round(base * weeks * coefSaison * coefZone * coefSurface);

  document.querySelector("#prix-estime strong").textContent = `${prix} €`;
}

document.querySelectorAll(".search-fields input, .search-fields select").forEach(el => {
  el.addEventListener("input", calculerPrix);
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const navMenu = document.getElementById("main-menu");
  navMenu.classList.toggle("open");
});

