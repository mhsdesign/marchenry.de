// (function () {
// 	'use strict';

// 	console.log('your code here');
// }());


document.addEventListener('DOMContentLoaded', (e) => {

	let toggle = document.getElementById('menu--toggle');
	let overlay = document.getElementById('menu--overlay');
	let wrap = document.getElementById('menu--wrap');

	wrap.addEventListener('click', function(e){

		if (e.target.tagName === 'A'){
			return;
		} else {
			document.body.classList.toggle('menu--active');
		}

	});
	overlay.addEventListener('click', function(e){
		
		document.body.classList.toggle('menu--active');

	});

	toggle.addEventListener('click', function(e){

		// is a link
		e.preventDefault();

		document.body.classList.toggle('menu--active');

	});
	


})
