
function calculerRevenusPub() {
    let investissement = parseFloat(document.getElementById('investPub').value);
    let plateforme = document.getElementById('plateforme').value;

    const facteur = { meta: 3, linkedin: 4, twitter: 2, tiktok: 5, youtube: 3.5 };
    let revenu = investissement * (facteur[plateforme] || 1);
    afficherResultat('resultatPub', revenu);
}

function calculerRevenusSEO() {
    let investissement = parseFloat(document.getElementById('investSEO').value);
    let revenu = investissement * 4.5; // Hypothèse basée sur des tendances actuelles.
    afficherResultat('resultatSEO', revenu);
}

function calculerROI() {
    let investissement = parseFloat(document.getElementById('investROI').value);
    let revenu = parseFloat(document.getElementById('revenuROI').value);

    if (investissement > 0) {
        let roi = ((revenu - investissement) / investissement) * 100;
        document.getElementById('resultatROI').textContent = `Le ROI est de ${roi.toFixed(2)}%.`;
    } else {
        alert('Veuillez entrer un montant d\'investissement valide.');
    }
}

function calculerRevenusTotaux() {
    const revenusPub = parseFloat(document.getElementById('resultatPub').textContent) || 0;
    const revenusSEO = parseFloat(document.getElementById('resultatSEO').textContent) || 0;
    afficherResultat('resultatTotal', revenusPub + revenusSEO);
}

function afficherResultat(elementId, montant) {
    const euro = montant.toFixed(2);
    const cad = (montant * 1.5).toFixed(2);
    const usd = (montant * 1.1).toFixed(2);

    document.getElementById(elementId).innerHTML = `
        ${euro} € | ${cad} CAD | ${usd} USD
    `;
}
