jQuery(window).load(function() {
	
	/*
	    Stop carousel
	*/
	$('.carousel').carousel('pause');
	
});
function myChange(a) {
	console.log(a);
	document.getElementsByClassName('changing')[0].style.display = 'none';
	document.getElementsByClassName('changing')[1].style.display = 'none';
	document.getElementsByClassName('changing')[2].style.display = 'none';
	document.getElementsByClassName('changing')[3].style.display = 'none';

	document.getElementsByClassName('changing')[a].style.display = 'flex';
	document.getElementsByClassName('changing')[a].classList.remove('d-none');

}