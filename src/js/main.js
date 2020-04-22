"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log('Siema');
const name = 'Michał Frelik';
const age = 26;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age}  lat`);

const welcome = (name, age) => {
	console.log(`Witaj ${name}, masz ${age} lat!`);
};

welcome(name, age);
welcome('Michał Ferlik', 26);




const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
	const navigationList = document.querySelector('.navigation__list--js');
	navigationList.classList.toggle('navigation__list--visible');
	navigationSwitcher.innerHTML = 'XXX';
});







