/* 
    ESERCIZIO 01

    SessionStorage creare un contatore che tiene conto del tempo che passa. Aggiornando la pagina il valore 
    prosegue, chiudendo la pagina - ovviamente - ricomincia.
*/

const SECONDI = document.getElementById("secondi")            // dichiaro la costante "SECONDI" uguale all'elemento nell'html con ID "secondi" 
let cronometro = sessionStorage.getItem("secondi")

setInterval(() => {
    if (!secondi) {
        sessionStorage.setItem("secondi", 0)
    } else {
        cronometro++
        sessionStorage.setItem("secondi", cronometro)
    }
    secondi.innerHTML = cronometro
}, 1000)

function reset() {
    cronometro = 0
    sessionStorage.setItem("secondi", cronometro)
}






















