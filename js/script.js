"use strict";

// FUNZIONE CHE GENERA DEI TAG HTML "DIV" CON CLASSE "SQUARE"
function createSquare(){

    // CREAZIONE ELEMENTO HTML "DIV" ED INSERIMENTO DENTRO UNA CONSTANTE
    const square = document.createElement('div');

    // INSERIMENTO CLASSE "SQUARE" ALL'ELEMENTO "DIV"
    square.classList.add('square');

    return square;
}