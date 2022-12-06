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

class Pagination {
    constructor(items = [], pageSize = 10) {
        this.items = items
        this.pageSize = Math.floor(pageSize)
        this.totalPages = Math.ceil(items.length / this.pageSize) || 1
        this.currentPage = 1
    }

    prevPage() {
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage
        return this
    }

    nextPage() {
        this.currentPage = (this.currentPage + 1 <= this.totalPages) ? this.currentPage + 1 : this.currentPage
        return this
    }

    firstPage() {
        this.currentPage = 1
        return this
    }

    lastPage() {
        this.currentPage = this.totalPages
        return this
    }

    goToPage(page) {
        if (Math.sign(page) === -1) {
            this.currentPage = 1
            return this
        } else {
            this.currentPage = page > this.totalPages ? this.totalPages : Math.floor(page)
            return this
        }
    }

    getVisibleItems() {
        const start = this.currentPage * this.pageSize - this.pageSize;
        const end = this.currentPage * this.pageSize;
        //return this.items.slice(start, end);
        const lista = this.items.slice(start, end);
        const wrapper = document.querySelector('#wrapper');
        let strHtml = '';
        lista.forEach((item) => {
            strHtml += `<tr><td>${item.id}</td><td>${item.nome}</td><td>${item.cognome}</td><td>${item.classe}</td></tr>`;
        });
        wrapper.innerHTML = strHtml;
    }
}

const users = [
    { id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A' },
    { id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A' },
    { id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A' },
    { id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A' },
    { id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A' },
    { id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A' },
    { id: 7, nome: 'Gianno', cognome: 'Bianchi', classe: 'A' },
    { id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A' },
];

p = new Pagination(users, 2);
p.getVisibleItems();
const primo = document.querySelector('#primo');
primo.addEventListener('click', function () {
    p.firstPage();
    p.getVisibleItems();
});
const ultimo = document.querySelector('#ultimo');
ultimo.addEventListener('click', function () {
    p.lastPage();
    p.getVisibleItems();
});
const precedente = document.querySelector('#precedente');
precedente.addEventListener('click', function () {
    p.prevPage();
    p.getVisibleItems();
});
const successivo = document.querySelector('#successivo');
successivo.addEventListener('click', function () {
    p.nextPage();
    p.getVisibleItems();
});