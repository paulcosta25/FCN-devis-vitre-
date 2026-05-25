document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("devis-form");
  const resultat = document.getElementById("resultat");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const largeur = parseFloat(document.getElementById("largeur").value);
    const hauteur = parseFloat(document.getElementById("hauteur").value);
    const typeVitrage = document.getElementById("type-vitrage").value;
    const nombreVitrages = parseInt(document.getElementById("nombre-vitrages").value) || 1;

    if (!largeur || !hauteur || largeur <= 0 || hauteur <= 0) {
      afficherErreur("Veuillez saisir des dimensions valides.");
      return;
    }

    const devis = calculerDevis({ largeur, hauteur, typeVitrage, nombreVitrages });
    afficherResultat(devis, { largeur, hauteur, typeVitrage, nombreVitrages });
  });

  function afficherResultat(devis, params) {
    const typeLabel = {
      simple: "Simple vitrage",
      double: "Double vitrage",
      triple: "Triple vitrage",
      feuillete: "Vitrage feuilleté",
    };

    resultat.innerHTML = `
      <div class="devis-card">
        <h2>Devis estimatif</h2>
        <table class="devis-table">
          <tr><td>Type de vitrage</td><td>${typeLabel[params.typeVitrage]}</td></tr>
          <tr><td>Dimensions</td><td>${params.largeur} × ${params.hauteur} cm</td></tr>
          <tr><td>Nombre de vitres</td><td>${params.nombreVitrages}</td></tr>
          <tr><td>Surface totale</td><td>${devis.surface} m²</td></tr>
          <tr class="separator"><td colspan="2"></td></tr>
          <tr><td>Fournitures</td><td>${devis.prixFourniture.toFixed(2)} €</td></tr>
          <tr><td>Main-d'œuvre (${devis.heures}h)</td><td>${devis.prixMainOeuvre.toFixed(2)} €</td></tr>
          <tr><td>Sous-total HT</td><td>${devis.sousTotal.toFixed(2)} €</td></tr>
          <tr><td>TVA (10%)</td><td>${devis.tva.toFixed(2)} €</td></tr>
          <tr class="total"><td><strong>Total TTC</strong></td><td><strong>${devis.total.toFixed(2)} €</strong></td></tr>
        </table>
        <button onclick="window.print()" class="btn-imprimer">Imprimer le devis</button>
      </div>
    `;
  }

  function afficherErreur(message) {
    resultat.innerHTML = `<p class="erreur">${escapeHtml(message)}</p>`;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
});
