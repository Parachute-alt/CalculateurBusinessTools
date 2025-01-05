
function calculateAdRevenue() {
    const investment = document.getElementById('adInvestment').value;
    const result = investment * 3; // Hypothèse de rendement x3
    document.getElementById('adResult').innerText = `Résultat : ${formatCurrency(result)}`;
    updateTotalRevenue();
}

function calculateSEORevenue() {
    const investment = document.getElementById('seoInvestment').value;
    const result = investment * 4; // Hypothèse de rendement x4
    document.getElementById('seoResult').innerText = `Résultat : ${formatCurrency(result)}`;
    updateTotalRevenue();
}

function calculateROI() {
    const investment = document.getElementById('roiInvestment').value;
    const revenue = document.getElementById('roiRevenue').value;
    if (investment > 0) {
        const roi = ((revenue - investment) / investment) * 100;
        document.getElementById('roiResult').innerText = `Résultat : ${roi.toFixed(2)} %`;
    } else {
        document.getElementById('roiResult').innerText = "Veuillez entrer un investissement valide.";
    }
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
}

function updateTotalRevenue() {
    const adInvestment = parseFloat(document.getElementById('adInvestment').value) || 0;
    const seoInvestment = parseFloat(document.getElementById('seoInvestment').value) || 0;
    const total = adInvestment * 3 + seoInvestment * 4; // Calcul basé sur les hypothèses précédentes
    document.getElementById('totalRevenue').innerText = formatCurrency(total);
}
