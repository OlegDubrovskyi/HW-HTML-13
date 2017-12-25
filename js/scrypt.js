$(document).ready(function(){
	$('.modal-show').on('click', function(e){
		e.preventDefault();
		$('.overlay').addClass('active');
	});
	$('.overlay').on('click', function(){
		$(this).removeClass('active');
	}).find('.content').click(function(e){
		event.stopPropagation();
	});
});