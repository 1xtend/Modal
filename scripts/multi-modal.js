const modalButtons = document.querySelectorAll('.modal-btn');

let activeModal = null;

// * FunctionS

function findModalByTarget(elementWithTarget) {
  const targetModalId = elementWithTarget.dataset.target;

  return document.querySelector(`#${targetModalId}`);
}

function openModal(modalElem) {
  activeModal = modalElem;
  modalElem.classList.add('open');
}

function closeModal() {
  if (activeModal !== null) {
    activeModal.classList.remove('open');
    activeModal = null;
  }
}

function handleOpenModalButtonClick(e) {
  const targetModal = findModalByTarget(e.target);
  openModal(targetModal);
}

function handleCloseModalButtonClick(modal) {
  closeModal();
}

function handleBackdropElemClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function handleBackdropElemEscapeClick(e) {
  if (e.code === 'Escape' && activeModal !== null) {
    console.log('Escape pressed');
    closeModal();
  }
}

// * Пройтись по всіх кнопках і повісити addEventListener
modalButtons.forEach((modalButton) => {
  modalButton.addEventListener('click', handleOpenModalButtonClick);

  const modal = findModalByTarget(modalButton); //шукаємо модалку по data-target

  const closeBtn = modal.querySelector('.modal-close'); // шукаємо кнопку закриття в модалці

  closeBtn.addEventListener('click', handleCloseModalButtonClick); // обробляє клік по кнопці закриття
  modal.addEventListener('click', handleBackdropElemClick); // обробляє клік на backdrop
  window.addEventListener('keydown', handleBackdropElemEscapeClick);
});
