$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
//for blog archive toggling
$('.tree-toggle').click(function () {
	$(this).parent().children('ul.tree').toggle(200);
});

$('#contact').click(function(){
	$('.modal-wrapper').show();
});

$('.exit').click(function(){
	$('.modal-wrapper').fadeOut();
});


$(document).ready(function() {
//Fluidvid.js

  (function ( window, document, undefined ) {

    /*
     * Grab all iframes on the page or return
     */
    var iframes = document.getElementsByTagName( 'iframe' );

    /*
     * Loop through the iframes array
     */
    for ( var i = 0; i < iframes.length; i++ ) {

      var iframe = iframes[i],

      /*
         * RegExp, extend this if you need more players
         */
      players = /www.youtube.com|player.vimeo.com/;

      /*
       * If the RegExp pattern exists within the current iframe
       */
      if ( iframe.src.search( players ) > 0 ) {

        /*
         * Calculate the video ratio based on the iframe's w/h dimensions
         */
        var videoRatio        = ( iframe.height / iframe.width ) * 100;

        /*
         * Replace the iframe's dimensions and position
         * the iframe absolute, this is the trick to emulate
         * the video ratio
         */
        iframe.style.position = 'absolute';
        iframe.style.top      = '0';
        iframe.style.left     = '0';
        iframe.width          = '100%';
        iframe.height         = '100%';

        /*
         * Wrap the iframe in a new <div> which uses a
         * dynamically fetched padding-top property based
         * on the video's w/h dimensions
         */
        var wrap              = document.createElement( 'div' );
        wrap.className        = 'fluid-vids';
        wrap.style.width      = '100%';
        wrap.style.position   = 'relative';
        wrap.style.paddingTop = videoRatio + '%';

        /*
         * Add the iframe inside our newly created <div>
         */
        var iframeParent      = iframe.parentNode;
        iframeParent.insertBefore( wrap, iframe );
        wrap.appendChild( iframe );

      }

    }

  })( window, document );

//owl carousel


	  var owl = $("#owl-carousel");

	  owl.owlCarousel({
	      items : 2, //10 items above 1000px browser width
	      itemsDesktop : [1000,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [900,1], // betweem 900px and 601px
	      itemsTablet: [600,1], //2 items between 600 and 0
	      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
				autoPlay: true,
				stopOnHover: true,
				navigationText: true
	  });

	  // Custom Navigation Events
	  $(".next").click(function(){
	    owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
	    owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
	    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
	    owl.trigger('owl.stop');
	  })


		 $('.testimonial-item').on('click', function(event){
			 var $this = $(this)
			 if($this.children('div.testimonial-item-truncated').hasClass('testimonial-hide')){
				 $this.children('div.testimonial-item-truncated').removeAttr('style').removeClass('testimonial-hide');
				//  $this.children('div.expand-block').addAttr('style').addClass('testimonial-hide');
				 $this.children('div.testimonial-item-expanded').addClass('testimonial-hide');
			 } else{
				 $this.children('div.testimonial-item-truncated').addClass('testimonial-hide');
				 $this.children('div.testimonial-item-expanded').removeAttr('style').removeClass('testimonial-hide');
				  // $this.children('div.expand-block').addAttr('style').addClass('testimonial-hide');
					console.log($this.children('div.testimonial-item-truncated').children('.testimonial').text().length);
			 }
	 });

	//  $('.testimonial-item').ready(function() {
	// 	 var $this = $(this)
	// 	 console.log($this.children('div.testimonial-item-truncated').children('.testimonial').text().length);
	// 	 if($this.children('div.testimonial-item-truncated').children('.testimonial').text().length < 300){
	// 		 $this.children('div.testimonial-item-truncated').children('div.expand-block').addAttr('style').addClass('testimonial-hide');
	// 	 }
	// 	 else {
	// 		 $this.children('.testimonial-item-truncated').children('div.expand-block').removeAttr('style').removeClass('testimonial-hide');
	// 	 }
	//  });
	 console.log('hi');

});
