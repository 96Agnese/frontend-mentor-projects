// PRENDIAMO GLI ELEMENTI DEL FORM DI INPUT QUINDI TUTTI
const inputElements = document.querySelectorAll<HTMLInputElement>(".form-container__input");

const formEl = document.querySelector<HTMLFormElement>(".form-container__form");

const newBackgroundColor = document.querySelector<HTMLElement>(".form-container__trial-info");

function changeBgColor(color: string) {
  newBackgroundColor.style.backgroundColor = color;
}

// const title = document.querySelector<HTMLHeadingElement>(".info__title");
// title.style.color = "red";

// TODO :  Al click resta fisso il colore e non cambia

newBackgroundColor.addEventListener("mouseover", () => changeBgColor("pink"));

// TODO : Al click cambia colore

newBackgroundColor.addEventListener("mouseleave", () => changeBgColor("black"));

formEl.addEventListener("submit", (event: Event) => {
  //previene il comportamento di default al caricamento della pagina
  event.preventDefault();

  // title.style.display = 'none';

  let inputsValidity: boolean[] = [];

  // TODO: CONTROLLARE IL VALORE DELL'INPUT CHE SCRIVO

  inputElements.forEach((el, index) => {
    // el.value;
    // console.log(el.value);
    if (el.type === "text" || el.type === "password") {
      if (el.value.length >= 3) {
        el.classList.remove("invalid");
        inputsValidity[index] = true;
      } else {
        // il valore del campo non è valido
        el.classList.add("invalid");
        inputsValidity[index] = false;
      }
    } else if (el.type === "email") {
      // @ts-ignore
      if (el.value.includes("@")) {
        inputsValidity[index] = true;
        el.classList.remove("invalid");
      } else {
        el.classList.add("invalid");
        inputsValidity[index] = false;
      }
    }
  });

  if (inputsValidity.every((el) => el === true)) {
    alert("HAI COMPLETATO!");
  } else {
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
