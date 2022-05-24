//forEach con FAQ
// const FAQs = [
//   {
//     question: "How many team members can i invite?",
//     text: " You can invite up to 2 additional users on the Free plan. There is no limit on team  members for the Premium plan.",
//   },
//   {
//     question: "What is the maximum file upload size?",
//     text: "No more than 2GB. All files in your account must fit your allotted storage space.  ",
//   },
// ];
// //
// const container = document.querySelector(".container");
// FAQs.forEach((el, index) => {
//   const button = document.createElement("button");
//   button.classList.add("accordion");
//   const panelToggle = document.createElement("div");
//   panelToggle.classList.add("panel-toggle");
//   const containerTitleDesc = document.createElement("div");
//   containerTitleDesc.classList.add("container-title_description");
//   const containerTitleIcon = document.createElement("div");
//   containerTitleIcon.classList.add("container-title_icon");
//   const containerTitleIconText = document.createElement("p");
//   containerTitleIconText.classList.add("container-title", "bold-text");
//   const containerTextDesc = document.createElement("p");
//   containerTextDesc.classList.add("container-text__description");
//   containerTextDesc.textContent = el.text;
//   containerTitleIconText.textContent = el.question;
//   containerTitleIcon.appendChild(containerTitleIconText);
//   containerTitleDesc.appendChild(containerTitleIcon);
//   containerTitleDesc.appendChild(containerTextDesc);
//   panelToggle.appendChild(containerTitleDesc);
//   button.appendChild(panelToggle);
//   container.appendChild(button);
// });
//
// METODO CON LA PRESELEZIONE DEI TESTI DA NASCONDERE -----> (a)
var containerTexts = document.querySelectorAll(".container-text__description");
var accordions = document.querySelectorAll(".accordion");
// METODO CON LA PRESELEZIONE DEI TESTI DA NASCONDERE ------> (b)
function togglePanel(index) {
    //   console.log(`hai cliccato ${index}`);
    // if (index >= ) {
    //  METODO CON I CHILDREN (SCONSIGLIATO)
    var accordion = accordions[index];
    var panelToggle = accordion.children[0];
    var titleDescription = panelToggle.children[0];
    var containerText = titleDescription.children[1];
    var paragraph = containerTexts[index];
    if (paragraph.style.display === "block") {
        paragraph.style.display = "none";
    }
    else {
        paragraph.style.display = "block";
    }
}
//accedo indice [0] di accordium
accordions.forEach(function (el, index) {
    el.addEventListener("click", function () { return togglePanel(index); });
});
