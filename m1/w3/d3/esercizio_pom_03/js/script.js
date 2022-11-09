
document.querySelector('#aggiungi').onclick = function () {
    let testo = document.querySelector('#input');
    if (document.querySelector('#nuovatask input').value.length == 0) {
        alert("Attenzione! Inserire un promemoria")
    }
    else {

        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                <i class="fa-regular fa-square check"></i>
                    ${document.querySelector('#nuovatask input').value}
                </span>
                <button class="cancella">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `
            ;
        testo.value = '';

        let promemoria = document.querySelectorAll(".cancella");
        for (let i = 0; i < promemoria.length; i++) {
            promemoria[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}