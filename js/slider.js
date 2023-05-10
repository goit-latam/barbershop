'use strict';

(() => {
	// Hero Slider
	const heroPicts = document.querySelectorAll('.hero-slider__picture');

	let i = heroPicts.length;

	setInterval(function () {
		heroPicts[--i].classList.add('hero-slider__picture--hidden');

		if (i === 0) {
			i = heroPicts.length;

			heroPicts.forEach(item => {
				item.classList.remove('hero-slider__picture--hidden');
			});
		}
	}, 5000);
})();
