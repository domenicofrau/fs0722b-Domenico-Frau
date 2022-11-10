
document.querySelector('#aggiungi').onclick = function () {
    let testo = document.querySelector('#input');
    if (document.querySelector('input').value.length == 0) {
        alert("Attenzione! Inserire un promemoria")
    }
    else {

        document.querySelector('#tasks').innerHTML += 
            `
                <div class="task">
                    <span class="contenuto">
                        <i class="fa-regular fa-square check"></i>
                        ${document.querySelector('input').value}
                    </span>
                    <button class="cancella">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            `
            ;
            testo.value = '';

                let cancella = document.querySelectorAll("cancella");
                for (let i = 0; i < cancella.length; i++) {
                    cancella[i].onclick = function () {
                        this.parentNode.remove();
                    }
                }

                let sottolinea = document.querySelectorAll("check");
                for (let i = 0; i < sottolinea.length; i++) {
                    sottolinea[i].onclick = function () {
                        this.parentNode.remove();
                    }
                }
    }
}