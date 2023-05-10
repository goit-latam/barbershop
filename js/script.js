'use strict';

(() => {
	// Mobile Header shadowing
	const backdropParent = document.querySelector('.page-header').firstElementChild;

	window.addEventListener('scroll', function () {
		let opacity = window.scrollY / 150;
		backdropParent.style.setProperty('--backdrop-opacity', opacity);
	});

	// Adaptive Menu
	let adaptiveMenu = document.querySelector('.mobile-backdrop');
	let menuBtnOpen = document.querySelector('.page-header__menu-btn');
	let menuBtnClose = document.querySelector('.mobile-menu__close-btn');
	let menuLinks = document.querySelectorAll('.mobile-menu__link');

	menuBtnOpen.addEventListener('click', toggleMenu);
	menuBtnClose.addEventListener('click', toggleMenu);

	menuLinks.forEach(item => {
		item.addEventListener('click', toggleMenu);
	});

	function toggleMenu() {
		adaptiveMenu.classList.toggle('is-hidden');
		document.querySelector('html').classList.toggle('is-frozen');
	}
})();
