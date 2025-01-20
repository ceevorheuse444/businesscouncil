	$(window).on('scroll', function() {
		"use strict";
		var b = $(window).scrollTop();
		if( b > 72 ){		
			$(".navbar").addClass("scroll");
		} else {
			$(".navbar").removeClass("scroll");
		}
	});
	$(document).ready(function() {	
		"use strict";
		
		$('.navbar-nav li.nav-item.nl-simple, .navbar-collapse span.navbar-text a').on('click', function() {				
			$('#navbarSupportedContent').css("height", "1px").removeClass("in").addClass("collapse");
			$('#navbarSupportedContent').removeClass("show");				
		});
		$('.header a[href^="#"], .page a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {
			e.preventDefault();
			var target = this.hash,
				$target = jQuery(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 60
			}, 'slow', 'easeInSine', function () {
				window.location.hash = '1' + target;
			});
			
		});		
		$.scrollUp = function (options) {
			var defaults = {
				scrollName: 'scrollUp',
				topDistance: 600,
				topSpeed: 800,
				animation: 'fade',
				animationInSpeed: 200,
				animationOutSpeed: 200,
				scrollText: '',
				scrollImg: false,
				activeOverlay: false
			};
			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '99999'});
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '99999' });
			}
			$(window).on('scroll', function(){	
				switch (o.animation) {
					case "fade":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
				}
			});
			$(scrollId).on('click', function(event){
				$('html, body').animate({scrollTop:0}, o.topSpeed);
				event.preventDefault();
			});

		};
		$.scrollUp();
		$('ul.tabs-1 li').on('click', function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs-1 li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		});		
		$('.count-element').each(function () {
			$(this).appear(function() {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			},{accX: 0, accY: 0});
		});	
	});