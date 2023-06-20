import cardsData from "./cardData.js"


// // Get the container element
const worksContainer = document.getElementById("works_container");

// // Loop through the cards data and create the HTML for each card
// cardsData.forEach((cardData) => {
//     // Create the HTML for the card
//     const cardHtml = `
//         <div class="cards">
//             <div class="card_img_container">
//                 <img src="${cardData.imgSrc}" alt="Project preview image">
//             </div>
//             <div class="card_description_container">
//                 <h3>${cardData.title}</h3>
//                 <div class="card_projectType_container">
//                     <p class="canopy">CANOPY</p>
//                     <p class="project_type">${cardData.projectType}</p>
//                     <p class="project_year">${cardData.year}</p>
//                 </div>
//                 <p class="card_description">${cardData.description}</p>
//                 <ul class="card_languages">
//                     ${cardData.languages.map((language) => `<li>${language}</li>`).join("")}
//                 </ul>
//                 <button class="card_btn">See project</button>
//             </div>
//         </div>
//     `;

//     // Append the card HTML to the works container
//     worksContainer.innerHTML += cardHtml;
// });

// Loop through the cards data and create the HTML for each card
cardsData.forEach((cardData) => {
    // Create the HTML for the card
    const cardHtml = `
    <div class="cards">
      <div class="card_img_container">
        <img src="${cardData.imgSrc}" alt="Project preview image">
      </div>
      <div class="card_description_container">
        <h3>${cardData.title}</h3>
        <div class="card_projectType_container">
          <p class="canopy">CANOPY</p>
          <p class="project_type">${cardData.projectType}</p>
          <p class="project_year">${cardData.year}</p>
        </div>
        <p class="card_description">${cardData.description}</p>
        <ul class="card_languages">
          ${cardData.languages.map((language) => `<li>${language}</li>`).join("")}
        </ul>
        <button class="card_btn">See project</button>
      </div>
    </div>
  `;

    // Append the card HTML to the works container
    worksContainer.innerHTML += cardHtml;
});

// Get the button elements
const buttons = document.querySelectorAll(".card_btn");

// Add event listeners to the button elements
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Get the card data for the clicked button
        const cardData = cardsData[index];
        console.log(cardData);

        // Create the modal element
        const modal = document.createElement("dialog");
        modal.classList.add("modal_container");

        // Create the HTML for the modal
        const modalHtml = `
      <div class="modal_content">
        <h3>${cardData.title}</h3>
        <img class="close_menu" src="assets/mobile-menu-Icon-x.png" alt="menu x" />
        <div class="card_projectType_container">
          <p class="canopy">CANOPY</p>
          <p class="project_type">${cardData.projectType}</p>
          <p class="project_year">${cardData.year}</p>
        </div>
        <div class="card_img_container">
          <img src="${cardData.imgSrc}" alt="Project preview image">
        </div>
        <p class="card_description">${cardData.longDescription}</p>
        <ul class="card_languages">
          ${cardData.languages.map((language) => `<li>${language}</li>`).join("")}
        </ul>
        <button class="card_btn">See live</button>
        <button class="card_btn">See source</button>
      </div>
    `;

        // Set the modal HTML
        modal.innerHTML = modalHtml;

        // Append the modal to the body
        document.body.appendChild(modal);

        // Show the modal
        modal.showModal();
    });
});