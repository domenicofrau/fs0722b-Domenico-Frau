const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/

var characters = []

/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  let name = starWarsCharacters[i].name;
  characters.push(name)
}
console.log('▼ ▼ ▼ ESERCIZIO 02 ▼ ▼ ▼')
console.log(characters)

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci un oggetto con questa struttura: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/

var femaleCharacters = []

var leia = { "name": "Leia Organa", "hair_color": "brown", "eye_color": "brown", };

femaleCharacters.push(leia)
console.log('▼ ▼ ▼ ESERCIZIO 03 ▼ ▼ ▼')
console.log(femaleCharacters)


/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/

var eye_color = { "blue": [], "yellow": [], "brown": [], "red": [], "blue-gray": [] };
console.log('▼ ▼ ▼ ESERCIZIO 04 ▼ ▼ ▼')
console.log(eye_color)

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  let elemento = starWarsCharacters[i]
  switch (elemento.eye_color) {
    case "blue":
      eye_color.blue.push(elemento)
      break
    case "yellow":
      eye_color.yellow.push(elemento)
      break
    case "brown":
      eye_color.brown.push(elemento)
      break
    case "red":
      eye_color.red.push(elemento)
      break
    case "blue-gray":
      eye_color["blue-gray"].push(elemento)
      break
  }
}
console.log('▼ ▼ ▼ ESERCIZIO 05 ▼ ▼ ▼')
console.log(eye_color)

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
*/

let i = 0
let massa = 0
console.log('▼ ▼ ▼ ESERCIZIO 06 ▼ ▼ ▼')
while (i < starWarsCharacters.length) {
  massa += parseInt(starWarsCharacters[i].mass)
  i++;
}
console.log(massa);

/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

console.log('▼ ▼ ▼ ESERCIZIO 07 ▼ ▼ ▼')
let massaTotale = massa;
console.log("LA MASSA TOTALE DELL'EQUIPAGGIO È: " + massaTotale);
switch (true) {
  case massaTotale < 500:
    console.log("Ship is under loaded");
    break;
  case massaTotale == 500:
    console.log("Ship is half loaded");
    break;
  case massaTotale > 700 && massaTotale < 900:
    console.log("Warning: load is over 700");
    break;
  case massaTotale > 900 && massaTotale < 1000:
    console.log("Critical Load: Over 900");
    break;
  case massaTotale >= 1000:
    console.log("DANGER! OVERLOAD ALERT: Jump ship now!");
    break;
}

/* ESERCIZIO 8
Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/

for (var y = 0; y < starWarsCharacters.length; y++) {
  if (starWarsCharacters[y].gender === "n/a") {
    starWarsCharacters[y].gender = "robot";
  }
}
console.log('▼ ▼ ▼ ESERCIZIO 08 ▼ ▼ ▼')
console.log(starWarsCharacters);

/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto crea un conosle.log per controllare la proprietà length di "characters" prima e dopo l'operazione
*/

console.log('▼ ▼ ▼ ESERCIZIO 09 ▼ ▼ ▼')
console.log("PRIMA: " + characters.length)
for (let i of femaleCharacters) {
  for (let k of characters) {
    if (k == i.name) {
      characters.splice(characters.indexOf(k), 1);
    }
  }
}

console.log("DOPO: " + characters.length)

/* EXTRA ESERCIZIO 10
Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let numeroRandom = random(0, starWarsCharacters.length);
let elemento = starWarsCharacters[numeroRandom];
console.log('▼ ▼ ▼ ESERCIZIO 10 ▼ ▼ ▼')
console.log(`Il personaggio di Star Wars si chiama ${elemento.name}, è alto ${elemento.height}cm, pesa ${elemento.mass}kg e i suoi capelli sono di colore ${elemento.hair_color}. È nato nel ${elemento.birth_year}, ha la pelle di colore ${elemento.skin_color} e gli occhi ${elemento.eye_color}. Il suo genere è ${elemento.gender}`)