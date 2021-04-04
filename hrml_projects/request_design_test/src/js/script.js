window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	let menuMail = document.querySelector('.menu_mail'),
		portalItem = document.querySelector('.portal'),
		copyBtn = document.querySelector('.copy_btn'),
		menuPhone = document.querySelector('.menu_phone'),
		callbackForm = document.querySelector('.callback'),
		inactiveBg = document.querySelector('.inactive_bd'),
		closeBtn = document.querySelector('.callback__close');



		menuMail.addEventListener('click', function() {
		portalItem.classList.toggle('portal_deactive');
		copyBtn.classList.toggle('copy_btn_active');
	});
	copyBtn.addEventListener('click', function() {
		portalItem.classList.toggle('portal_deactive');
		copyBtn.classList.toggle('copy_btn_active');
	});
	menuPhone.addEventListener('mouseenter', function() {
		callbackForm.style.display = 'flex';
		inactiveBg.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	closeBtn.addEventListener('click', function() {
		callbackForm.style.display = 'none';
		inactiveBg.style.display = 'none';
		document.body.style.overflow = 'visible';
	});

});