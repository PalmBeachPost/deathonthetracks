$(document).ready(function(){
	$( "#graphics" ).tabs();
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
	$bgheight=$(window).height()-0;
	$('.cover').css('height', $bgheight+'px');
}

function MyHTML5shiv()
{
	$('div#map').attr("data-anchor-target","#mapbuddy")
		.attr("data-top-top","position:inherit;bottom:!10%;;width:!100%")
	 	.attr("data--50-top","position:fixed;bottom:!10%;width:!27%")
	 	.attr("data-bottom","position:absolute;bottom:!0%;width:!30%;");
}

function MedleyShiv(){
	$('hr.double-rule').parent().addClass("forcefullwidth");
}
