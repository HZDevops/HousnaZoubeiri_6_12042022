// DOM elements of submit confirmation modal
const main = document.getElementById('main')
const ContactModal = document.getElementById('contact-modal')
const modalSubmitConfirmation = document.querySelector('.modal-confirmation')
const closeBtnSubmitConfirmation = document.getElementById(
  'close-btn-confirmation'
);

modalSubmitConfirmation.style.display="none"

// Display modal confirmation
export function displayModalConfirmation() {
  ContactModal.style.display = 'none';
  main.style.display = 'none';
  modalSubmitConfirmation.style.display = 'block';
  modalSubmitConfirmation.style.position = 'absolute';
  modalSubmitConfirmation.style.top = '100px';
}

// Close modal confirmation
export function closeModalConfirmation() {
  modalSubmitConfirmation.style.display = 'none';
  main.style.display = 'block';
}

// Event closing modal confirmation
closeBtnSubmitConfirmation.addEventListener('click', closeModalConfirmation);
