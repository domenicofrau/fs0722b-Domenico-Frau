var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratori = /** @class */ (function () {
    function Lavoratori(// definisco il costruttore della classe che referenzia le varie proprietà;
    _codredd, //
    _tasseinps, //
    _tasseirpef, //
    _redditoannuolordo) {
        this.codredd = _codredd; //
        this.tasseinps = _tasseinps; //
        this.tasseirpef = _tasseirpef; //
        this.redditoannuolordo = _redditoannuolordo; //
    }
    Lavoratori.prototype.getUtileTasse = function () {
        var calcolo01 = this.redditoannuolordo * this.codredd / 100; // calcolo;
        return calcolo01; // risultato.
    };
    Lavoratori.prototype.getTasseInps = function () {
        var calcolo02 = this.getUtileTasse() * this.tasseinps / 100; // calcolo;
        return calcolo02; // risultato.
    };
    Lavoratori.prototype.getTasseIrpef = function () {
        var calcolo03 = this.getUtileTasse() * this.tasseirpef / 100; // calcolo;
        return calcolo03; // risultato.
    };
    Lavoratori.prototype.getRedditoAnnuoNetto = function () {
        var calcolo04 = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef()); // calcolo;
        return calcolo04; // risultato.
    };
    return Lavoratori;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_redditoannuolordo) {
        return _super.call(this, 78, 25.72, 5, _redditoannuolordo) || this;
    }
    return Professionista;
}(Lavoratori));
var newProfessionista = new Professionista(50000);
console.log('\n' + '\n' + 'Professionista' + '\n');
console.log('Reddito annuo lordo del professionista: 50000 €');
console.log('Tasse Utili:', newProfessionista.getUtileTasse(), '€');
console.log('Tasse Inps:', newProfessionista.getTasseInps(), '€');
console.log('Tasse Irpef:', newProfessionista.getTasseIrpef(), '€');
console.log('Reddito annuo netto del professionista:', newProfessionista.getRedditoAnnuoNetto(), '€' + '\n' + '\n');
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_redditoannuolordo) {
        return _super.call(this, 67, 15, 35, _redditoannuolordo) || this;
    }
    return Artigiano;
}(Lavoratori));
var newArtigiano = new Artigiano(30000);
console.log('Artigiano' + '\n');
console.log('Reddito annuo lordo dell\'artigiano: 30000 €');
console.log('Tasse Utili:', newArtigiano.getUtileTasse(), '€');
console.log('Tasse Inps:', newArtigiano.getTasseInps(), '€');
console.log('Tasse Irpef:', newArtigiano.getTasseIrpef(), '€');
console.log('Reddito annuo netto dell\'artigiano:', newArtigiano.getRedditoAnnuoNetto(), '€' + '\n' + '\n');
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_redditoannuolordo) {
        return _super.call(this, 40, 15, 35, _redditoannuolordo) || this;
    }
    return Commerciante;
}(Lavoratori));
var newCommerciante = new Commerciante(40000);
console.log('Commerciante' + '\n');
console.log('Reddito annuo lordo del commerciante: 40000 €');
console.log('Tasse Utili:', newCommerciante.getUtileTasse(), '€');
console.log('Tasse Inps:', newCommerciante.getTasseInps(), '€');
console.log('Tasse Irpef:', newCommerciante.getTasseIrpef(), '€');
console.log('Reddito annuo netto del commerciante:', newCommerciante.getRedditoAnnuoNetto(), '€');
