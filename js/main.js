$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })


})
$('.dropdownMenuLink').click(function(e){
	// Kill click event:
	e.stopPropagation();
	// Toggle dropdown if not already visible:
	if ($('.dropdown').find('.dropdown-menu').is(":hidden")){
	  $('.dropdown-toggle').dropdown('toggle');
	}
  });
  