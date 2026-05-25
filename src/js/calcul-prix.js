const TARIFS = {
  "simple": 30,
  "double": 80,
  "triple": 120,
  "feuillete": 100,
};

const TAUX_MAIN_OEUVRE = 50; // €/heure

function calculerSurface(largeur, hauteur) {
  return (largeur / 100) * (hauteur / 100); // cm -> m²
}

function estimerTemps(surface) {
  // Base : 1h pour 1m², minimum 0.5h
  return Math.max(0.5, surface * 1);
}

function calculerDevis({ largeur, hauteur, typeVitrage, nombreVitrages = 1 }) {
  const surface = calculerSurface(largeur, hauteur) * nombreVitrages;
  const prixFourniture = surface * (TARIFS[typeVitrage] ?? TARIFS.double);
  const heures = estimerTemps(surface);
  const prixMainOeuvre = heures * TAUX_MAIN_OEUVRE;
  const sousTotal = prixFourniture + prixMainOeuvre;
  const tva = sousTotal * 0.1; // TVA 10% travaux
  const total = sousTotal + tva;

  return {
    surface: +surface.toFixed(2),
    prixFourniture: +prixFourniture.toFixed(2),
    heures: +heures.toFixed(1),
    prixMainOeuvre: +prixMainOeuvre.toFixed(2),
    sousTotal: +sousTotal.toFixed(2),
    tva: +tva.toFixed(2),
    total: +total.toFixed(2),
  };
}

if (typeof module !== "undefined") {
  module.exports = { calculerDevis, TARIFS, TAUX_MAIN_OEUVRE };
}
