	$(function () {
	    /* START OF DEMO JS - NOT NEEDED */
	    if (window.location == window.parent.location) {
	        $('#fullscreen').html('<span class="fa fa-resize-small"></span>');
	        $('#fullscreen').attr('href', 'http://bootsnipp.com/mouse0270/snippets/PbDb5');
	        $('#fullscreen').attr('title', 'Milagros');
	    }    
	    $('#fullscreen').on('click', function(event) {
	        event.preventDefault();
	        window.parent.location =  $('#fullscreen').attr('href');
	    });
	    $('#fullscreen').tooltip();
	    /* END DEMO OF JS */
	    
	    $('.navbar-toggler').on('click', function(event) {
			event.preventDefault();
			$(this).closest('.navbar-minimal').toggleClass('open');
		})
	});

	$(function(){
		$("#typed").typed({
			strings: ["FRONT-END DEVELOPER","COMUNICADORA AUDIOVISUAL", "CATLOVER ♥", "GAMER AMATEUR", "ENGLISH STUDENT", "FOTÓGRAFA AFICIONADA"],
			typeSpeed: 120,
			loop: true,
			startDelay: 100,
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
