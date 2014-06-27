$(document).ready(function(){	
	MedleyShiv();
	MyHTML5Shiv();
	skrollrInstance=null;
	calcLayout();	
	$('.carousel').carousel({ interval: false});		
	loadGraphics();	

	var throttledResize = _.throttle(calcLayout, 100);
	$(window).resize(throttledResize);	
	try{	
		loadMap();
	}
	catch(err){
		$iheight =Math.min(Math.floor($(window).height()*.6), 500)+'px';
		$('#mapbox').html("<iframe width='100%' height="+$iheight+" frameBorder='0' src='http://www2.palmbeachpost.com/projects/news/trains/map.html'></iframe>");
		disableSkrollr();
		console.log("Error trying to load custom map: "+ err);
	}
});

function setSkrollrState(){	
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)
		&&($(window).width()>768))
	{
		skrollrInstance = skrollr.init();				
	}
	else{
		skrollrInstance && skrollrInstance.destroy();
		skrollrInstance=null;
	}	
}

function calcLayout(){
	// calculate cover height
	$bgheight=$(window).height()*.9-0;
	$('.cover').css('height', $bgheight+'px');

	var $mapheight= Math.min(Math.floor($(window).height()*.6), 400)+'px';
	$('#mapbox').css('height',$mapheight);

	if($(window).width()>768){
		$railwidth= Math.floor($(window).width()*.24)+'px';
		$('.rail').css('width',$railwidth);
		$('.graphic').css('width', '350px')
	}

	//since skrollr state changes with screen size
	setSkrollrState();
}

function MyHTML5Shiv(){
	$('div#map').attr("data-anchor-target","#mapbuddy")
	 	.attr("data-top-top","position:inherit;bottom:!10%;;width:!100%")
	 	.attr("data--50-top","position:fixed;bottom:!7%;width:!24%")
	 	.attr("data-bottom","position:absolute;bottom:!0%;width:!30%;");
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
