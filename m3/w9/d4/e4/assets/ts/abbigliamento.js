// ------------------------------------------------------- DEFINIZIONE DELLA CLASSE
var Articoli = /** @class */ (function () {
    // ------------------------------------------------------- DEFINIZIONE DEL COSTRUTTORE
    function Articoli(// definisco il costruttore;
    _id, // assegno il parametro;
    _codprod, // assegno il parametro;
    _collezione, // assegno il parametro;
    _capo, // assegno il parametro;
    _modello, // assegno il parametro;
    _quantita, // assegno il parametro;
    _colore, // assegno il parametro;
    _prezzoivaesclusa, // assegno il parametro;
    _prezzoivainclusa, // assegno il parametro;
    _disponibile, // assegno il parametro;
    _saldo // assegno il parametro;
    ) {
        this.id = _id; // attribuisco alla proprietà il parametro corrispondente;
        this.codprod = _codprod; // attribuisco alla proprietà il parametro corrispondente;
        this.collezione = _collezione; // attribuisco alla proprietà il parametro corrispondente;
        this.capo = _capo; // attribuisco alla proprietà il parametro corrispondente;
        this.modello = _modello; // attribuisco alla proprietà il parametro corrispondente;
        this.quantita = _quantita; // attribuisco alla proprietà il parametro corrispondente;
        this.colore = _colore; // attribuisco alla proprietà il parametro corrispondente;
        this.prezzoivaesclusa = _prezzoivaesclusa; // attribuisco alla proprietà il parametro corrispondente;
        this.prezzoivainclusa = _prezzoivainclusa; // attribuisco alla proprietà il parametro corrispondente;
        this.disponibile = _disponibile; // attribuisco alla proprietà il parametro corrispondente;
        this.saldo = _saldo; // attribuisco alla proprietà il parametro corrispondente.
    }
    // ------------------------------------------------------- DEFINIZIONE DEL PRIMO METODO
    Articoli.prototype.getSaldoCapo = function () {
        return (this.prezzoivainclusa * this.saldo) / 100; // calcolo lo sconto da applicare sul totale.
    };
    // ------------------------------------------------------- DEFINIZIONE DEL SECONDO METODO
    Articoli.prototype.getAcquistocapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo(); // calcolo il totale dell'articolo applicando lo sconto.
    };
    return Articoli;
}());
var products; // definisco la variabile a cui passo la classe sotto forma di array
// ------------------------------------------------------- DEFINIZIONE DELLA FUNZIONE
function getData() {
    fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f").then(function (response) {
        return response.json();
    }).then(function (data) {
        products = data;
        products.map(function (e) {
            var capo = new Articoli(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
            console.log("".concat(capo.capo), capo);
            console.log("totale capo: \u20AC ".concat(capo.getAcquistocapo()));
        });
        console.log(products); // stampo tutti i prodotti 
    });
}
getData(); // avvio la funzione
