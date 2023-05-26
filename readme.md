PROBLEMA : L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


- Creare Struttura e Stile HTML & CSS;


- Creare una Funzione (createSquare) che genera dei Tag HTML "div":

    - Usa il comando "document.createElement('div')" e inseriscilo dentro una Constante (square);

    - Usa il comando "classList.add('square')", per inserire la classe 'square' alla Constante (square);

    - Ritorna (return) la Constante (square);


- Usare il comando "document.getElementById('')" per recuperare il Button HTML "play" ed inserirlo in una Constante (playButton);

- Usare il comando "document.getElementById('')" per recuperare il container HTML dove inserire la Griglia composta dagli Square, ed inserirlo in una Constante (grid);


- Dichiarare una Variabile Contatore Click Utente (clickCounter = 0);


- QUANDO l'utente clicca sul "playButton":

    - Incrementare Variabile "clickCounter";

    - ? SE clickCounter === 1 ALLORA:

        - Dichiarare una Constante che identifica la Size Massima della Griglia (gridSize = 100);

        - Creare un Ciclo FOR che scorre da 1 a (gridSize):

            - Inserire dentro una Constante (square) il richiamo della Funzione (createSquare);

            - Inserire (InnerText) l'Indice dentro la Constante (square);

            - QUANDO l'utente clicca nell'elemento (square):

                - Aggiungere all'elemento di ogni iterazione (square === this), la Classe che lo colorerà di Azzurro;

            - Appendere (append) dentro la Constante (grid) la Constante (square).


