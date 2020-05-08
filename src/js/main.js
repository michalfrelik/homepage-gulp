// "use strict";

// // service worker registration - remove if you're not going to use it

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

// // place your code below


// console.log('Siema');
// const name = 'Michał Frelik';
// const age = 26;
// console.log(name);
// console.log(age);
// console.log(`Nazywam się ${name} i mam ${age}  lat`);

// const welcome = (name, age) => {
// 	console.log(`Witaj ${name}, masz ${age} lat!`);
// };

// welcome(name, age);
// welcome('Michał Ferlik', 26);


const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
	const navigationList = document.querySelector('.navigation__list--js');
	navigationList.classList.toggle('navigation__list--visible');
	navigationSwitcher.innerHTML = 'X';
});


// const faces = [':D', 'xD', ':O', 'text'];

// for (let i = 0; i < faces.length; i++) {
//   console.log(`i: ${i}`);
//   console.log(`element ${i+1}: ${faces[i]}`);
// }

// for (let face of faces){
//   console.log(face)
// }


// let a = 3;

// while (a < 9){
//   console.log(a);
//   a=a+3;
// }

// console.log (a)


// const person = {
//   name: 'maciek',
//   age: 31
// };

// for (let property in person) {
//   console.log(`${property}: ${person[property]}`)
// }


const inputTest = document.querySelector('.form__window-js');
console.log(inputTest);

inputTest.addEventListener('keyup', (e) => {
  localStorage.setItem('inputTest',e.target.value);
});

if (localStorage.getItem('inputTest')) {
  inputTest.value = (localStorage.getItem('inputTest'))
};
