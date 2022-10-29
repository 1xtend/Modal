/*

* target - по чому конкретно клікнув
* currentTarget - елемент на який повісили addEventListener

*/

const modalOpenBtn = document.querySelector('#modalOpenBtn');
const backdropElem = document.querySelector('#modal');
const modalCloseBtn = document.querySelector('#modalCloseBtn');

// * Functions

function openModal() {
  backdropElem.classList.add('open');
}

function closeModal() {
  backdropElem.classList.remove('open');
}

function handleModalOpenBtnClick() {
  openModal();
}

function handleBackdropElemCloseClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function handleModalCloseBtnClick() {
  closeModal();
}

function handleKeyDown(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

// * Event Listeners

modalOpenBtn.addEventListener('click', handleModalOpenBtnClick);
backdropElem.addEventListener('click', handleBackdropElemCloseClick);
modalCloseBtn.addEventListener('click', handleModalCloseBtnClick);
window.addEventListener('keydown', handleKeyDown);
