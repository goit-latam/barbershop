'use strict';

(() => {
	// Modal
	const refs = {
		openModalBtns: document.querySelectorAll('[data-modal-open]'),
		closeModalBtn: document.querySelector('[data-modal-close]'),
		modal: document.querySelector('[data-modal]'),
	};

	let htmlClass = document.querySelector('html').classList;
	let mobileMenuClass = document.querySelector('.mobile-backdrop').classList;

	// console.log(refs.openModalBtns.length);

	for (let i = 0; i < refs.openModalBtns.length; i++) {
		refs.openModalBtns[i].addEventListener('click', toggleModal);
	}

	refs.closeModalBtn.addEventListener('click', toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden');

		if (mobileMenuClass.contains('is-hidden')) {
			htmlClass.toggle('is-frozen');
		}
	}
})();
