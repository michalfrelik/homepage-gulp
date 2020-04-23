
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