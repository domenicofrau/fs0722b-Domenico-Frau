/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
-------------------------------------------------------------------------------------------------------------------------
I principali datatype sono i seguenti:

stringa : indica una sequenza di caratteri

numerico : indica una sequenza di numeri (i numeri decimali si esprimono con il punto)

booleano: ammette solo due valori, vero o falso. Si usa per contolli condizionali.
-------------------------------------------------------------------------------------------------------------------------
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name = 'Domenico';
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var a = 12;
var b = 20;
var somma = a + b;

console.log(somma);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  name = 'Frau';
  console.log(name);

//Se avessi usato come keyword CONST invece che VAR, allora non avrei potuto riassegnare il valore (in questo caso una stringa). Ad esempio:

/*

const myName = 'Domenico'
console.log(myName)
myName = 'Pippo'
console.log(myName)

*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var c = 4;
var sottrazione = c - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//in questo caso il CONSOLELOG mi dice giustamente che le due variabili sono diverse.
var name1 = 'jhon';
var name2 = 'jhon';

let verifica = (name1 == name2) ? 'è uguale' : 'è diverso';
console.log(verifica)

if (name1.toLowerCase == name2.toLowerCase){
  console.log('è uguale')
}else {
  console.log('è diverso')
}

