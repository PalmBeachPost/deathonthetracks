$(document).ready(function(){
	resetLayout();
	var throttledResize = _.throttle(resetLayout, 100);
	$(window).resize(throttledResize);
});

function resetLayout()
{
	// calculate cover height
	$bgheight=$(window).height()-$('#undernav').height();
	$('.cover').css('height', $bgheight+'px');
	skrollr.init();
}