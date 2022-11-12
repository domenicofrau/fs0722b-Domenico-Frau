//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO A
Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;                                                  //creo la variabile;

console.log("ESERCIZIO A :", sum)                                                                 
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO B
Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 20);                         //creo la variabile richiesta ed attraverso l'utilizzo dell'oggetto integrato nelle API di Javascript "Math" creo un numero randomico compreso tra 0 e 20, grazie al metodo ".random". (.floor è l'approsimazione per difetto, si sarebbe potuto utilizzare anche .ceil, o .round ma non avrebbero generato anche lo 0, cosa che invece era richiesta nell'esercizio);

console.log("ESERCIZIO B :", random)
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO C
Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me =                                                            //creo l'oggetto richiesto ed aggiungo le varie proprietà;
{
  "name": "Domenico",
  "surname": "Frau",
  "age": "32"
};

console.log("ESERCIZIO C :", me)
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO D
Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;                                                      //utilizzo la keyword "delete" per eliminare la proprietà "age" dall'oggetto "me";
//delete me['age'];                                                 //alternativa utilizzando la notazione di tipo array

console.log("ESERCIZIO D :", me)
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO E
Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

let skills = ['html', 'css', 'javascript',];                        //creo l'array richiesto (anche se l'html non è un linguaggio di programmazione, ma di markup);
me.skills = skills;                                                 //aggiungo tale array all'oggetto "me";

console.log("ESERCIZIO E :", me)
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO F
Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

let newSkill = me.skills.push("vba");                               //aggiungo all'array "skills" l'elemento "vba" grazie all'utilizzo del metodo .push che permette di aggiungere elementi in ultima posizione;

console.log("ESERCIZIO F :", me)
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO G
Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

let delSkill = me.skills.pop()                                      //rimuovo dall'array l'ultimo elemento presente all'interno dell'array "me" grazie all'utilizzo del metodo .pop;

console.log("ESERCIZIO G :", me)
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 1
Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {                                                   //creo la funzione;
  let random = Math.ceil(Math.random() * 6);                        //attraverso l'utilizzo dell'oggetto integrato nelle API di Javascript "Math" creo un numero randomico compreso tra 0 e 6, grazie al metodo ".random". (.ceil è l'approsimazione per eccesso, si sarebbe potuto utilizzare anche .floor, o .round ma avrebbero generato anche lo 0, cosa che non era richiesta nell'esercizio);
  return random                                                     //restituisco il valore;
}

console.log("ESERCIZIO 1 :", dice())
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 2
Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(a, b) {                                        //creo la funzione che accetta i due parametri richiesti;
  return Math.max(a, b)                                             //ottengo il maggiore fra i due parametri grazie al metodo .max; 
}

console.log("ESERCIZIO 2 :", whoIsBigger(33, 33))
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 3
Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str) {                                             //creo la funzione che accetta un parametro;
  let arr = [str.split(" ")]                                        //definisco un array con all'interno la stringa ricevuta come parametro e grazie al metodo .split separo le varie parole che la compongono;
  return arr                                                        //restituisco l'array;
}
console.log("ESERCIZIO 3 :", splitMe('prova di separazione di qualsiasi stringa'))
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 4
Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, bool) {                                     //creo la funzione che accetta due parametri;
  let senzaLaPrima = str.substr(1);                                 //definisco la prima variabile assegnandole il contenuto della stringa che verrà inserito al momento dell'avvio della funzione. Attraverso l'utilizzo del metodo delle stringhe .substr ottengo la stringa privata della prima lettera;
  let senzaUltima = str.substr(0, str.length - 1)                   //definisco la seconda variabile assegnandole il contenuto della stringa che verrà inserito al momento dell'avvio della funzione. Attraverso l'utilizzo del metodo delle stringhe .substr ottengo la stringa privata dell'ultima lettera;
  if (bool == true) {                                               //se il secondo parametro inserito nella funzione al momento del lancio è true, allora...
    return senzaLaPrima                                             //...restituisco la condizione richiamando la prima variabile creata;
  }
  else {                                                            //altrimenti...
    return senzaUltima                                              ////...restituisco la condizione richiamando la seconda variabile creata;
  }
}

console.log("ESERCIZIO 4 :", deleteOne('PROVA', false))
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 5
Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str) {                                         //creo la funzione che accetta un parametro;   
  return str.replace(/[0-9] ?/g, "")                                //restituisco la stringa inserita come parametro all'interno della funzione al momento del lancio e grazie al metodo delle stringhe .replace ottengo la stessa stringa ma privata dei numeri come richiesto;
}

console.log("ESERCIZIO 5 :", onlyLetters('HO 3 GATTI'))
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 6
Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str) {                                       //creo la funzione che accetta un parametro;  
  if (str.includes("@" && ".com")) {                                //se la stringa inserita come parametro all'interno della funzione al momento del lancio contiene (utilizzando il metodo delle stringhe .includes) "@" e ".com" allora...
    return true                                                     //...restituisco true;
  }
  else {                                                            //altrimenti...
    return false                                                    //...restituisco false;
  }
}

console.log("ESERCIZIO 6 :", isThisAnEmail('domenico.frau@outlook.com'))
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 7
Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {                                            //creo la funzione richiesta;
  let data = new Date();                                            //definisco la prima variabile ottenendo la data attuale grazie all'utilizzo dell'oggetto integrato nelle API di Javascript "Date";
  let giorno = data.getDay();                                       //definisco una seconda variabile ed ottengo, richiamando la prima, il numero del giorno attuale della settimana.
  let giorni = new Array                                            //definisco un nuovo array che contiene i vari giorni della settimana sotto forma di stringa. Il primo è la domenica, per via del fatto che Javacript gli attribuisce di default l'indice 0; 
  (
    'Domenica', 
    'Lunedì', 
    'Martedì', 
    'Mercoledì', 
    'Giovedì', 
    'Venerdì', 
    'Sabato'
  );

  return (giorni[giorno]);                                          //restituisco il numero del giorno sotto forma di stringa attraverso il richiamo delle variabili definite;
}

console.log("ESERCIZIO 7 :", whatDayIsIt())
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 8
Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

Example:
rollTheDices(3) => ritorna {
sum: 10
values: [3, 3, 4]
}
*/

function rollTheDices(n) {                                           //creo la funzione richiesta che accetta un parametro;
  let obj = {};                                                      //definisco una variabile di tipo oggetto vuoto;
  let arr = [];                                                      //definisco una variabile di tipo arrey vuoto;

  for (let i = 0; i < n; i++) {                                      //determino il funzionamento del ciclo "for";
    arr.push(dice());                                                //aggiungo all'array vuoto tramite il metodo .push, la funzione creata in precedenza;
  }

  obj.values = arr;                                                  //determino che la nuova proprietà "values" dell'oggetto creato contenga l'array;
  obj.sum = eval(arr.join('+'));                                     //determino che la nuova proprietà "sum" dell'oggetto creato contenga la somma dei valori estratti dall'array sfruttando il metodo eval che valuta o esegue un argomento. Se l'argomento è un'espressione, eval valuta l'espressione. Se l'argomento è una o più istruzioni JavaScript, eval esegue le istruzioni. Il join metodo restituisce un array sotto forma di stringa;
  return obj                                                         //restituisco l'oggetto;
}

console.log("ESERCIZIO 8 :", rollTheDices(6))
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 9
Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(date) {                                         //creo la funzione richiesta che accetta un parametro;
  let x = new Date();                                                //definisco la prima variabile ottenendo la data attuale grazie all'utilizzo dell'oggetto integrato nelle API di Javascript "Date";
  let y = new Date(date);                                            //definisco la seconda variabile contenente la data inseita come parametro al momento del lancio della funzione attraverso l'utilizzo dell'oggetto integrato nelle API di Javascript "Date";

  const differenza = Math.floor((x - y) / (1000 * 60 * 60 * 24));   

  return differenza
}

console.log("ESERCIZIO 9 :", howManyDays('08-11-2022')) /*formato per l'inserimento: MM-GG-AAAA*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 10
Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  let oggi = new Date()
  let giorno = oggi.getDate()
  let mese = oggi.getMonth() + 1

  if (giorno == 11 && mese == 10) {
    return true
  }
  return false
}

console.log("ESERCIZIO 10 :", isTodayMyBirthday(), "il mio compleanno è l'11 ottobre")

//------------------------------------------------------------------------------------------------------------------------------------------------------------
// Arrays & Oggetti
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 11
Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let pizze = {
  gusto: "margherita",
  prezzo: "5",
};
function deleteProp(ogg = {}, str) {
  delete ogg[str];
  return ogg;
}

console.log("ESERCIZIO 11 :", deleteProp(pizze, "prezzo"));
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 12
Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(movies) {
  let film = movies[0];
  let anno = movies[0].Year;
  for (let f of movies) {
    if (f.Year > anno) {
      film = f;
    }
  }
  return film;
}

console.log("ESERCIZIO 12 :", newestMovie(movies));
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 13
Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  let nFilm = movies.length;
  return nFilm
}

console.log("ESERCIZIO 13 :", countMovies(), "film totali");
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 14
Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears() {
  let arr = [];
  for (let f of movies) {
    arr.push(f.Year);
  }
  return arr;
}

console.log("ESERCIZIO 14 :", onlyTheYears());
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 15
Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium() {
  arr = [];
  for (let f of movies) {
    if (f.Year < 2000) {
      arr.push(f);
    }
  }
  return arr;
}

console.log("ESERCIZIO 15 :", onlyInLastMillennium());
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 16
Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears() {
  arr = 0;
  for (let f of movies) {
    arr += parseInt(f.Year);
  }
  return arr;
}

console.log("ESERCIZIO 16 :", sumAllTheYears());
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 17
Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(str = "") {
  let arr = [];
  for (let f of movies) {
    if (f.Title.toLowerCase().match(str.toLowerCase())) {
      arr.push(f);
    }
  }
  return arr;
}

console.log("ESERCIZIO 17 :", searchByTitle());
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 18
Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
"match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(str = "") {
  let obj = {
    match: [],
    unmatch: [],
  };
  for (let f of movies) {
    if (f.Title.toLowerCase().match(str.toLowerCase())) {
      obj.match.push(f);
    } else {
      obj.unmatch.push(f);
    }
  }
  return obj;
}

console.log("ESERCIZIO 18 :", searchAndDivide("Avengers"));
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 19
Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(n) {
  movies.splice(n, 1);
  return movies;
}

console.log("ESERCIZIO 19 :", removeIndex(5));
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 20
Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function select() {
  let get = document.getElementById('container');
  return get
}

console.log("ESERCIZIO 20 :", select())
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 21
Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectTag() {
  return document.querySelectorAll("td");
}

console.log("ESERCIZIO 21 :", selectTag())
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 22
Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log("ESERCIZIO 22 :")
function print() {
  let td = document.querySelectorAll('td');
  for (const i of td) {
    console.log(i.innerHTML)
  }
}
print()
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 23
Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function addBackground() {
  let a = document.querySelectorAll("a");
  for (let i of a) {
    i.style.background = "red";
  }
  return "sfondo aggiunto"
}

console.log("ESERCIZIO 23 :", addBackground())
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 24
Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addLi() {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode('test'))
  let aggiunto = document.getElementById('myList').appendChild(li);
}
addLi()

console.log("ESERCIZIO 24 :", document.querySelector('#myList'))
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 25
Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuota() {
  let li = document.getElementById("myList");
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  return li
}

console.log("ESERCIZIO 25 :", svuota())
//------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 26
Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClass() {
  let tr = document.querySelectorAll("tr");
  for (let i of tr) {
    i.classList.add("test");
  }
  return tr
}

console.log("ESERCIZIO 26 :", addClass())
//------------------------------------------------------------------------------------------------------------------------------------------------------------
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

Esempio:
halfTree(3)

*
**
***

*/

/* ESERCIZIO 28
Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

Esempio:
tree(3)

*
***
*****

*/

/* ESERCIZIO 29
Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
