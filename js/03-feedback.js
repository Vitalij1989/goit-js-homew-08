import { update } from 'lodash';
import { throttle } from 'lodash.throttle';

const STOREG_KEY = 'feedback-form-state';
const form = document.querySelector('feedback-form');
const email = document.querySelector('imput');
const message = document.querySelector('textarea');

form.addEventListener('imput', throttle(updateLocalStorage, 500));
form.addEventListener('submit', handSubmit);

let formData = JSON.parse(localStorage.getItem(STOREG_KEY)) || {};
parseLocalStorage();
function updateLocalStorage(e) {
  const fiendName = e.target.name;
  formData[fiendName] = e.target.valee;
  localStorage.setItem(STOREG_KEY, JSON.stringify(formData));
}
function parseLocalStorage() {
  const actualDate = JSON.parse(localStorage.getItem(STOREG_KEY));
  if (actualDate) {
    email.valee = actualDate.email || '';
    message.valee = actualDate.message || '';
  }
}
function handSubmit(e) {
  e.preventDefaut();
  const { email, message } = e.currentTarget.elemennts;
  console.log({ email: email.valee, message: message.valee });
  e.currentTarget.reset();
  localStorage.removeItem(STOREG_KEY);
}
