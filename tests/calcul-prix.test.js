const { calculerDevis, TARIFS } = require("../src/js/calcul-prix");

let passed = 0;
let failed = 0;

function assert(description, condition) {
  if (condition) {
    console.log(`  ✓ ${description}`);
    passed++;
  } else {
    console.error(`  ✗ ${description}`);
    failed++;
  }
}

console.log("Tests calcul-prix.js\n");

// Surface
const d1 = calculerDevis({ largeur: 100, hauteur: 100, typeVitrage: "double" });
assert("1m² de double vitrage → fourniture = 80€", d1.prixFourniture === 80);
assert("surface = 1m²", d1.surface === 1);

// TVA 10%
assert("TVA = 10% du sous-total", Math.abs(d1.tva - d1.sousTotal * 0.1) < 0.01);
assert("total = sous-total + TVA", Math.abs(d1.total - (d1.sousTotal + d1.tva)) < 0.01);

// Plusieurs vitres
const d2 = calculerDevis({ largeur: 100, hauteur: 100, typeVitrage: "double", nombreVitrages: 3 });
assert("3 vitres → surface = 3m²", d2.surface === 3);
assert("3 vitres → fourniture = 240€", d2.prixFourniture === 240);

// Tarif simple vitrage
const d3 = calculerDevis({ largeur: 100, hauteur: 100, typeVitrage: "simple" });
assert("simple vitrage 1m² → fourniture = 30€", d3.prixFourniture === 30);

// Temps minimum
const d4 = calculerDevis({ largeur: 10, hauteur: 10, typeVitrage: "double" });
assert("petite surface → temps minimum 0.5h", d4.heures === 0.5);

console.log(`\n${passed} passé(s), ${failed} échoué(s)`);
if (failed > 0) process.exit(1);
