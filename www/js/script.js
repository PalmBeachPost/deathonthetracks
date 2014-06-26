$(document).ready(function(){	
	MedleyShiv();
	MyHTML5Shiv();
	skrollrInstance=null;
	calcLayout();	
	$('.carousel').carousel({ interval: false});

	var throttledResize = _.throttle(calcLayout, 100);
	$(window).resize(throttledResize);	
});

function calcLayout()
{
	// calculate cover height
	$bgheight=$(window).height()*.9-0;
	$('.cover').css('height', $bgheight+'px');

	//calculate where to place photo credits
	$creditHeight= $bgheight-$('#credits').height();
	$('#credits').css('top',$creditHeight+'px');

	var $mapheight= math.min(Math.floor($(window).height()*.8), 500)+'px';
	$('#mapbox').css('height',$mapheight);

	//This has to happen here because small screens dont have skrollr effects
	if(skrollrInstance == null){
		if($(window).width()>480)
		{
			if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
				skrollrInstance = skrollr.init();
				if(map != null){
				map.dragging.enable();
				}
			}
		}
	}
	else {
		if($(window).width()<=480)
		{
			if(skrollrInstance!=null){
				skrollrInstance.destroy();
				skrollrInstance=null;
			}
			map.dragging.disable();
		}
	}

}

function MyHTML5Shiv()
{
	$('div#map').attr("data-anchor-target","#mapbuddy")
		.attr("data-top-top","position:inherit;width:!100%")
	 	.attr("data--50-top","position:fixed;top:!17%;width:!24%")
	 	.attr("data-bottom","position:absolute;bottom:!0.5%;width:!30%;top:initial");

	 $('a.left.carousel-control').attr("data-slide","prev");
	 $('a.right.carousel-control').attr("data-slide","next");
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
