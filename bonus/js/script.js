"use strict";

// FUNZIONE CHE GENERA DEI TAG HTML "DIV" CON CLASSE "EASY_SQUARE"
function createEasySquare(){

    // CREAZIONE ELEMENTO HTML "DIV" ED INSERIMENTO DENTRO UNA CONSTANTE
    const square = document.createElement('div');

    // INSERIMENTO CLASSE "EASY_SQUARE" ALL'ELEMENTO "DIV"
    square.classList.add('easy_square');

    return square;
}


// FUNZIONE CHE GENERA DEI TAG HTML "DIV" CON CLASSE "MEDIUM_SQUARE"
function createMediumSquare(){

    // CREAZIONE ELEMENTO HTML "DIV" ED INSERIMENTO DENTRO UNA CONSTANTE
    const square = document.createElement('div');

    // INSERIMENTO CLASSE "MEDIUM_SQUARE" ALL'ELEMENTO "DIV"
    square.classList.add('medium_square');

    return square;
}


// FUNZIONE CHE GENERA DEI TAG HTML "DIV" CON CLASSE "HARD_SQUARE"
function createHardSquare(){

    // CREAZIONE ELEMENTO HTML "DIV" ED INSERIMENTO DENTRO UNA CONSTANTE
    const square = document.createElement('div');

    // INSERIMENTO CLASSE "HARD_SQUARE" ALL'ELEMENTO "DIV"
    square.classList.add('hard_square');

    return square;
}


// RECUPERO IL BUTTON HTML "PLAY" E LO INSERISCO IN UNA CONSTANTE
const playButton = document.getElementById('play');

// VARIABILE CONTATORE CLICK UTENTE
let clickCounter = 0;


// L'UTENTE CLICCA SUL "PLAY_BUTTON"
playButton.addEventListener("click", function(){

    // RECUPERO IL CONTAINER HTML "GRID" E LO INSERISCO IN UNA CONSTANTE
    const grid = document.getElementById('grid');

    // INCREMENTO VARIABILE CONTATORE CLICK UTENTE
    clickCounter++;
    
    if(clickCounter === 1){ // ANCHE SE L'UTENTE CLICCA PIU VOLTE, IL CICLO VIENE ESEGUITO SOLO UNA VOLTA

        // CONSTANTE CHE IDENTIFICA LA SIZE MASSIMA DELLA GRIGLIA
        const easyGridSize = 100;

        // CICLO FOR CHE CREA TUTTI GLI ELEMENTI DELLA GRIGLIA
        for (let i = 1; i <= easyGridSize; i++){

            // RICHIAMO LA FUNZIONE CREATE_SQUARE E LA INSERISCO DENTRO UNA CONSTANTE
            const square = createEasySquare();

            // INSERISCO IL NUMERATORE DEI BLOCCHI DELLA GRIGLIA
            square.innerText = i;

            // L'UTENTE CLICCA SU OGNI BLOCCO DELLA GRIGLIA
            square.addEventListener("click", function(){

                // AGGIUNGO AL BLOCCO CLICCATO LA CLASSE "SQUARE_SELECTED"
                this.classList.add('square_selected');
            })

            // INSERISCO IL CONTENUTO DELLA CONSTANTE SQUARE DENTRO LA CONSTANTE GRID
            grid.append(square);
        }
    }
})