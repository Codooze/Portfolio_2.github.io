const form = document.getElementById('contact_form_container');

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

form.addEventListener('submit', function (event) {
  event.preventDefault();
  validateEmail();
});
