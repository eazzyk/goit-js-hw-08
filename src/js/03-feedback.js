import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const formEmail = document.querySelector('input');
const formMessage = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
const formInput = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (formInput) {
  formEmail.value = formInput.email;
  formMessage.value = formInput.message;
}

feedbackForm.addEventListener('input', throttle(onInput), 500);
feedbackForm.addEventListener('submit', onSubmit);

function onInput(event) {
  event.preventDefault();
  const inputData = {
    email: formEmail.value,
    message: formMessage.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
}

function onSubmit(event) {
  event.preventDefault();

  const saveReload = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (feedbackForm.email.value && feedbackForm.message.value) {
    const { email, message } = saveReload;
    formEmail.value = email;
    formMessage.value = message;
    console.log(saveReload);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    alert('(х) Заповніть поля!');
  }
}
