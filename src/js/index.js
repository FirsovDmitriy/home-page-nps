window.$ = jQuery;

import "./import/modules";
import "./import/components";
import "./import/animation"

// import "../../node_modules/wow.js/dist/wow"

import WOW from 'wow.js/dist/wow.js';

// import 'animate/animate.css'

// import "animate.css/animate.css";
// import swiper from 'swiper'



new WOW().init();


$(document).ready(function () {





	function handleInputDevice(event) {
		document.body.dataset.input =
		event.type === 'mousedown' ? 'mouse' : 'keyboard';
	}

	window.addEventListener('mousedown', handleInputDevice, false);
	window.addEventListener('keydown', handleInputDevice, false);

	

});

