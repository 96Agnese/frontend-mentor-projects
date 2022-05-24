//forEach con FAQ
// <button class="accordion">
// <div class="panel-toggle">
//   <div class="container-title_description">
//     <div class="container-title_icon">
//       <p class="container-title">How many team members can I invite?</p>
//       <img src="images/icon-arrow-down.svg" class="icon" />
//     </div>
//     <p class="container-text__description hidden-text">
//       You can invite up to 2 additional users on the Free plan. There is no limit on team
//       members for the Premium plan.
//     </p>
//   </div>
// </div>
// </button>
// <!-- 2 -->
// <button class="accordion">
// <div class="panel-toggle">
//   <div class="container-title_description">
//     <div class="container-title_icon">
//       <p class="container-title">What is the maximum file upload size?</p>
//       <img src="images/icon-arrow-down.svg" class="icon" />
//     </div>
//     <p class="container-text__description">
//       No more than 2GB. All files in your account must fit your allotted storage space.
//     </p>
//   </div>
// </div>
// </button>
// <!-- 3 -->
// <button class="accordion">
// <div class="panel-toggle">
//   <div class="container-title_description">
//     <div class="container-title_icon">
//       <p class="container-title">How do I reset my password?</p>
//       <img src="images/icon-arrow-down.svg" class="icon" />
//     </div>
//     <p class="container-text__description">
//       Click “Forgot password” from the login page or “Change password” from your profile
//       page. A reset link will be emailed to you.
//     </p>
//   </div>
// </div>
// </button>
// <!-- 4 -->
// <button class="accordion">
// <div class="panel-toggle">
//   <div class="container-title_description">
//     <div class="container-title_icon">
//       <p class="container-title">Can I cancel my subscription?</p>
//       <img src="images/icon-arrow-down.svg" class="icon" />
//     </div>
//     <p class="container-text__description">
//       Yes! Send us a message and we’ll process your request no questions asked.
//     </p>
//   </div>
// </div>
// </button>
// <!-- 5 -->
// <button class="accordion">
// <div class="panel-toggle">
//   <div class="container-title_description">
//     <div class="container-title_icon">
//       <p class="container-title">Do you provide additional support?</p>
//       <img src="images/icon-arrow-down.svg" class="icon" />
//     </div>
//     <p class="container-text__description">
//       Chat and email support is available 24/7. Phone lines are open during normal business
//       hours.
//     </p>
//   </div>
// </div>
// </button>
var FAQs = [
    {
        question: "How many team members can i invite?",
        text: " You can invite up to 2 additional users on the Free plan. There is no limit on team  members for the Premium plan."
    },
    {
        question: "What is the maximum file upload size?",
        text: "No more than 2GB. All files in your account must fit your allotted storage space.  "
    },
    {
        question: "How do I reset my password?",
        text: " Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.  "
    },
    {
        question: "Can I cancel my subscription?",
        text: "Yes! Send us a message and we’ll process your request no questions asked."
    },
    {
        question: "Do you provide additional support?",
        text: "  Chat and email support is available 24/7. Phone lines are open during normal business hours. "
    },
];
//
var container = document.querySelector(".container");
FAQs.forEach(function (el, index) {
    var button = document.createElement("button");
    button.classList.add("accordion");
    var panelToggle = document.createElement("div");
    panelToggle.classList.add("panel-toggle");
    var containerTitleDesc = document.createElement("div");
    containerTitleDesc.classList.add("container-title_description");
    var containerTitleIcon = document.createElement("div");
    containerTitleIcon.classList.add("container-title_icon");
    var containerTitleIconText = document.createElement("p");
    containerTitleIconText.classList.add("container-title", "bold-text");
    var containerTextDesc = document.createElement("p");
    containerTextDesc.classList.add("container-text__description");
    containerTextDesc.textContent = el.text;
    containerTitleIconText.textContent = el.question;
    containerTitleIcon.appendChild(containerTitleIconText);
    containerTitleDesc.appendChild(containerTitleIcon);
    containerTitleDesc.appendChild(containerTextDesc);
    panelToggle.appendChild(containerTitleDesc);
    button.appendChild(panelToggle);
    container.appendChild(button);
});
//
// METODO CON LA PRESELEZIONE DEI TESTI DA NASCONDERE -----> (a)
var containerTexts = document.querySelectorAll(".container-text__description");
// bold title
var containerTitles = document.querySelectorAll(".container-title");
var accordions = document.querySelectorAll(".accordion");
// METODO CON LA PRESELEZIONE DEI TESTI DA NASCONDERE ------> (b)
function togglePanel(index) {
    //   console.log(`hai cliccato ${index}`);
    // if (index >= ) {
    //  METODO CON I CHILDREN (SCONSIGLIATO)
    // const accordion = accordions[index];
    // const panelToggle = accordion.children[0];
    // const titleDescription = panelToggle.children[0];
    // const containerText = titleDescription.children[1] as HTMLParagraphElement;
    //1 perche accedo a container-title__description e al secondo ARRAY
    var paragraph = containerTexts[index];
    var title = containerTitles[index];
    console.log(title);
    // Se il paragrafo è visibile
    if (paragraph.style.display === "block") {
        // nascondimi il pagagrafo
        paragraph.style.display = "none";
        // e dammi il titolo a regular non bold
        title.style.fontWeight = "600";
    }
    else {
        //mostrami il pagagrafo
        paragraph.style.display = "block";
        // e il titolo mettilo in grassetto
        title.style.fontWeight = "bold";
    }
}
//accedo indice [0] di accordium
accordions.forEach(function (el, index) {
    el.addEventListener("click", function () { return togglePanel(index); });
});
