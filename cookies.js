let cookieCount = 0;
let grandma = 0;
let billet = 0;

document.getElementById('cookie').addEventListener('click', () => {
    cookieCount += (1 + grandma);
    billet += (1 + grandma);
    updateUI();
});

document.getElementById('addGrandma').addEventListener('click', () => {
    if (billet >= 50) {
        grandma++;
        billet -= 50;
    }
    updateUI();
});

function updateUI() {
    document.getElementById('cookieCount').innerText = cookieCount;
    document.getElementById('grandma').innerText = grandma;
    document.getElementById('billet').innerText = billet;
}