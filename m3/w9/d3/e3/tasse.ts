abstract class Lavoratori {                                                 // definisco la classe "Lavoratori" come astratta;
    codredd: number;                                                        // definisco la proprietà;
    tasseinps: number;                                                      // definisco la proprietà;
    tasseirpef: number;                                                     // definisco la proprietà;
    redditoannuolordo: number;                                              // definisco la proprietà.

    constructor(                                                            // definisco il costruttore della classe che referenzia le varie proprietà;
        _codredd: number,                                                   
        _tasseinps: number,                                                 
        _tasseirpef: number,                                                
        _redditoannuolordo: number,                                         
    ) {
        this.codredd = _codredd;                                            
        this.tasseinps = _tasseinps;                                        
        this.tasseirpef = _tasseirpef;                                      
        this.redditoannuolordo = _redditoannuolordo;                        
    }

    getUtileTasse(): number {                                                                       // implemento il metodo "getUtileTasse";
        let calcolo01 = this.redditoannuolordo * this.codredd / 100;                                // calcolo;
        return calcolo01;                                                                           // risultato.
    }

    getTasseInps(): number {                                                                        // implemento il metodo "getTasseInps";
        let calcolo02 = this.getUtileTasse() * this.tasseinps / 100;                                // calcolo;
        return calcolo02;                                                                           // risultato.
    }

    getTasseIrpef(): number {                                                                       // implemento il metodo "getTasseIrpef";
        let calcolo03 = this.getUtileTasse() * this.tasseirpef / 100;                               // calcolo;
        return calcolo03;                                                                           // risultato.
    }

    getRedditoAnnuoNetto(): number {                                                                // implemento il metodo "getRedditoAnnuoNetto";
        let calcolo04 = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());      // calcolo;
        return calcolo04;                                                                           // risultato.
    }
}

class Professionista extends Lavoratori {                                   // definisco la classe "Professionista" che estende la classe "Lavoratori"
    constructor(_redditoannuolordo: number) {                               // definisco il costruttore che referenzia la proprietà "_redditoannuolordo";
        super(78, 25.72, 5, _redditoannuolordo);                            // invoco le proprietà del costruttore base con l'ausilio della keyword super(), essendo questo una classe derivata;
    }
}

let newProfessionista = new Professionista(50000);
console.log('\n' + '\n' + 'Professionista' + '\n');
console.log('Reddito annuo lordo del professionista: 50000 €');
console.log('Tasse Utili:', newProfessionista.getUtileTasse(), '€');
console.log('Tasse Inps:', newProfessionista.getTasseInps(), '€');
console.log('Tasse Irpef:', newProfessionista.getTasseIrpef(), '€');
console.log('Reddito annuo netto del professionista:', newProfessionista.getRedditoAnnuoNetto(), '€' + '\n'+ '\n');

class Artigiano extends Lavoratori {                                        // definisco la classe "Artigiano" che estende la classe "Lavoratori"
    constructor(_redditoannuolordo: number) {                               // definisco il costruttore che referenzia la proprietà "_redditoannuolordo";
        super(67, 15, 35, _redditoannuolordo);                              // invoco le proprietà del costruttore base con l'ausilio della keyword super(), essendo questo una classe derivata;
    }
}

let newArtigiano = new Artigiano(30000);
console.log('Artigiano' + '\n');
console.log('Reddito annuo lordo dell\'artigiano: 30000 €');
console.log('Tasse Utili:', newArtigiano.getUtileTasse(), '€');
console.log('Tasse Inps:', newArtigiano.getTasseInps(), '€');
console.log('Tasse Irpef:', newArtigiano.getTasseIrpef(), '€');
console.log('Reddito annuo netto dell\'artigiano:', newArtigiano.getRedditoAnnuoNetto(), '€' + '\n'+ '\n');

class Commerciante extends Lavoratori {                                     // definisco la classe "Commerciante" che estende la classe "Lavoratori"
    constructor(_redditoannuolordo: number) {                               // definisco il costruttore che referenzia la proprietà "_redditoannuolordo";
        super(40, 15, 35, _redditoannuolordo);                              // invoco le proprietà del costruttore base con l'ausilio della keyword super(), essendo questo una classe derivata;
    }
}

let newCommerciante = new Commerciante(40000);
console.log('Commerciante' + '\n');
console.log('Reddito annuo lordo del commerciante: 40000 €');
console.log('Tasse Utili:', newCommerciante.getUtileTasse(), '€');
console.log('Tasse Inps:', newCommerciante.getTasseInps(), '€');
console.log('Tasse Irpef:', newCommerciante.getTasseIrpef(), '€');
console.log('Reddito annuo netto del commerciante:', newCommerciante.getRedditoAnnuoNetto(), '€');

//-----------------------------------------------------------------------------------------------------------------------------------------------------------