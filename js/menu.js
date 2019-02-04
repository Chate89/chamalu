$(document).ready(main);

var contador = 1;

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function () {
        tilt([event.beta, event.gamma]);
    }, true);
} else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function () {
        tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
    }, true);
} else {
    window.addEventListener("MozOrientation", function () {
        tilt([orientation.x * 50, orientation.y * 50]);
    }, true);
}

function main(){
	$('.boton_menu').click(function(){

		if(contador == 1){
			$('nav').animate({
				top: '40'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				top: '-100%'
			});
		}
	});


	$('.active').click(function(){

		if(contador == 1){
			$('nav').animate({
				top: '40'
			});
			contador = 1;
		} else {
			contador = 0;
			$('nav').animate({
				top: '-100%'
			});
		}
	});

	$('.esconder').click(function(){

		if(contador == 1){
			$('nav').animate({
				top: '40'
			});
			contador = 1;
		} else {
			contador = 0;
			$('nav').animate({
				top: '-100%'
			});
		}
	});


};
