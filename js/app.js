      $(function(){
          $("#typed").typed({
            strings: ["Bienvenidos a mi portafolio", "Mi nombre es Milagros","Soy Front-End Developer Jr", "Comunicadora Audiovisual", "MILAGROS QUISPE"],
            typeSpeed: 100,
            loop: true,
            startDelay: 100
          });
      });    


function main() {
	(function () {
	   'use strict';
	   
	    $('a.page-scroll').click(function() {
	        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	          var target = $(this.hash);
	          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	          if (target.length) {
	            $('html,body').animate({
	              scrollTop: target.offset().top
	            }, 900);
	            return false;
	          }
	        }
	      });
	    $('body').scrollspy({ 
	      target: '.navmenu',
	      offset: 80,
	    });

		$(document).ready(function() {		 
		  $("#testimonial").owlCarousel({		 
		      navigation : false,
		      slideSpeed : 300,
		      paginationSpeed : 400,
		      singleItem:true,
		      autoHeight : true
		  });
		});
	}());
}
main();