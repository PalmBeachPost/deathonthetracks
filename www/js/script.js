$(document).ready(function(){
	$( "#graphics" ).tabs();
	MedleyShiv();
	MyHTML5shiv();
	calcLayout();	
	var throttledResize = _.throttle(calcLayout, 100);
	$(window).resize(throttledResize);

	skrollr.init();
	$('.carousel').carousel({ interval: false});
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

$( '.tooltipItem' ).tooltip({
      items: ".tooltipItem",
      content: function() {
        var id = $( this ).attr('id');
        var imgSrc=$ImgSrcs[id];
        return "<img class='tooltipImg' src='"+imgSrc+"' width='250px'/>";       
      }
});

$('.tooltipItem').click(function(){
	if($(this).is('.open')){
		$(this).removeClass('open');
		$(this).tooltip("close");
		return;
	}
	$(this).addClass('open')
	$(this).tooltip("open");
})

var $ImgSrcs = {
	"cuervos":"http://www2.palmbeachpost.com/projects/news/fcat14/img/traincut.jpg",
	"footpath": "http://media.cmgdigital.com/shared/lt/lt_cache/matte/302/225/img/photos/2014/06/22/78/17/burgos-900.jpg"
}
