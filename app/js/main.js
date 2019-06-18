$(function(){

	$('.header__menu-btn').on('click', function(){
		$('.menu ul').slideToggle();
	});

	$('.footer__content-title').on('click', function(){
		$(this).next('.footer__content-box, .footer__content-list').slideToggle();
		$(this).toggleClass('active');
	});

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	$('.slider__inner').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1601,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1140,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.upload__wrapper input, .upload__wrapper select').styler();

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		grid: false,
		prefix: "$",
		skin: "round"
	});


	var mixer = mixitup('.portfolio__content');
});