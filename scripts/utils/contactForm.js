import {  } from '../utils/formValidation.js'

const contactButton = document.getElementById('modal-button')
const main = document.getElementById('main')
const modal = document.getElementById('contact-modal')
const closeButton = document.getElementById('close-btn')
const h2 = document.getElementById('form-title')

// Launch modal contact form
export function displayModal(data) {
  h2.innerHTML = 'Contactez-moi <br>' + data.name

  contactButton.addEventListener('click', function () {
    main.setAttribute('aria-hidden', 'true')
    modal.setAttribute('aria-hidden', 'false')
    modal.style.display = 'block'
    main.style.display = 'none'
    closeButton.focus()
  })
    keyboardEvent();
}

// Close modal contact form
export function closeModal() {
   closeButton.addEventListener('click', function () {
    main.setAttribute('aria-hidden', 'false')
    modal.setAttribute('aria-hidden', 'true')
    modal.style.display = 'none'
    main.style.display = 'block'
    contactButton.focus()
  })
}

//Keyboard events for accessibility
function keyboardEvent() {
  document.addEventListener('keydown', (event) => {
     console.log('bonjour');
    // ESCAPE TO CLOSE
    if (event.code == 'Escape') {
      modal.style.display = 'none';
      main.style.display = 'block';
      contactButton.focus();
    }
  })
}
closeModal()
