let paragrafi = document.querySelectorAll('p');
let btnColor = document.querySelector('#btnColor');
let btnBold = document.querySelector('#btnBold');
let btnToggle = document.querySelector('#btnToggle');

// 1. Bottone Colore (Usando il ciclo corretto)
btnColor.addEventListener('click', () => {
    // Nota: Ho rimosso '.array' perché non esiste
    paragrafi.forEach(paragrafo => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
        paragrafo.style.color = `rgb(${r}, ${g}, ${b})`;
    });
});

// 2. Bottone Grassetto
btnBold.addEventListener('click', () => {
    paragrafi.forEach(p => {
        p.style.fontWeight = 'bold';
    });
});

// 3. Bottone Mostra/Nascondi
btnToggle.addEventListener('click', () => {
    paragrafi.forEach(p => {
        p.classList.toggle('nascosto');
    });
});