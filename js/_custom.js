document.addEventListener("DOMContentLoaded", function () {

	var wow = new WOW().init();

	const modal = document.querySelector('.modal'),
		cartButton = document.querySelector('#cartButton'),
		close = document.querySelector('.modal-close');
	cartButton.addEventListener('click', toggleModal);
	close.addEventListener('click',toggleModal );

	function toggleModal() {
		modal.classList.toggle('active-modal');
	}
	
});

