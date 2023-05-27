PROBLEMA : L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


- Creare Struttura e Stile HTML & CSS;


- Creare una Funzione (createEasySquare) che genera dei Tag HTML "div":

    - Usa il comando "document.createElement('div')" e inseriscilo dentro una Constante (square);

    - Usa il comando "classList.add('')", per inserire la classe 'easy_square' alla Constante (square);

    - Ritorna (return) la Constante (square);


- Creare una Funzione (createMediumSquare) che genera dei Tag HTML "div":

    - Usa il comando "document.createElement('div')" e inseriscilo dentro una Constante (square);

    - Usa il comando "classList.add('')", per inserire la classe 'medium_square' alla Constante (square);

    - Ritorna (return) la Constante (square);


- Creare una Funzione (createHardSquare) che genera dei Tag HTML "div":

    - Usa il comando "document.createElement('div')" e inseriscilo dentro una Constante (square);

    - Usa il comando "classList.add('')", per inserire la classe 'hard_square' alla Constante (square);

    - Ritorna (return) la Constante (square);


- Usare il comando "document.getElementById('')" per recuperare il Button HTML "play" ed inserirlo in una Constante (playButton);


- Dichiarare una Variabile Contatore Click Utente (clickCounter = 0);


- QUANDO l'utente clicca sul "playButton":

    - Usare il comando "document.getElementById('')" per recuperare il container HTML dove inserire la Griglia composta dagli Square, ed inserirlo in una Constante (grid);

    - Usare il comando "document.getElementById('').value" per recuperare la select HTML dove l'utente ha scelto la Difficoltà, ed inserirla in una Constante (difficult);

    - Incrementare Variabile "clickCounter";

    - ? SE clickCounter === 1 ALLORA:

        - ? switch (difficult):

            - case 1 : // L'utente ha scelto Difficoltà Easy

                - Dichiarare una Constante che identifica la Size Massima della Griglia (gridEasySize = 100);

                - Creare un Ciclo FOR che scorre da 1 a (gridEasySize):

                    - Inserire dentro una Constante (square) il richiamo della Funzione (createEasySquare);

                    - Inserire (InnerText) l'Indice dentro la Constante (square);

                    - QUANDO l'utente clicca nell'elemento (square):

                        - Aggiungere all'elemento di ogni iterazione (square === this), la Classe che lo colorerà di Azzurro;

                    - Appendere (append) dentro la Constante (grid) la Constante (square).


            - case 2 : // L'utente ha scelto Difficoltà Medium

                - Dichiarare una Constante che identifica la Size Massima della Griglia (gridMediumSize = 81);

                - Creare un Ciclo FOR che scorre da 1 a (gridMediumSize):

                    - Inserire dentro una Constante (square) il richiamo della Funzione (createMediumSquare);

                    - Inserire (InnerText) l'Indice dentro la Constante (square);

                    - QUANDO l'utente clicca nell'elemento (square):

                        - Aggiungere all'elemento di ogni iterazione (square === this), la Classe che lo colorerà di Azzurro;

                    - Appendere (append) dentro la Constante (grid) la Constante (square).


            - case 3 : // L'utente ha scelto Difficoltà Hard

                - Dichiarare una Constante che identifica la Size Massima della Griglia (gridHardSize = 49);

                - Creare un Ciclo FOR che scorre da 1 a (gridHardSize):

                    - Inserire dentro una Constante (square) il richiamo della Funzione (createHardSquare);

                    - Inserire (InnerText) l'Indice dentro la Constante (square);

                    - QUANDO l'utente clicca nell'elemento (square):

                        - Aggiungere all'elemento di ogni iterazione (square === this), la Classe che lo colorerà di Azzurro;

                    - Appendere (append) dentro la Constante (grid) la Constante (square).