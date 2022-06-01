import { displayModalConfirmation} from './confirmationModal.js'

// DOM form elements
let form = document.getElementById('contact-form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/


// Check firstname and lastname inputs
function checkNames(elt, regex) {
  if (elt.value.trim().length < 2 || elt.value.trim() === "" || !elt.value.match(regex)) {
    elt.parentElement.setAttribute('data-error-visible', 'true');
    elt.style.border = '2px solid #e54858';
    return false;
  } else {
    elt.parentElement.setAttribute('data-error-visible', 'false');
    elt.style.border = 'solid #279e7a 0.19rem';
    return true;
  }
}

// Check email input
function checkEmail(elt) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (elt.value.trim().match(re)) {
    elt.parentElement.setAttribute('data-error-visible', 'false');
    elt.style.border = 'solid #279e7a 0.19rem';
    return true;
  } else {
    elt.parentElement.setAttribute('data-error-visible', 'true');
    elt.style.border = '2px solid #e54858';
    return false;
  }
}

//Check message input
function  checkMessage(elt) {
  if (elt.value.trim() === '' || elt.value.trim() === null) {
    elt.parentElement.setAttribute('data-error-visible', 'true');
    elt.style.border = '2px solid #e54858';
    return false;
  } else {
    elt.parentElement.setAttribute('data-error-visible', 'false');
    elt.style.border = 'solid #279e7a 0.19rem';
    return true;
  }
}

//Check all validity inputs
function errorVerification(firstName, lastName, email, message, regex) {
  checkNames(firstName, regex);
  checkNames(lastName, regex);
  checkEmail(email);
  checkMessage(message);
}

//Display user inputs
function consoleMessageValid(firstName, lastName, email, message) {
  console.group('Contact Message');
  console.log('Prénom : ' + firstName.value);
  console.log('Nom : ' + lastName.value);
  console.log('Email : ' + email.value);
  console.log('Message : ' + message.value);
  console.groupEnd();
}

//Send contact form
function submitForm() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = checkNames(firstName, regex) && checkNames(lastName, regex) && checkEmail(email) && checkMessage(message);

    if (isValid) {
      firstName.style.border = 'none';
      lastName.style.border = 'none';
      email.style.border = 'none';
      message.style.border = 'none';
      consoleMessageValid(firstName, lastName, email, message);
      displayModalConfirmation()
      document.getElementById('contact-form').reset();
    } else {
      errorVerification(firstName, lastName, email, message, regex);
    }
  });
}

submitForm()