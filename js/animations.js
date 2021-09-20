if ($("#mobile-indicator").css("display") == "none") {

	var is_mobile = false;

} else {

	var is_mobile = true;

}

var animMultiplier = 0.75;

$(".task-tmb-small, .task-tmb-big, .task-arrow").each(function (index) {

	$(this).attr("data-anim-index", index);

});

function animateAll() {

	if ($("#mobile-indicator").css("display") == "none" && !$("body").hasClass("animated")) {

		$("body").addClass("animated");

		var controller = new ScrollMagic.Controller();

		$(".section-top-descr .anim").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).data("anim-index") * .4 * animMultiplier + .5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: $("main"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".section-top-pic").each(function (index, element) {

			let elTween = TweenMax.to($(element), 1 * animMultiplier, {
				scale: 1,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: 1.5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".info-tmb").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				scale: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: 2 + $(element).data("anim-index") * .5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section-top"),
				offset: -200,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".stage-tmb").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).data("anim-index") * .5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".stages-list"),
				offset: -200,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);


		});

		$(".criteria-tmb").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				scale: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).data("anim-index") * .5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: -200,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);


		});

		$(".prizes-list .anim").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				scale: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).data("anim-index") * .5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: -200,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);


		});

		$(".links-list .anim").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				scale: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).data("anim-index") * .5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: -200,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);


		});





	} else if ($("#mobile-indicator").css("display") == "block") {

		$("body").removeClass("animated");

		//controller = controller.enabled(false);
		//controller = controller.destroy(true);

	}

}

$(window).on("resize", function () {

	animateAll();

});

$(document).ready(function () {

	animateAll();

});

