const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');
const seccionPregunta = document.getElementById('seccion-pregunta');
const seccionExito = document.getElementById('seccion-exito');

// Escribe aquí las frases que quieras que aparezcan cuando digan NO
const frasesNo = [
    "¿Estás segura? 🥺",
    "Piénsalo otra vez... ☹️",
    "¡Dime que sí! 😭",
    "No acepto un no por respuesta",
    "Me vas a romper el corazón 💔",
    "No me hagas esto :(",
];

let indiceFrase = 0;
let tamañoSi = 18; // Tamaño inicial de fuente

btnNo.addEventListener('click', () => {
    // 1. Cambia el texto del botón No
    if (indiceFrase < frasesNo.length) {
        btnNo.innerText = frasesNo[indiceFrase];
        indiceFrase++;
    } else {
        btnNo.innerText = "¡No aceptaria un NO como respuesta! 😡";
        indiceFrase = 0; // Reinicia las frases
    }

    // 2. Hace que el botón SÍ crezca
    tamañoSi += 15; // Aumenta el tamaño
    btnSi.style.fontSize = tamañoSi + "px";
    btnSi.style.padding = (tamañoSi / 2) + "px " + tamañoSi + "px";
});

btnSi.addEventListener('click', () => {
    // Oculta la pregunta y muestra el mensaje de éxito
    seccionPregunta.classList.add('hide');
    seccionExito.classList.remove('hide');
});