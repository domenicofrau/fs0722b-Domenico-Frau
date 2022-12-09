alert("ho modificato il valore di profileURL nel JSON per mantenere la mia organizzazione di file e cartelle nel progetto");

let cardUtente = document.getElementById("card-user");              // definisco la variabile cardUtente per agganciarmi all'html e per poter inniettare contenuto.

// PRIMO METODO
////--------------------------------------------------------------  // TRASFERIENTO DEI DATI JSON ALL'INTERNO DELL'HTML TRAMITE XMLHTTPREQUEST
//let requestURL = './assets/json/users.json';                      // definisco il percorso del file;
//let request = new XMLHttpRequest();                               // definisco la richiesta;
//request.open('GET', requestURL);                                  // apro la richiesta utilizzando il metodo GET;
//request.responseType = 'json';                                    // setto il tipo di risposta in json;
//request.send();                                                   // metodo send;
//request.onload = function () {                                    // sull'evento onload avvio una funzione anonima;
//    const datiJson = request.response;                            // la funzione crea una costante utenti che è uguale alla risposta della richiesta;
//    console.log(datiJson)                                         // i dati sono stati importati correttamente.
//}

// SECONDO METODO
//--------------------------------------------------------------    // TRASFERIENTO DEI DATI JSON ALL'INTERNO DELL'HTML TRAMITE FETCH
(async () => {                                                      // definisco e invoco una funzione asincrona anonima utilizzando la sintassi della funzione freccia (arrow function);
    const response = await fetch("assets/json/users.json");         // richiedo la risorsa (in questo caso in locale) con fetch. Utilizzo la keyword "await" per aspettare che la promise sia risolta. Facendo così ottengo un oggetto di tipo response;
    console.log(response);                                          // la richiesta è andata a buon fine, sotto forma di readableStream (flusso di byte);
    const datiJson = await response.json();                         // trasformo il flusso di byte in oggetto JS utilizzando il metodo json sull'oggetto response;
    console.log(datiJson);                                          // i dati sono stati importati correttamente;

    //----------------------------------------------------------    // COSTRUZIONE DELL'HTML
    let utenti = datiJson;                                          // definisco la variabile utenti utilizzando i dati provenienti dal file json (array);
    for (let i = 0; i < utenti.length; i++) {                       // avvio un ciclo tramite il quale costruisco una card (.innerHTML) per ogni utente presente all'interno dell'array;
        cardUtente.innerHTML += `                                   
            <div class="col-3 p-3">
                <div class="card border-secondary shadow-sm text-center">
                    <img src="${utenti[i].profileURL}" class="card-img-top w-25 bg-light rounded-circle mx-auto mt-3" alt="immagine profilo">
                    <div class="card-body">
                        <h3 class="card-title">${utenti[i].firstName} ${utenti[i].lastName}</h3>
                        <h5><a href="mailto:${utenti[i].email}" class="card-link text-warning text-decoration-none">${utenti[i].email}</a><h5>
                    </div>
                </div>
            </div>`
    }
})();                                                               // invoco la funzione.
