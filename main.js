// Selezione dei paragrafi
let paragrafi = document.querySelectorAll('p');

// 1. Bottone Colore Casuale
document.querySelector('#btnColor').addEventListener('click', () => {
    paragrafi.forEach(p => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        p.style.color = `rgb(${r}, ${g}, ${b})`;
    });
});

// 2. Bottone Grassetto
document.querySelector('#btnBold').addEventListener('click', () => {
    paragrafi.forEach(p => {
        p.style.fontWeight = 'bold';
    });
});

// 3. Bottone Mostra/Nascondi
document.querySelector('#btnToggle').addEventListener('click', () => {
    paragrafi.forEach(p => {
        p.classList.toggle('nascosto');
    });
});