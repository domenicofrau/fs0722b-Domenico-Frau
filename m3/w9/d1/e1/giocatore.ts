let risultato: number = Math.floor((Math.random() * 100) + 1);
let giocatore1: number = Math.floor((Math.random() * 100) + 1);
let giocatore2: number = Math.floor((Math.random() * 100) + 1);
let comparazione1: number;
let comparazione2: number;

console.log('----------------------------------')
console.log('Nuomero estratto:', risultato);
console.log('----------------------------------')
console.log('Nuomero giocatore 1:', giocatore1);
console.log('Nuomero giocatore 2 :', giocatore2);
console.log('----------------------------------')

if (giocatore1 == risultato) {
    console.log('Il giocatore 1 ha vinto');
}
if (giocatore2 == risultato) {
    console.log('Il giocatore 2 ha vinto');
}

if (giocatore1 != risultato && giocatore2 != risultato) {
    if (giocatore1 < risultato) {
        comparazione1 = risultato - giocatore1; 
    }
    else {
        comparazione1 = giocatore1 - risultato;
    }
    if (giocatore2 < risultato) {
        comparazione2 = risultato - giocatore2; 
    }
    else {
        comparazione2 = giocatore2 - risultato;
    }
    if (comparazione1 < comparazione2) {
        console.log('Nessuno dei due giocatori ha indovinato, ma il giocatore 1 si è avvicinato di più');
    }
    else {
        console.log('Nessuno dei due giocatori ha indovinato, ma il giocatore 2 si è avvicinato di più');
    }
}






