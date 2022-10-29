/*

* e.preventDefault() - прибирає дефолтні події (перезавантаження сторінки)
* e.target - те на чому спрацювала подія
* e.target.elements - колекція всіх елеменів в формі
* value - значення інпута (введені дані)

* new FormData(current form) - об'єкт з даними форми

* submit - відправлення данних
* change - спрацьовує коли перейшли на інший елемент
* input - кожен раз спрацьовує при зміні інпуту (коли додаємо щось)
* focus - коли елемент виділений
* blur - коли елемент перестав бути виділеним

*/

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = e.target.elements.username.value;
  console.log(username);

  //   const formData = new FormData(e.currentTarget);
  //   formData.append('value', 'myvalue');
});

const usernameInput = document.querySelector('#username');

usernameInput.addEventListener('change', (e) => {
  console.log('change');
});

// ------------

const outputElem = document.querySelector('#output');

usernameInput.addEventListener('input', (e) => {
  outputElem.textContent = e.currentTarget.value;
});

// ------------

usernameInput.addEventListener('focus', (e) => {
  console.log('focus');
});

usernameInput.addEventListener('blur', (e) => {
  console.log('blur');
});

// -----------

const firepowerCheckbox = document.querySelector('#firepowerCheckBox');

firepowerCheckbox.addEventListener('input', (e) => {
  console.log(e.target.checked, e.target.value);
});

// ---------
