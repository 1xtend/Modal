/*
? keyboard-events

* keydown - клавіша натиснута
* keyup - відпустили клавішу


*/

window.addEventListener('keyup', () => {
  console.log('Key up');
});

window.addEventListener('keydown', (e) => {
  console.log(e.key, e.code, e.ctrlKey);
});
