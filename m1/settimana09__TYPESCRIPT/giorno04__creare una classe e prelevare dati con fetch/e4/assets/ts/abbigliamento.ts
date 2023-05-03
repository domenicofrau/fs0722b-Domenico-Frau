                                                                // ------------------------------------------------------- DEFINIZIONE DELLA CLASSE
class Articoli {                                                // definisco la classe;
    id: number;                                                 // definisco la proprietà (proveniente dal json);
    codprod: number;                                            // definisco la proprietà (proveniente dal json);
    collezione: string;                                         // definisco la proprietà (proveniente dal json);
    capo: string;                                               // definisco la proprietà (proveniente dal json);
    modello: number;                                            // definisco la proprietà (proveniente dal json);
    quantita: number;                                           // definisco la proprietà (proveniente dal json);
    colore: number;                                             // definisco la proprietà (proveniente dal json);
    prezzoivaesclusa: number;                                   // definisco la proprietà (proveniente dal json);
    prezzoivainclusa: number;                                   // definisco la proprietà (proveniente dal json);
    disponibile: string;                                        // definisco la proprietà (proveniente dal json);
    saldo: number;                                              // definisco la proprietà (proveniente dal json).

                                                                // ------------------------------------------------------- DEFINIZIONE DEL COSTRUTTORE
    constructor(                                                // definisco il costruttore;
        _id: number,                                            // assegno il parametro;
        _codprod: number,                                       // assegno il parametro;
        _collezione: string,                                    // assegno il parametro;
        _capo: string,                                          // assegno il parametro;
        _modello: number,                                       // assegno il parametro;
        _quantita: number,                                      // assegno il parametro;
        _colore: number,                                        // assegno il parametro;
        _prezzoivaesclusa: number,                              // assegno il parametro;
        _prezzoivainclusa: number,                              // assegno il parametro;
        _disponibile: string,                                   // assegno il parametro;
        _saldo: number                                          // assegno il parametro;
    ) {
        this.id = _id;                                          // attribuisco alla proprietà il parametro corrispondente;
        this.codprod = _codprod;                                // attribuisco alla proprietà il parametro corrispondente;
        this.collezione = _collezione;                          // attribuisco alla proprietà il parametro corrispondente;
        this.capo = _capo;                                      // attribuisco alla proprietà il parametro corrispondente;
        this.modello = _modello;                                // attribuisco alla proprietà il parametro corrispondente;
        this.quantita = _quantita;                              // attribuisco alla proprietà il parametro corrispondente;
        this.colore = _colore;                                  // attribuisco alla proprietà il parametro corrispondente;
        this.prezzoivaesclusa = _prezzoivaesclusa;              // attribuisco alla proprietà il parametro corrispondente;
        this.prezzoivainclusa = _prezzoivainclusa;              // attribuisco alla proprietà il parametro corrispondente;
        this.disponibile = _disponibile;                        // attribuisco alla proprietà il parametro corrispondente;
        this.saldo = _saldo;                                    // attribuisco alla proprietà il parametro corrispondente.
    }
                                                                // ------------------------------------------------------- DEFINIZIONE DEL PRIMO METODO
    getSaldoCapo(): number {                                    // definisco il metodo;
        return (this.prezzoivainclusa * this.saldo) / 100;      // calcolo lo sconto da applicare sul totale.
    }
                                                                // ------------------------------------------------------- DEFINIZIONE DEL SECONDO METODO
    getAcquistocapo(): number {                                 // definisco il metodo;
        return this.prezzoivainclusa - this.getSaldoCapo();     // calcolo il totale dell'articolo applicando lo sconto.
    }
}



let products: Articoli[];                                       // definisco la variabile a cui passo la classe sotto forma di array
                                                                // ------------------------------------------------------- DEFINIZIONE DELLA FUNZIONE
function getData(): void {
    fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f").then((response) => {
        return response.json();
    }).then((data) => {
        products = data;

        products.map(function (e) {                                 // richiamo la funzione per ogni elemento dell'array definito con l'ausilio del metodo .map.
            let capo = new Articoli(                                // attribuisco alla variabile un nuovo oggetto;
                e.id,                                               // assegno la proprietà;
                e.codprod,                                          // assegno la proprietà;
                e.collezione,                                       // assegno la proprietà;
                e.capo,                                             // assegno la proprietà;
                e.modello,                                          // assegno la proprietà;
                e.quantita,                                         // assegno la proprietà;
                e.colore,                                           // assegno la proprietà;
                e.prezzoivaesclusa,                                 // assegno la proprietà;
                e.prezzoivainclusa,                                 // assegno la proprietà;
                e.disponibile,                                      // assegno la proprietà;
                e.saldo);                                           // assegno la proprietà;

            console.log(`${capo.capo}`, capo);                      // stampo il nome del capo
            console.log(`totale capo: € ${capo.getAcquistocapo()}`) // stampo il totale
        });
        console.log(products);                                      // stampo tutti i prodotti 
    });
}

getData();                                                          // avvio la funzione