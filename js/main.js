$(function () {

	$(".rate-star").rateYo({
		rating: 4.6,
		starWidth: "15px",
		readOnly: true,
		// starSvg: '<svg enable-background="new 0 0 96 96" height="96px" id="star" version="1.1" viewBox="0 0 96 96" width="96px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M48,32.106l3.206,10.116L53.002,48h5.812h9.679l-7.592,5.081l-4.854,3.282l1.851,5.572l3.04,9.228l-8.21-6.029l-4.698-3.45  l-4.719,3.41l-8.232,5.954l3.018-9.109l1.869-5.642l-4.859-3.169L27.462,48h9.724h5.812l1.796-5.778L48,32.106 M48,6.718L37.186,40  H2.191l28.312,19.671L19.688,92.18L48,71.634l28.312,20.711L65.498,59.644L93.81,40H58.814L48,6.718L48,6.718z"/></svg>'
	});

	$('.featured__products').slick({
		prevArrow: '<button type = "button" class= "slick-prev"></button>',
		nextArrow: '<button type = "button" class= "slick-next"></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: false,
				}
			}
		]
	});

	$('.feed__products').slick({
		prevArrow: '<button type = "button" class= "slick-prev"></button>',
		nextArrow: '<button type = "button" class= "slick-next"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 475,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}
		]
	});

	var mySwiper = new Swiper('.feedback__slider', {
		containerModifierClass: 'feedback__slider',
		slideClass: 'feedback__item',
		wrapperClass: 'feedback__wrapper',
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: '.feedback-button-next',
			prevEl: '.feedback-button-prev',
		},
		breakpoints: {
			1210: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},
	});

	try {
		var mixer = mixitup('.newitem__inner-box');
	} catch { };




	//проверяем является ли устройство мобилкой
	//isMobile.any() - if mobile

	let isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};


	// filter menu on main page

	let filterBtn = document.querySelector('.filter-btn');
	let filterMenu = document.querySelector('.filter-box');
	let filterLink = document.querySelectorAll('.filter-box__link');
	try {
		if (!isMobile.any()) {

			filterBtn.addEventListener('mouseenter', (e) => {
				if (!filterMenu.classList.contains('_active')) {
					filterBtn.click();
				};
			});

			filterMenu.addEventListener('mouseleave', (e) => {
				filterMenu.classList.remove('_active');
			});
		};

		filterBtn.addEventListener('click', (e) => {
			filterMenu.classList.toggle('_active');
			e.stopPropagation();
		});

		for (link of filterLink) link.addEventListener('click', (e) => {
			filterMenu.classList.remove('_active');
		});


	} catch{ };


	// PRODUCT CART GRID/LIST view 

	let btnGrid = document.querySelector('.icon-grid');
	let btnList = document.querySelector('.icon-List');
	let product = document.querySelectorAll('.product__cart');

	const if_favourite = document.querySelector('.favourites');
	const rateBlock = document.querySelectorAll('.product-page__rate');
	const infoBlock = document.querySelectorAll('.product__cart-info');
	const themeBlock = document.querySelectorAll('.cart-info__product');
	const bottomBlock = document.querySelectorAll('.cart-info__price');
	const productType = document.querySelectorAll('.cart-info__product-type');
	const productSell = document.querySelectorAll('.product-sell');
	const themeName = document.querySelectorAll('.cart-info__product-dev');
	const raiting = document.querySelectorAll('.cart__info-rating');
	const likes = document.querySelectorAll('.cart-info__price-likes');

	try {
		btnGrid.addEventListener('click', (e) => {
			if (btnList.classList.contains('active')) {
				btnGrid.classList.add('active');
				btnList.classList.remove('active');
				for (let i = 0; i < product.length; i++) {
					product[i].classList.remove('list');
				};

				for (let i = 0; i < rateBlock.length; i++) {
					rateBlock[i].insertBefore(productSell[i], rateBlock[i].children['last']);

					if (if_favourite != null) {
						themeBlock[i].insertBefore(themeName[i], infoBlock[i].children['first']);
						themeBlock[i].insertBefore(productType[i], infoBlock[i].children['last']);
						bottomBlock[i].insertBefore(raiting[i], bottomBlock[i].children[1]);
						bottomBlock[i].insertBefore(productSell[i], bottomBlock[i].children['last']);
					} else {
						bottomBlock[i].insertBefore(productType[i], infoBlock[i].children['last']);
						themeBlock[i].insertBefore(themeName[i], infoBlock[i].children['last']);
						rateBlock[i].insertBefore(raiting[i], rateBlock[i].children['first']);
						rateBlock[i].insertBefore(productSell[i], rateBlock[i].children['last']);
					};
					// bottomBlock[i].insertBefore(likes[i], bottomBlock[i].children[1]);
				};
			};
		});

		btnList.addEventListener('click', function (event) {
			if (btnGrid.classList.contains('active')) {
				btnGrid.classList.remove('active');
				btnList.classList.add('active');

				for (let i = 0; i < product.length; i++) {
					product[i].classList.add('list');
				};
				for (let i = 0; i < rateBlock.length; i++) {
					rateBlock[i].insertBefore(themeName[i], rateBlock[i].children[0]);
					rateBlock[i].insertBefore(raiting[i], rateBlock[i].children['last']);
					rateBlock[i].insertBefore(likes[i], rateBlock[i].children[2]);
					infoBlock[i].insertBefore(productType[i], infoBlock[i].children['last']);
					bottomBlock[i].insertBefore(productSell[i], bottomBlock[i].children['last']);
				};
			};
		});
	} catch{ };


	// burger menu click

	const burgerBtn = document.querySelector('.header__burger');
	const mainMenu = document.querySelector('.menu');
	let headerMenu = document.querySelector('.header__menu');
	let body = document.querySelector('body');
	let overlay = document.querySelector('.burger__menu-overlay');

	try {
		burgerBtn.addEventListener('click', (e) => {
			if (e.target.closest('.header__burger')) toggleMenu();
		}, false);

		mainMenu.addEventListener('click', (e) => {
			if (e.target.tagName == 'A' && body.classList.contains('touch')) toggleMenu();
		}, false);

		overlay.addEventListener('click', (e) => {
			toggleMenu();
		}, false);

		function toggleMenu() {
			burgerBtn.classList.toggle('active');
			headerMenu.classList.toggle('active');
			overlay.classList.toggle('active');

			if (burgerBtn.classList.contains('active')) {
				body.classList.add('lock');
			} else {
				body.classList.remove('lock');
			};
		};
	} catch{ };

	// клик на стрелочку в бургер-меню

	let arrow = document.querySelectorAll('.arrow');
	let submenu = document.querySelectorAll('.submenu-burger');
	for (let i = 0; i < arrow.length; i++) {
		// let thisLink = arrow[i].previousElementSibling;
		let thisSubmenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];
		// thisLink.classList.add('parent');
		arrow[i].addEventListener('click', (e) => {
			for (let k = 0; k < arrow.length; k++) {
				if (k !== i) {
					arrow[k].classList.remove('active');
					submenu[k].classList.remove('open');
				};
				thisSubmenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			};
		});
	};

	//режим 930px PC/Mobile

	function menu_in_burger(mql) {
		let body = document.querySelector('body');
		let menu = document.querySelector('.menu');

		if (mql.matches) {
			body.classList.add('touch');
			body.classList.remove('mouse');
			if (!isMobile.any()) {
				menu.classList.add('hover');
			} else {
				menu.classList.remove('hover');
			};
		} else {
			body.classList.add('mouse');
			body.classList.remove('touch');
		};
	};

	let mql = window.matchMedia("(max-width:930px)");
	mql.addListener(menu_in_burger); // Добавим прослушку на смену результата
	menu_in_burger(mql); // Вызовем нашу функцию


	//слушаем 890px и переносим кнопку Seller в Бургер Меню

	const headerTop = document.querySelector('.header__inner');
	// const header_bottom = document.querySelector('.header__bottom-inner');
	function sellBtnToBottom(md890) {
		let sellBtn = document.querySelector('.header__btn');
		if (md890.matches) {
			headerMenu.append(sellBtn);
		} else {
			headerTop.children[1].before(sellBtn);
		};
	};

	let md890 = window.matchMedia("(max-width:890px)");
	md890.addListener(sellBtnToBottom);
	sellBtnToBottom(md890);


	//слушаем 1190px и убираем просмотр в стиле LIST при адаптации
	try {
		function listRemove(md1190) {
			if (md1190.matches)
				if (btnList && btnList.classList.contains('active')) btnGrid.click()
		};

		let md1190 = window.matchMedia("(max-width:1190px)");
		md1190.addListener(listRemove);
		listRemove(md1190);
	} catch{ };


	//move user notification in user menu

	const userMenu = document.querySelector('.header__client-submenu');
	const userBtn = document.querySelector('.header__client');
	const userNotification = document.querySelector('.header__notifications');
	try {
		function userboxRemove(md480) {

			let userBox = document.querySelector('.header__box');
			if (md480.matches) {
				userMenu.prepend(userNotification);
				userNotification.classList.remove('hover');
				// userBox.classList.remove('hover');
				// userBtn.classList.remove('hover');
			} else {
				userBox.prepend(userNotification);
				// userBox.classList.add('hover');
				userNotification.classList.add('hover');
				// userBtn.classList.add('hover');
			};
		};
	} catch{ };

	let md480 = window.matchMedia("(max-width:480px)");
	md480.addListener(userboxRemove);
	userboxRemove(md480);

	//слушаем 400px и уменьшаем пагинацию

	try {
		const pagitation = document.querySelectorAll('.pagination__list>li');

		function cutPagination(md400) {
			if (md400.matches) {
				if (pagitation.length > 3) {
					pagitation[1].style.display = "none";
				}
			} else {
				if (pagitation[1].style.display == "none") {
					pagitation[1].style.display = "inline-block";
				};
			};
		};

		let md400 = window.matchMedia("(max-width:400px)");
		md400.addListener(cutPagination);
		cutPagination(md400);

	} catch { };


	// mega menu на всю длинну

	try {
		let megaBtn = document.querySelector('.mega__list');

		megaBtn.addEventListener('mouseover', (e) => {
			if (window.innerWidth > 930) {
				let distance = document.querySelector('.mega__list').getBoundingClientRect();
				let container = document.querySelector('.container').getBoundingClientRect();
				let megaMenu = document.querySelector('.mega-menu');
				let left = distance.left - container.left - 15;
				megaMenu.style.left = "-" + left + "px";
			};

		}, false);
	} catch{ };


	//user menu show/hide on mouse move

	if (!isMobile.any()) {
		userBtn.addEventListener('mouseenter', (e) => {
			userMenu.classList.add('active');
			userBtn.classList.add('hover');
		});

		userBtn.addEventListener('mouseleave', (e) => {
			userMenu.classList.remove('active');
			userBtn.classList.remove('hover');
		});
	};

	//Ловим нажатия
	document.addEventListener('click', (e) => {
		//filter menu
		if (filterMenu && (filterMenu.classList.contains('_active') && (!e.target.closest('.filter-box') || !e.target.closest('.filter-btn')))) {
			filterMenu.classList.remove('_active');
		};
		//user menu
		if (e.target.closest('.header__client') && !e.target.closest('.header__client-submenu')) {
			userMenu.classList.toggle('active');
			userBtn.classList.toggle('hover');
		};

		if (e.target.tagName == 'A' && e.target.closest('.header__client-submenu')) {
			userMenu.classList.remove('active');
			userBtn.classList.remove('hover');
		};
	});


	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 999,
		from: 30,
		to: 300,
		prefix: "$"
	});


	$('.product-one__tabs .tab, .blog-tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.product-one__tabs, .blog-tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.product-one__tabs .tabs, .blog-tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});


});