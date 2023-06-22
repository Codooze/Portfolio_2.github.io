const cardsData = [
  {
    imgSrc: 'assets/cardImgs/Snapshoot Portfolio.png',
    title: 'Tonic',
    projectType: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    languages: ['JavaScript', 'HTML', 'CSS', 'Ruby', 'Bootstrap'],
  },
  {
    imgSrc: 'assets/cardImgs/Snapshoot Portfolio-1.png',
    title: 'Multi-Post Stories',
    projectType: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    languages: ['JavaScript', 'HTML', 'CSS', 'Ruby', 'Bootstrap'],
  },
  {
    imgSrc: 'assets/cardImgs/Snapshoot Portfolio-2.png',
    title: 'Tonic',
    projectType: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    languages: ['JavaScript', 'HTML', 'CSS', 'Ruby', 'Bootstrap'],
  },
  {
    imgSrc: 'assets/cardImgs/Snapshoot Portfolio-3.png',
    title: 'Multi-Post Stories',
    projectType: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    languages: ['JavaScript', 'HTML', 'CSS', 'Ruby', 'Bootstrap'],
  },
];

//   Get the container element
const worksContainer = document.getElementById('works_container');

// Loop through the cards data and create the HTML for each card
cardsData.forEach((cardData) => {
  // Create the HTML for the card
  const cardHtml = `
    <div class='cards'>
      <div class='card_img_container'>
        <img src='${cardData.imgSrc}' alt='Project preview image'>
      </div>
      <div class='card_description_container'>
        <h3>${cardData.title}</h3>
        <div class='card_projectType_container'>
          <p class='canopy'>CANOPY</p>
          <div>●</div>
          <p class='project_type'>${cardData.projectType}</p>
          <div>●</div>
          <p class='project_year'>${cardData.year}</p>
        </div>
        <p class='card_description'>${cardData.description}</p>
        <ul class='card_languages'>
          ${cardData.languages.slice(0, 3).map((language) => `<li>${language}</li>`).join('')}
        </ul>
        <button class='card_btn'>See project</button>
      </div>
    </div>
  `;

  // Append the card HTML to the works container
  worksContainer.innerHTML += cardHtml;
});

// Get the button elements
const buttons = document.querySelectorAll('.card_btn');

// validation logic for contact form
const form = document.getElementById('contact_form_container');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Load form data from local storage if available
const formData = JSON.parse(localStorage.getItem('formData')) || {};
nameInput.value = formData.name || '';
emailInput.value = formData.email || '';
messageInput.value = formData.message || '';

const saveFormData = () => {
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  const formData = { name, email, message };
  localStorage.setItem('formData', JSON.stringify(formData));
};

// Save form data to local storage on each keystroke
nameInput.addEventListener('input', saveFormData);
emailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);

const validateEmail = () => {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;
  const lowercaseEmail = emailValue.toLowerCase();

  if (emailValue !== lowercaseEmail) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = 'The email must be in all lowercase letters.';
    return false;
  }

  // Email is valid, submit the form or perform other actions
  return true;
};

// Add event listeners to the button elements
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Get the card data for the clicked button
    const cardData = cardsData[index];

    // the button with index 5 is the contact button
    if (index === 5) {
      // submit contact form
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateEmail()) {
          form.submit();
        }
        else return false;
      });
      return false;
    }

    // Modal logic
    // Create the modal element
    const modal = document.createElement('dialog');
    modal.classList.add('modal_container');

    // Create the HTML for the modal
    const modalHtml = `
      <div class='modal_content'>
      <div class='modal_title_container'>
        <h3>${cardData.title}</h3>
        <img class='close_menu' src='assets/Enabled_X.svg' alt='menu x' />
      </div>
        <div class='card_projectType_container'>
          <p class='canopy'>CANOPY</p>
          <div>●</div>
          <p class='project_type'>${cardData.projectType}</p>
          <div>●</div>
          <p class='project_year'>${cardData.year}</p>
        </div>
        <div class='card_img_container'>
          <img src='${cardData.imgSrc}' alt='Project preview image'>
        </div>
        <div class='card_description_container'>
          <p class='card_description'>${cardData.longDescription.replace(/\n/g, '<br>')}</p>
          <div class='leftSide_container'>
            <ul class='card_languages'>
              ${cardData.languages.map((language) => `<li>${language}</li>`).join('')}
            </ul>
            <hr/>
            <div class='card_btn_container'>
              <button class='card_btn'><p>See live</p> <img src='assets/seeLive.svg'/></button>
              <button class='card_btn'><p>See source</p> <img src='assets/GitHub.svg'</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Set the modal HTML
    modal.innerHTML = modalHtml;

    // Append the modal to the body
    document.body.appendChild(modal);

    // Show the modal
    modal.showModal();

    // Get the close button element
    const closeButton = modal.querySelector('.close_menu');

    // Add event listener to the close button element
    closeButton.addEventListener('click', () => {
      // close the modal
      modal.remove();
    });
    return true;
  });
});