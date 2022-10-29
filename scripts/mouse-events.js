/*
? Events

? addEventListener('event', function) - відслідковування події на елементі

?  removeEventListener('click', function) - видалення події

! Події елементів

* click - клік по елементу
* dblclick - два кліки по елементу
* mousedown - затиск кнопки
* mouseup - кнопка відпущена
* mouseenter - наведення на елемент
* mouseleave - виведення з елемента
* contextmenu - контекстне меню (права кнопка миші)
* mousemove - відслідковує пересування миші (e.clientX, e.clientY)
* mouseover - курсор над елементом
* mouseout - курсор виходить з елемента


*/
const btn = document.querySelector('#btn');

function onBtnClick() {
  console.log('Clicked');
}

btn.addEventListener('click', onBtnClick);
// btn.removeEventListener('click', onBtnClick);

btn.addEventListener('mouseenter', () => {
  console.log('Mouse entered');
});

btn.addEventListener('mouseleave', () => {
  console.log('Mouse left');
});

// btn.addEventListener('mousemove', (e) => {
//   console.log(e.clientX, e.clientY);
// });

btn.addEventListener('dblclick', () => {
  console.log('Opening program');
});

btn.addEventListener('contextmenu', (e) => {
  console.log('Context menu');
  e.preventDefault(); // Зупинити поведінку за замовчуванням
});

const box1 = document.querySelector('.box1');

box1.addEventListener('mouseenter', () => {
  console.log('Mouse enter');
});

box1.addEventListener('mouseleave', () => {
  console.log('Mouse leave');
});

box1.addEventListener('mouseover', () => {
  console.log('Mouse over');
});

box1.addEventListener('mouseout', () => {
  console.log('Mouse out');
});
