// DOM elements of submit confirmation modal
const main = document.getElementById('main')
const modal = document.getElementById('contact-modal')
const modalSubmitConfirmation = document.querySelector('.modal-confirmation')
const closeBtnSubmitConfirmation = document.getElementById(
  'close-btn-confirmation'
)

modalSubmitConfirmation.style.display="none"

// Display modal confirmation
export function displayModalConfirmation() {
  modal.setAttribute('aria-hidden', 'true')
  main.setAttribute('aria-hidden', 'true')
  modal.style.display = 'none'
  main.style.display = 'none'
  modalSubmitConfirmation.style.display = 'block'
}

// Close modal confirmation
export function closeModalConfirmation() {
  modalSubmitConfirmation.style.display = 'none'
  main.style.display = 'block'
}

// Event closing modal confirmation
closeBtnSubmitConfirmation.addEventListener('click', closeModalConfirmation)
