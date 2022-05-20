// PRENDIAMO GLI ELEMENTI DEL FORM DI INPUT QUINDI TUTTI
var inputElements = document.querySelectorAll(".form-container__input");
var formEl = document.querySelector(".form-container__form");
// TODO : Dinamic color
var title = document.querySelector(".info__title");
// title.style.color = "red";
formEl.addEventListener("submit", function (event) {
    //previene il comportamento di default al caricamento della pagina
    event.preventDefault();
    // title.style.display = 'none';
    var inputsValidity = [];
    // TODO: CONTROLLARE IL VALORE DELL'INPUT CHE SCRIVO
    inputElements.forEach(function (el, index) {
        // el.value;
        // console.log(el.value);
        if (el.type === "text" || el.type === "password") {
            if (el.value.length >= 3) {
                el.classList.remove("invalid");
                inputsValidity[index] = true;
            }
            else {
                // il valore del campo non è valido
                el.classList.add("invalid");
                inputsValidity[index] = false;
            }
        }
        else if (el.type === "email") {
            // @ts-ignore
            if (el.value.includes("@")) {
                inputsValidity[index] = true;
                el.classList.remove("invalid");
            }
            else {
                el.classList.add("invalid");
                inputsValidity[index] = false;
            }
        }
    });
    if (inputsValidity.every(function (el) { return el === true; })) {
        alert("HAI COMPLETATO!");
    }
    else {
        alert("NON HAI COMPLETATO!");
    }
});
// TODO --> Al click del testo scompare
// title.addEventListener("click", (event: Event) => {
//   title.style.display = "none";
// });
// const firstName = 'First Name';
// const surname = 'Last Name';
// if(firstName.length > 3) {
// }
