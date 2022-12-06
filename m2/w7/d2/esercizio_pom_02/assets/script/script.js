/* 
ESERCIZIO 01

Crea un metodo nella classe Person che restituisca il confronto tra l'età di un'altra persona. Date le istanze 
p1, p2 e p3, che verranno inizializzate con gli attributi name ed age, restituire una frase nel seguente 
formato: x è più vecchio di y.
*/

class Person {
    name;
    age;
    constructor(_name = '', _age = 0) {
        this.name = _name;
        this.age = _age;
    }
    confronta(user1, user2) {
        if (user1.age > user2.age) {
            return user1.name + " è più vecchio di " + user2.name;
        }
        else if (user1.age == user2.age) {
            return user1.name + " ha la stessa età di " + user2.name;
        }
        else {
            return user1.name + " è più giovane di " + user2.name;
        }
    }
}

let p1 = new Person('Luca', 43);
let p2 = new Person('Luigi', 75);
let p3 = new Person('Mario', 18);

console.log("---------------------------------")

console.log(p1, p2, p3);

console.log("---------------------------------")

console.log(p1.name, "ha", p1.age, "anni")
console.log(p2.name, "ha", p2.age, "anni")
console.log(p3.name, "ha", p3.age, "anni")

console.log("---------------------------------")

console.log(p1.confronta(p1, p2))
console.log(p1.confronta(p2, p3))
console.log(p1.confronta(p3, p1))

/*
ESERCIZIO 01

Il tuo compito è creare una classe per gestire il contenuto paginato in un sito web. La paginazione viene
utilizzata per dividere lunghi elenchi di contenuti in una serie di pagine. La classe di paginazione accetterà 2
parametri:
items (default: []): un array di contenuti da impaginare.
pageSize (default: 10): la quantità di elementi da mostrare in ogni pagina.
*/















// [
//     {id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A'},
//     {id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A'},
//     {id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A'},
//     {id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A'},
//     {id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A'},
//     {id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A'},
//     {id: 7, nome: 'Gianno', cognome: 'Bianchi', classe: 'A'},
//     {id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A'},
// ]