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
/*

Metodi:
oneDeposit:number // versamento
oneWithDraw // prelievo
twoDeposit:number // versamento
twoWithDraw // prelievo
addInterest// interesse MotherAccount 10%

*/
var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.saldo = 0;
        this.versamento = 0;
        this.prelievo = 0;
    }
    SonAccount.prototype.oneDeposit = function () {
        return this.saldo += this.versamento;
    };
    SonAccount.prototype.oneWithDraw = function () {
        return this.saldo -= this.prelievo;
    };
    return SonAccount;
}());
var contoUno = new SonAccount;
contoUno.versamento = 100;
contoUno.prelievo = 20;
console.log('-------------------------------');
console.log('----------CONTO SON------------');
console.log('-------------------------------');
console.log('Il saldo attuale è di:', contoUno.saldo);
contoUno.oneDeposit();
console.log('Hai versato:', contoUno.versamento);
console.log('Il saldo attuale è di:', contoUno.saldo);
contoUno.oneWithDraw();
console.log('Hai prelevato:', contoUno.prelievo);
console.log('Il saldo attuale è di:', contoUno.saldo);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interesse = 10 / 100;
        return _this;
    }
    MotherAccount.prototype.addInterest = function () {
        return this.saldo = this.saldo + (this.saldo * this.interesse);
    };
    return MotherAccount;
}(SonAccount));
var contoDue = new MotherAccount;
contoDue.versamento = 200;
contoDue.prelievo = 30;
console.log('-------------------------------');
console.log('---------CONTO MOTHER----------');
console.log('-------------------------------');
console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.oneDeposit();
console.log('Hai versato:', contoDue.versamento);
console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.oneWithDraw();
console.log('Hai prelevato:', contoDue.prelievo);
console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.addInterest();
console.log('Il tuo saldo corrente con interesse è di:', contoDue.saldo);
