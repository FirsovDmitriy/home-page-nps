window.$ = jQuery;

import "./import/modules";
import "./import/components";
import "./import/animation"

// import swiper from 'swiper'






$(document).ready(function () {





	function handleInputDevice(event) {
		document.body.dataset.input =
		event.type === 'mousedown' ? 'mouse' : 'keyboard';
	}

	window.addEventListener('mousedown', handleInputDevice, false);
	window.addEventListener('keydown', handleInputDevice, false);

	

});



