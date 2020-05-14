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

// // place your code below


// Nie działają obie funkcje razem
// - zmiana terści nagłówka
// - hamburger menubar menu
// index.html nie pobiera index.js żeby odziselic te fubkcje

const button = document.querySelector('.header__button--js');
console.log(button);

button.addEventListener('click', (e) => {
	const header = document.querySelector('.header__title--js')
	header.innerHTML = '!! Pierwszy button !!';
	header.classList.toggle('header__title--red');
	if (header.classList.contains('header__title--red')) {
		console.log('jest klasa');
	} else {
		console.log('brak klasy');
	}
});