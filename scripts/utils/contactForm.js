import {  } from '../utils/formValidation.js';

const main = document.getElementById('main');
const modal = document.getElementById('contact-modal');
const h2 = document.getElementById('form-title');

export function displayModal(data) {
  const contactButton = document.getElementById('modal-button');
  h2.innerHTML = 'Contactez-moi <br>' + data.name;

  contactButton.addEventListener('click', function () {
    main.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'block';
    main.style.display = 'none';
  });
}

export function closeModal() {
  const closeButton = document.getElementById('close-btn');
  closeButton.addEventListener('click', function () {
    main.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    main.style.display = 'block';
  });
}
closeModal();
