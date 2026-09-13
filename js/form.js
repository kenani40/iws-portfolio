
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formStatus = document.getElementById('form-status');

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(input, errorEl, message) {
  input.classList.add('invalid');
  input.setAttribute('aria-invalid', 'true');
  errorEl.textContent = message;
}

function clearError(input, errorEl) {
  input.classList.remove('invalid');
  input.removeAttribute('aria-invalid');
  errorEl.textContent = '';
}

function validateName() {
  const errorEl = document.getElementById('name-error');
  if (nameInput.value.trim() === '') {
    setError(nameInput, errorEl, 'Please enter your name.');
    return false;
  }
  clearError(nameInput, errorEl);
  return true;
}

function validateEmail() {
  const errorEl = document.getElementById('email-error');
  const value = emailInput.value.trim();
  if (value === '') {
    setError(emailInput, errorEl, 'Please enter your email address.');
    return false;
  }
  if (!EMAIL_PATTERN.test(value)) {
    setError(emailInput, errorEl, 'Please enter a valid email address, e.g. name@example.com.');
    return false;
  }
  clearError(emailInput, errorEl);
  return true;
}

function validateMessage() {
  const errorEl = document.getElementById('message-error');
  if (messageInput.value.trim() === '') {
    setError(messageInput, errorEl, 'Please enter a message before sending.');
    return false;
  }
  if (messageInput.value.trim().length < 10) {
    setError(messageInput, errorEl, 'Your message is a bit short, please add a few more details.');
    return false;
  }
  clearError(messageInput, errorEl);
  return true;
}

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (!isNameValid || !isEmailValid || !isMessageValid) {
    formStatus.textContent = 'Please fix the errors above before sending.';
    formStatus.style.color = 'var(--error)';

    const firstInvalid = form.querySelector('.invalid');
    if (firstInvalid) {
      firstInvalid.focus();
    }
    return;
  }

  formStatus.textContent = "Your message has been sent!";
  formStatus.style.color = 'var(--accent)';
  form.reset();

  [nameInput, emailInput, messageInput].forEach((input) => {
    input.classList.remove('invalid');
    input.removeAttribute('aria-invalid');
  });
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('message-error').textContent = '';
});