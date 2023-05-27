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

    // RECUPERO IL VALORE INSERITO DALL'UTENTE TRAMITE LA DIFFICULT_SELECT HTML
    const difficult = parseInt(document.getElementById('select_difficult').value);

    // INCREMENTO VARIABILE CONTATORE CLICK UTENTE
    clickCounter++;
    
    if(clickCounter === 1){ // ANCHE SE L'UTENTE CLICCA PIU VOLTE, IL CICLO VIENE ESEGUITO SOLO UNA VOLTA
        // CONTROLLO CHE DIFFICOLTA HA SCELTO L'UTENTE
        switch (difficult){
            
            case 1: // L'utente ha scelto Difficoltà Easy
                // CONSTANTE CHE IDENTIFICA LA SIZE MASSIMA DELLA GRIGLIA
                const gridEasySize = 100;

                // CICLO FOR CHE CREA TUTTI GLI ELEMENTI DELLA GRIGLIA
                for (let i = 1; i <= gridEasySize; i++){

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
            break;

            case 2: // L'utente ha scelto Difficoltà Medium

                // CONSTANTE CHE IDENTIFICA LA SIZE MASSIMA DELLA GRIGLIA
                const gridMediumSize = 81;

                // CICLO FOR CHE CREA TUTTI GLI ELEMENTI DELLA GRIGLIA
                for (let i = 1; i <= gridMediumSize; i++){

                    // RICHIAMO LA FUNZIONE CREATE_SQUARE E LA INSERISCO DENTRO UNA CONSTANTE
                    const square = createMediumSquare();

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
            break;

            case 3: // L'utente ha scelto Difficoltà Hard

                // CONSTANTE CHE IDENTIFICA LA SIZE MASSIMA DELLA GRIGLIA
                const gridHardSize = 49;

                // CICLO FOR CHE CREA TUTTI GLI ELEMENTI DELLA GRIGLIA
                for (let i = 1; i <= gridHardSize; i++){

                    // RICHIAMO LA FUNZIONE CREATE_SQUARE E LA INSERISCO DENTRO UNA CONSTANTE
                    const square = createHardSquare();

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
            break;
        }
        
    }
})



