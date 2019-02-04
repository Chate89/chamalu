$(document).ready(main);

var contador = 1;

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
