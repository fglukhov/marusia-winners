$(window).on("scroll touchmove", function() {

	fixedHeader();

	var scrollPos = $(window).scrollTop();

	if ($("#md-indicator").css("display") == "block") {
		var yDiff = $("header").outerHeight();
	} else {
		var yDiff = $("header").outerHeight();
	}

	$("a[name]").each(function() {

		if ($(this).closest(".section").length) {

			var offTop = $(this).closest(".section").offset().top;

		} else {

			var offTop = $(this).offset().top;

		}

		if (scrollPos > offTop - yDiff - 100) {
			$(".navbar-nav a").removeClass("active");
			$(".navbar-nav a[href='#" + $(this).attr("name") + "']").addClass("active");
		}
	});

});

$(window).resize(function () {

	slickResponsive();

	$(".slick-slider").slick("setPosition");

});

$(document).ready(function() {

	// Ajax links

	$("body").on("click", ".ajax-link", function () {

		var curLink = $(this),
			curUrl = $(this).data("url"),
			curTarget = $($(this).data("target")),
			curSiblings = $(this).closest(".ajax-links").find(".ajax-link");

		if (!curLink.hasClass("active")) {

			curTarget.addClass("loading");

			$.ajax({
				url: curUrl,
				dataType: "html"
			}).done(function (data) {

				curTarget.html($(data)).removeClass("loading");

				curSiblings.removeClass("active");

				curLink.addClass("active");

				if (curLink.hasClass("location-link")) {

					$(".location-tabs-select").val(curLink.data("index"));

					if ($("#mobile-indicator").css("display") != "block") {

						$(".location-tabs-select").change();

					}

				}

			});

		}

		return false;

	});

	// Ajax links END

	$(".rounds-slider").on("init", function () {

		if (!$(this).find(".slick-arrow").length) {

			$(this).closest(".rounds-slider-wrapper").prepend('<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="">Previous</button>');
			$(this).closest(".rounds-slider-wrapper").append('<button class="slick-next slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="">Next</button>');

		}

		$(".rounds-slider .slick-slide").on("click", function () {

			var curSlide = $(this);

			if (!curSlide.hasClass("slick-active")) {

				if (curSlide.nextAll(".slick-active").length) {

					$(".rounds-slider").slick("slickGoTo", curSlide.prevAll().length)

				} else {

					$(".rounds-slider").slick("slickGoTo", curSlide.prevAll().length - $(".rounds-slider .slick-active").length + 1)

				}


			}

		});

	});

	$(".rounds-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		speed: 500,
		rows: 0,
		responsive: [
			{
				breakpoint: 1110,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Stage tmb
	
	$(".stage-tmb-switch").on("click", function () {

		if (!$(this).hasClass("active")) {

			$(this).addClass("active");

			$(this).find(".stage-tmb-front").hide();
			$(this).find(".stage-tmb-back").fadeIn(150);

		} else {

			$(this).removeClass("active");

			$(this).find(".stage-tmb-back").hide();
			$(this).find(".stage-tmb-front").fadeIn(150);

		}


	});
	
	// Stage tmb END
	
	slickResponsive();

	$(".video-poster").click(function () {

		$(this).closest(".video").find("video").get(0).play();

		$(this).fadeOut(250);

	});

	$(".header-logo a").click(function () {

		$("html, body").animate({
			scrollTop: 0
		},1500);

		return false;

	});

	$(".svg-inline").svgInline();

	fixedHeader();

	$("body").on("click", function(e) {
		if ($("#md-indicator").css("display") == "block" && !$(e.target).hasClass("navbar-wrapper-inner") && !$(e.target).parents().hasClass("navbar-wrapper-inner") && !$(e.target).hasClass("navbar-trigger") && !$(e.target).parents().hasClass("navbar-trigger")) {
			$(".navbar-wrapper").fadeOut(150);
			$("body").removeClass("menu-open");
			$(".navbar-trigger").removeClass("active");
		}
	});

	$(".navbar-trigger").click(function() {
		$(this).toggleClass("active");
		$(".navbar-wrapper").fadeToggle(150);
		$("body").toggleClass("menu-open");
	});



	$(".navbar-nav a").click(function() {

		if ($("#md-indicator").css("display") == "block") {

			$(".navbar-wrapper").fadeOut(150);
			$("body").removeClass("menu-open");
			$(".navbar-trigger").removeClass("active");

		}

	});

	// $(".navbar-wrapper").click(function(e) {
	// 	if (!$(e.target).hasClass("navbar-wrapper-inner") && !$(e.target).parents().hasClass("navbar-wrapper-inner")) {
	// 		$(".navbar-wrapper").fadeOut(150);
	// 		$("body").removeClass("menu-open");
	// 		$(".navbar-trigger").removeClass("active");
	// 	}
	// });

	// $("body").on("click", function (e) {
	//
	// 	if ($("#md-indicator").css("display") != "block") {
	//
	// 		if (!$(e.target).hasClass("navbar-trigger") && !$(e.target).parents().hasClass("navbar-trigger") && !$(e.target).hasClass("navbar-wrapper") && !$(e.target).parents().hasClass("navbar-wrapper") && $(".navbar-trigger").hasClass("active")) {
	//
	// 			$(".navbar-wrapper").fadeOut(150);
	//
	// 			$(".navbar-trigger").removeClass("active");
	//
	// 		}
	//
	// 	}
	//
	// });

	$("body").on("click", ".navbar-nav a, .info-tmb", function() {

		var curLink = $(this);

		if ($("#mobile-indicator").css("display") == "block") {
			var yDiff = $("header").outerHeight();
		} else {
			var yDiff = $("header").outerHeight();
		}

		$("html,body").animate({
			scrollTop: $("a[name='" + curLink.attr("href").replace("#","") + "']").offset().top - yDiff - 30
		},1000,function () {
			//curLink.addClass("active")
		});

		return false;

	});

	// Countdown 2021-08-16 18:00:00

	var endDate = new Date(2021, 7, 16, 18, 0, 0, 0);
	var startDate = new Date()
	var diffTime = endDate - startDate;
	var diffHours = Math.ceil(diffTime / (1000 * 60 * 60)); 
	if (diffHours > 0 && diffHours <= 1){
		endDate = new Date(startDate.getTime() + 1000 * (60 + 15) * 60);
		diffTime = endDate - startDate;
		diffHours = Math.ceil(diffTime / (1000 * 60 * 60)); 
	}
	var layout = "<div class='cd-section cd-section-days'><span>{dn} {dl}</span></div>"
	if (diffHours <= 24)
	{
		layout = "<div class='cd-section cd-section-days'><span>{hn} {hl}</span></div>"
	}
	if (diffHours > 0) {
		$(".countdown").each(function() {
			$(this).countdown({
				until: endDate,
				layout : layout
			});
		});
	} else {
		$(".section-countdown .countdown-text, .section-countdown .countdown").hide()
		$(".section-countdown .countdown-zero-text").show()

	}
	

	// Countdown END

	// Marquee

	$(".marquee-list").each(function () {

		var mList = $(this),
			mClone1 = $(this).clone(),
			mClone2 = $(this).clone(),
			mSize = $(this).find(".marquee-item").length;

		mList.before(mClone1);
		mList.after(mClone2);

		$(this).closest(".marquee-content").css({
			animationDuration: mSize * 20 + "s",
			width: mList.outerWidth() * 3
		});



	});

	// Marquee END

	// FAQ

	$("body").on("click", ".faq-item-ttl", function () {

		if (!$(this).closest(".faq-item").hasClass("active")) {

			var faqItemActive = $(".faq-item.active"),
				faqItemCur = $(this).closest(".faq-item");

			faqItemActive.find(".faq-item-arrow").removeClass("active");

			faqItemActive.find(".faq-item-content").slideUp("250", function () {

				faqItemActive.removeClass("active");

			});

			faqItemCur.find(".faq-item-arrow").addClass("active");

			faqItemCur.find(".faq-item-content").slideDown("250", function () {

				faqItemCur.addClass("active");

			});

			//$(".faq-answer").html(faqItemCur.find(".faq-item-content").html());

		} else {

			var faqItemCur = $(this).closest(".faq-item");

			faqItemCur.find(".faq-item-arrow").removeClass("active");


			faqItemCur.find(".faq-item-content").slideUp("250", function () {

				faqItemCur.removeClass("active");

			});

		}

	});

	// FAQ END

});

function fixedHeader() {

	var scrollPos = $(window).scrollTop();

	if (scrollPos > $(".section-top").outerHeight()) {

		$("header").addClass("header-fixed");

	} else {

		$("header").removeClass("header-fixed");

	}

}

(function($) {
	$.fn.svgInline = function() {
		return this.each(function() {
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			jQuery.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');
				// Add replaced image's ID to the new SVG
				if (typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}
				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');
				// Replace image with new SVG
				$img.replaceWith($svg);
			}, 'xml');
		});
	};

})(jQuery);

function slickResponsive() {

	if ($("#mobile-indicator").css("display") == "block") {

		if (!$(".stages-list .row").hasClass("slick-initialized")) {

			$(".stages-list .row").slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				speed: 500,
				rows: 0
			});

		}



	} else {

		if ($(".stages-list .row").hasClass("slick-initialized")) {
			$(".stages-list .row").slick("unslick");
		}



	}

}