class SonAccount {                                                              //definizione della prima classe "SonAccount"
    saldo: number = 0;
    versamento: number = 0;
    prelievo: number = 0;

    oneDeposit(): number {
        return this.saldo += this.versamento;
    }

    oneWithDraw(): number {
        return this.saldo -= this.prelievo;
    }
}

let contoUno = new SonAccount;
contoUno.versamento = 100
contoUno.prelievo = 20

console.log('-------------------------------')
console.log('----------CONTO SON------------')
console.log('-------------------------------')
console.log('Il saldo attuale è di:', contoUno.saldo);
contoUno.oneDeposit();
console.log('Hai versato:', contoUno.versamento);
console.log('Il saldo attuale è di:', contoUno.saldo);
contoUno.oneWithDraw();
console.log('Hai prelevato:', contoUno.prelievo);
console.log('Il saldo attuale è di:', contoUno.saldo);

class MotherAccount extends SonAccount {
    interesse: number = 10 / 100

    addInterest(): number {
        return this.saldo = this.saldo + (this.saldo * this.interesse);
    }
}

let contoDue = new MotherAccount;
contoDue.versamento = 200
contoDue.prelievo = 30
console.log('-------------------------------')
console.log('---------CONTO MOTHER----------')
console.log('-------------------------------')
console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.oneDeposit();
console.log('Hai versato:', contoDue.versamento);
console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.oneWithDraw();
console.log('Hai prelevato:', contoDue.prelievo);
console.log('Il saldo attuale è di:', contoDue.saldo);
contoDue.addInterest();
console.log('Il tuo saldo corrente con interesse è di:', contoDue.saldo);































let btn_figlio = document.getElementById("btn_figlio")

btn_figlio.addEventListener("click", compila_figlio);

function compila_figlio() {
    document.getElementById("page_madre").innerHTML = ``
    document.getElementById("page_figlio").innerHTML = `  <h5>ACCOUNT FIGLIO</h5>
                                                        <br>
                                                        <p>Il saldo attuale del suo conto è di: <b>${contoUno.saldo}.00 €</b></p>
                                                        `;
}

let btn_madre = document.getElementById("btn_madre")

btn_madre.addEventListener("click", compila_madre);

function compila_madre() {
    document.getElementById("page_figlio").innerHTML = ``
    document.getElementById("page_madre").innerHTML = `  <h5>ACCOUNT MADRE</h5>
                                                        <br>
                                                        <p>Il saldo attuale del suo conto è di: <b>${contoDue.saldo}.00 €</b></p>
                                                        `;
}







