$(document).ready(function(){
	
	MedleyShiv();
	MyHTML5shiv();
	calcLayout();	
	var throttledResize = _.throttle(calcLayout, 100);
	$(window).resize(throttledResize);

	skrollr.init();
});

function calcLayout()
{
	// calculate cover height
	$bgheight=$(window).height()-$('#undernav').height();
	$('.cover').css('height', $bgheight+'px');
}

function MyHTML5shiv()
{
	 $('div#map').attr("data-10-top","position:inherit;top:0%")
	 	.attr("data-top","position:fixed;top:20%;width:27%")
	 	.attr("data-1-top","width:100%");
}

function MedleyShiv(){
	$('hr.double-rule').parent().addClass("forcefullwidth");
}