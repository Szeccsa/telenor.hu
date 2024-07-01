var TELENORMOBILE = {

	init: function () {
		TELENORMOBILE.HEADER.init();
		$('#promo').each(function () {
			TELENORMOBILE.PROMO.init();
		});
		$('#device-promo').each(function () { TELENORMOBILE.DEVICEPROMO.init(); });
		TELENORMOBILE.SEARCH.init();
		TELENORMOBILE.GLOBAL.init();
		TELENORMOBILE.DEVICEPAGE.init();
		setTimeout(function () {
			window.scrollTo(0, 1);
		}, 500);
	}

};

TELENORMOBILE.HEADER = {

	searchVisible: false,
	subMenuVisible: false,

	$header: $('#page > header'),
	$mainmenu: $('#mainmenu'),
	$submenu: $('#submenu'),
	$search: $('#search'),

	init: function () {
		this.SEGMENTER.init();
		this.SUBMENU.init();
		this.$mainmenu.find('li.submenu').on('click', function () {
			TELENORMOBILE.HEADER.$submenu.find('ul > li').removeClass('active');
			$(this).siblings().removeClass('active');
			if (!TELENORMOBILE.HEADER.subMenuVisible) {
				$(this).addClass('active');
				TELENORMOBILE.HEADER.$header.removeClass().addClass('active submenu');
				TELENORMOBILE.HEADER.subMenuVisible = true;
				TELENORMOBILE.HEADER.searchVisible = false;
			} else {
				$(this).removeClass('active');
				TELENORMOBILE.HEADER.$header.removeClass();
				TELENORMOBILE.HEADER.subMenuVisible = false;
			}
			setTimeout(TELENORMOBILE.HEADER.SUBMENU.checkMenuSize, 300);
		});
		this.$mainmenu.find('li.search').on('click', function () {
			if (!$('#page').hasClass('search-result')) {
				TELENORMOBILE.HEADER.$submenu.find('ul > li').removeClass('active');
				$(this).siblings().removeClass('active');
				if (!TELENORMOBILE.HEADER.searchVisible) {
					$(this).addClass('active');
					TELENORMOBILE.HEADER.$header.removeClass().addClass('active search');
					TELENORMOBILE.HEADER.searchVisible = true;
					TELENORMOBILE.HEADER.subMenuVisible = false;
				} else {
					$(this).removeClass('active');
					TELENORMOBILE.HEADER.$header.removeClass();
					TELENORMOBILE.HEADER.searchVisible = false;
				}
				setTimeout(TELENORMOBILE.HEADER.SUBMENU.checkMenuSize, 300);
			}
		});
	}

};

TELENORMOBILE.HEADER.SEGMENTER = {

	segmentNames: ['private', 'small-business', 'corporate', 'aboutus'],
	currentSegmentIndex: 0,

	$segmenter: $('#submenu .segment-selector'),
	$list: $('#submenu .segment-selector ul'),
	$submenu: $('#submenu'),

	init: function () {
		this.setSizes();
		this.$segmenter.find('a.prev').on('click', function (e) {
			e.preventDefault();
			TELENORMOBILE.HEADER.SEGMENTER.currentSegmentIndex--;
			if (TELENORMOBILE.HEADER.SEGMENTER.currentSegmentIndex < 1) {
				TELENORMOBILE.HEADER.SEGMENTER.currentSegmentIndex = 0;
				$(this).hide();
			} else {
				$(this).show();
			}
			TELENORMOBILE.HEADER.SEGMENTER.$segmenter.find('a.next').show();
			TELENORMOBILE.HEADER.SEGMENTER.switchSegment();
		});
		this.$segmenter.find('a.next').on('click', function (e) {
			e.preventDefault();
			TELENORMOBILE.HEADER.SEGMENTER.currentSegmentIndex++;
			if (TELENORMOBILE.HEADER.SEGMENTER.currentSegmentIndex > TELENORMOBILE.HEADER.SEGMENTER.segmentNames.length - 2) {
				TELENORMOBILE.HEADER.SEGMENTER.currentSegmentIndex = TELENORMOBILE.HEADER.SEGMENTER.segmentNames.length - 1;
				$(this).hide();
			} else {
				$(this).show();
			}
			TELENORMOBILE.HEADER.SEGMENTER.$segmenter.find('a.prev').show();
			TELENORMOBILE.HEADER.SEGMENTER.switchSegment();
		});
		$(window).resize(TELENORMOBILE.HEADER.SEGMENTER.setSizes)
	},

	setSizes: function () {
		TELENORMOBILE.HEADER.SEGMENTER.$segmenter.find('ul').width(TELENORMOBILE.HEADER.SEGMENTER.$segmenter.width() * TELENORMOBILE.HEADER.SEGMENTER.$segmenter.find('ul li').length).find('li').each(function (i) {
			$(this).width(TELENORMOBILE.HEADER.SEGMENTER.$segmenter.width()).css({ left: i * $(this).width() });
		});
	},

	switchSegment: function () {
		var segment = this.segmentNames[this.currentSegmentIndex],
			pos = this.currentSegmentIndex * -this.$segmenter.width();
		this.$submenu.find('ul > li').not(this).removeClass('active');
		this.$submenu.find('> ul').removeClass('active').filter('[id="' + segment + '"]').addClass('active');
		this.$list.css('-webkit-transform', 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + pos + ', 0, 0, 1)');
	}

};

TELENORMOBILE.HEADER.SUBMENU = {

	$submenu: $('#submenu'),
	$landingMenu: $('#landingpage-menu'),
	$landingMenuMore: $('#landingpage-menu-more'),

	init: function () {
		this.$submenu.find('> ul > li').each(function () {
			$(this).on('click', function (e) {
				e.preventDefault();
				TELENORMOBILE.HEADER.SUBMENU.$submenu.find('ul > li').not(this).removeClass('active');
				$(this).toggleClass('active');
				setTimeout(TELENORMOBILE.HEADER.SUBMENU.checkMenuSize, 300);
				$(this).delay(300).queue(function () {
					var pos = $(this).offset().top;
					if (TELENORMOBILE.HEADER.SUBMENU.$submenu.find('ul > li.active').length == 0) {
						$('body,html').stop().animate({
							scrollTop: 0
						}, 300);
					} else {
						$('body,html').stop().animate({
							scrollTop: pos
						}, 300);
					}
					$(this).dequeue();
				});
			});
			$(this).find('> ul > li').each(function () {
				$(this).on('click', function (e) {
					e.stopPropagation();
				});
			});
		});

		this.$landingMenu.find('> li').each(function () {
			$(this).on('click', function (e) {
				//e.preventDefault(); //ezt azert kell kikommentelni, mert ha nincs almenuje, akkor menjen a generalt linkre
				TELENORMOBILE.HEADER.SUBMENU.$landingMenu.find('> li').not(this).removeClass('active');
				$(this).toggleClass('active');
			});
			$(this).find('> ul > li').each(function () {
				$(this).on('click', function (e) {
					e.stopPropagation();
				});
			});
		});
		this.$landingMenuMore.find('> li').each(function () {
			$(this).on('click', function (e) {
				e.preventDefault();
				TELENORMOBILE.HEADER.SUBMENU.$landingMenuMore.find('> li').not(this).removeClass('active');
				$(this).toggleClass('active');
			});
			$(this).find('> ul > li').each(function () {
				$(this).on('click', function (e) {
					e.stopPropagation();
				});
			});
		});
	},

	checkMenuSize: function () {
		if (((TELENORMOBILE.HEADER.$submenu.height() + TELENORMOBILE.HEADER.$submenu.position().top) > $(window).height() && ((TELENORMOBILE.HEADER.$submenu.height() + TELENORMOBILE.HEADER.$submenu.position().top) > $('#page').height()))) {
			$('#page').height(TELENORMOBILE.HEADER.$submenu.height() + TELENORMOBILE.HEADER.$submenu.position().top + 10);
		} else {
			$('#page').removeAttr('style');
		}
	}

};

operaMiniPromo = function () {
	var th = this;
	this.promoList = Array();
	this.promoCount = $('#promo .wrapper .slide').length;
	this.loadDatas = function () {
		$('#promo .slide').each(function (index, element) {
			th.promoList.push({
				'image': $(this).find('img:eq(1)').attr('data-src'),
				'href': $(this).attr('data-href'),
				'text': $(this).attr('data-promotext')
			});
		});
	}
	this.changePromo = function () {
		$('.wrapper').before('<div id="opera-promo"><a href="' + th.promoList[0]['href'] + '"><img width="100%" alt="' + th.promoList[0]['text'] + '" src="' + th.promoList[0]['image'] + '" /></a></div>');
		$('.wrapper').remove();
	}
	this.initPager = function () {
		var $li = null;
		for (var i = 0; i < this.promoCount; i++) {
			$li = $('<li>' + i + '</li>');
			if (i == 0) { $li.addClass('active'); }
			$li.on('click', function () {
				var index = $(this).index()
				$('#opera-promo')
					.find('a')
					.attr('href', th.promoList[index]['href'])
					.find('img')
					.attr('alt', th.promoList[index]['text'])
					.attr('src', th.promoList[index]['image'])
				$('#promo .info p').text(th.promoList[index]['text']);
				$('#promo .pager ul li').removeClass('active');
				$(this).addClass('active');
			});
			$('#promo .pager').find('ul').append($li);
		}
	}
	this.init = function () {
		th.loadDatas();
		th.initPager();
		th.changePromo();
	}
}

TELENORMOBILE.PROMO = {

	options: {
		snapThreshold: $(window).width() / 2,
		swipeMinTime: 400,
		swipeThreshold: 50,
		swipeDoublePercent: 85
	},

	currentIndex: 0,
	autoSlide: true,

	promoDatas: {
		startX: 0,
		startY: 0,
		startTime: 0,
		movement: 0,
		translate: 0,
		active: false
	},

	timerId: 0,
	promoCount: $('#promo .wrapper .slide').length,
	winw: $(window).width(),

	$info: $('#promo .info'),
	$wrapper: $('#promo .wrapper'),
	$pager: $('#promo .pager'),

	init: function () {
		if ($('#promo').hasClass('static-promo')) {
			this.setStaticPromo();
			$(window).resize(this.setStaticPromo);
		} else if (isOperaMini()) {
			op = new operaMiniPromo();
			op.init();
		} else {
			this.setPromoSizes();
			this.bindTouchEvents();
			this.initPromos();
			this.initPager();
			$(window).resize(this.setPromoSizes);
			$(window).on('orientationEvent', this.setPromoSizes);
		}
	},

	initPromos: function () {
		this.timerId = setTimeout(function () {
			TELENORMOBILE.PROMO.snapPromo('left', 1);
		}, TELENORMOBILE.PROMO.$wrapper.find('.slide').eq(TELENORMOBILE.PROMO.currentIndex).data('timer'));
	},

	initPager: function () {
		var $li = null;
		for (var i = 0; i < this.promoCount; i++) {
			$li = $('<li>' + i + '</li>');
			if (i == 0) { $li.addClass('active'); }
			$li.on('click', function () {
				var dir = 'left';
				if (TELENORMOBILE.PROMO.currentIndex < $(this).index()) {
					dir = 'right';
				}
				TELENORMOBILE.PROMO.pauseAutoSlide();
				TELENORMOBILE.PROMO.currentIndex = $(this).index();
				TELENORMOBILE.PROMO.snapPromo();
			});
			this.$pager.find('ul').append($li);
		}
	},

	setStaticPromo: function () {
		$('#promo.static-promo').find('.wrapper img').each(function () {
			var img = $(this).data('src');
			$(this).parent().css('background', 'url(' + img + ') center bottom no-repeat');
		});
	},

	setPromoSizes: function (e) {
		//alert(window.innerWidth +':'+ $(window).width())
		var winw = !isOperaMini() ? $(window).width() : 320;
		var ratio = 0;
		TELENORMOBILE.PROMO.winw = winw;
		$('#promo .wrapper').width($('#promo').find('.slide').length * winw);
		$('#promo').find('.slide').each(function (i) {
			$(this).css({ left: i * (winw - 10), width: winw });
			$(this).find('img').each(function () {
				$(this).load(function () {
					//alert(winw + ":" + $(window).width())
					$(this).width(!isOperaMini() ? winw : '100%');
					ratio = $(this).width() / $(this).height();
					if ($(this).height() < $(this).parent().height()) {
						$(this).height($(this).parent().height()).width($(this).height() * ratio).css({ left: ((winw - 20) - ($(this).height() * ratio)) / 2 });
					} else {
						$(this).css({ left: 0 });
					}
					$(this).css({ position: 'relative' }).data({ ratio: ratio }).show();
				});
				if (typeof e == 'object') {
					$(this).width(winw);
					ratio = $(this).data().ratio;
					$(this).height($(this).width() / ratio).css({ left: (winw - $(this).width()) / 2 });
					if ($(this).height() < $(this).parent().height()) {
						$(this).height($(this).parent().height()).width($(this).height() * ratio).css({ left: ((winw - 20) - ($(this).height() * ratio)) / 2 });
					}
					$(this).css({ position: 'relative' }).show();
				} else {
					$(this).attr('src', $(this).data('src'));
				}
			});
		});
		TELENORMOBILE.PROMO.$wrapper.css('-webkit-transform', 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + TELENORMOBILE.PROMO.currentIndex * -TELENORMOBILE.PROMO.winw + ', 0, 0, 1)');
	},

	bindTouchEvents: function () {
		this.$wrapper.on({
			touchstart: function (event) {
				var e = event.originalEvent;
				TELENORMOBILE.PROMO.promoDatas.startX = e.targetTouches[0].pageX;
				TELENORMOBILE.PROMO.promoDatas.startY = e.targetTouches[0].pageY;
				TELENORMOBILE.PROMO.promoDatas.startTime = new Date().getTime();
				TELENORMOBILE.PROMO.promoDatas.active = true;
				TELENORMOBILE.PROMO.pauseAutoSlide();
				$(this).removeClass('snapping');
			},
			touchmove: function (event) {
				var e = event.originalEvent,
					winw = TELENORMOBILE.PROMO.winw;

				if (TELENORMOBILE.PROMO.promoDatas.active) {
					var movementX = parseInt(e.targetTouches[0].pageX - TELENORMOBILE.PROMO.promoDatas.startX),
						newpos = TELENORMOBILE.PROMO.promoDatas.translate + movementX;

					if (Math.abs(movementX) > 30) { e.preventDefault(); }

					TELENORMOBILE.PROMO.currentIndex = Math.floor(Math.abs((newpos / TELENORMOBILE.PROMO.winw)));

					if (newpos > TELENORMOBILE.PROMO.options.snapThreshold) {
						TELENORMOBILE.PROMO.promoDatas.translate = 0;
						newpos = 0;
						movementX = 0;
						TELENORMOBILE.PROMO.$wrapper.addClass('snapping');
					}
					if (newpos < ((TELENORMOBILE.PROMO.promoCount - 1) * -winw) - TELENORMOBILE.PROMO.options.snapThreshold) {
						TELENORMOBILE.PROMO.promoDatas.translate = (TELENORMOBILE.PROMO.promoCount - 1) * -winw;
						newpos = (TELENORMOBILE.PROMO.promoCount - 1) * -winw;
						movementX = 0;
						TELENORMOBILE.PROMO.$wrapper.addClass('snapping');
					}
					TELENORMOBILE.PROMO.promoDatas.movement = movementX;
					$(this).css('-webkit-transform', 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + newpos + ', 0, 0, 1)');
				}
			},
			touchend: function () {
				TELENORMOBILE.PROMO.promoDatas.active = false;
				TELENORMOBILE.PROMO.promoDatas.translate += TELENORMOBILE.PROMO.promoDatas.movement;
				if (TELENORMOBILE.PROMO.promoDatas.startTime + TELENORMOBILE.PROMO.options.swipeMinTime > new Date().getTime() && Math.abs(TELENORMOBILE.PROMO.promoDatas.movement) > TELENORMOBILE.PROMO.options.swipeThreshold) {
					if (TELENORMOBILE.PROMO.promoDatas.movement > 0) {
						TELENORMOBILE.PROMO.snapPromo('right', Math.abs(TELENORMOBILE.PROMO.promoDatas.movement / TELENORMOBILE.PROMO.winw) * 100);
					} else {
						TELENORMOBILE.PROMO.snapPromo('left', Math.abs(TELENORMOBILE.PROMO.promoDatas.movement / TELENORMOBILE.PROMO.winw) * 100);
					}
				} else {
					if (Math.abs(TELENORMOBILE.PROMO.promoDatas.translate % TELENORMOBILE.PROMO.winw) < TELENORMOBILE.PROMO.options.snapThreshold) {
						TELENORMOBILE.PROMO.snapPromo('right', 0);
					} else if (Math.abs(TELENORMOBILE.PROMO.promoDatas.translate % TELENORMOBILE.PROMO.winw) > TELENORMOBILE.PROMO.winw - TELENORMOBILE.PROMO.options.snapThreshold) {
						TELENORMOBILE.PROMO.snapPromo('left', 0);
					}
				}
				TELENORMOBILE.PROMO.promoDatas.movement = 0;
				TELENORMOBILE.PROMO.continueSlide();
			}
		});
	},

	snapPromo: function (dir, movementSize) {
		var stepSize = 1,
			target = 0;

		if ((dir == 'left' && TELENORMOBILE.PROMO.currentIndex < TELENORMOBILE.PROMO.promoCount - 1) || (dir == 'right' && TELENORMOBILE.PROMO.currentIndex > 0)) {

			if ((typeof movementSize) && (movementSize > TELENORMOBILE.PROMO.options.swipeDoublePercent) && (TELENORMOBILE.PROMO.currentIndex < TELENORMOBILE.PROMO.promoCount - 2) && (TELENORMOBILE.PROMO.currentIndex > 0)) {
				stepSize = 2;
			}

			if (dir == 'left') {
				TELENORMOBILE.PROMO.currentIndex += stepSize;
			} else {
				TELENORMOBILE.PROMO.currentIndex -= stepSize - 1;
			}

			target = -1 * TELENORMOBILE.PROMO.currentIndex * TELENORMOBILE.PROMO.winw;
			if (target > 0) { target = 0; }

			if (isOperaMini()) {
				this.$wrapper.animate({ marginLeft: target }, 200);
			}
			else {
				this.$wrapper.addClass('snapping').css('-webkit-transform', 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + (target + (10 * TELENORMOBILE.PROMO.currentIndex)) + ', 0, 0, 1)');
			}

			setTimeout(function () {
				TELENORMOBILE.PROMO.$wrapper.removeClass('snapping');
			}, 300);

			TELENORMOBILE.PROMO.promoDatas.translate = target;

			if (movementSize > 0) {
				TELENORMOBILE.PROMO.setActivePage();
				TELENORMOBILE.PROMO.setActiveText();
			}

		} else {

			target = -1 * TELENORMOBILE.PROMO.currentIndex * TELENORMOBILE.PROMO.winw;

			if (isOperaMini()) {
				this.$wrapper.animate({ marginLeft: target }, 200);
			}
			else {
				this.$wrapper.addClass('snapping').css('-webkit-transform', 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + target + ', 0, 0, 1)');
			}

			if (target != TELENORMOBILE.PROMO.promoDatas.translate) {
				TELENORMOBILE.PROMO.promoDatas.translate = target;
				setTimeout(function () {
					TELENORMOBILE.PROMO.$wrapper.removeClass('snapping');
				}, 300);

				TELENORMOBILE.PROMO.setActivePage();
				TELENORMOBILE.PROMO.setActiveText();
			}
		}

		if (TELENORMOBILE.PROMO.autoSlide) {
			TELENORMOBILE.PROMO.setNextSlide();
		} else {
			TELENORMOBILE.PROMO.continueSlide();
		}
	},

	setNextSlide: function () {
		var timer = TELENORMOBILE.PROMO.$wrapper.find('.slide').eq(TELENORMOBILE.PROMO.currentIndex).data('timer');
		if (this.autoSlide) {
			clearTimeout(TELENORMOBILE.PROMO.timerId);
			this.timerId = setTimeout(function () {
				if (TELENORMOBILE.PROMO.currentIndex == TELENORMOBILE.PROMO.promoCount - 1) {
					TELENORMOBILE.PROMO.currentIndex = -1;
				}
				TELENORMOBILE.PROMO.snapPromo('left', 1);
			}, timer);
		}
	},

	continueSlide: function () {
		clearTimeout(TELENORMOBILE.PROMO.timerId);
		this.autoSlide = true;
		this.setNextSlide();
	},

	pauseAutoSlide: function () {
		this.autoSlide = false;
		clearTimeout(TELENORMOBILE.PROMO.timerId);
	},

	setActivePage: function () {
		this.$pager.find('ul li').removeClass('active').eq(this.currentIndex).addClass('active');
	},

	setActiveText: function () {
		if (TELENORMOBILE.PROMO.$info.find('p').removeClass('out').text() != TELENORMOBILE.PROMO.$wrapper.find('.slide').eq(TELENORMOBILE.PROMO.currentIndex).data('promotext')) {
			this.$info.find('p').addClass('out').delay(300).queue(function () {
				TELENORMOBILE.PROMO.$info.find('p').removeClass('out').text(TELENORMOBILE.PROMO.$wrapper.find('.slide').eq(TELENORMOBILE.PROMO.currentIndex).data('promotext'));
				TELENORMOBILE.PROMO.$info.find('.btn').attr('href', TELENORMOBILE.PROMO.$wrapper.find('.slide').eq(TELENORMOBILE.PROMO.currentIndex).data('href'));
				$(this).dequeue();
			});
		}
	}

};

TELENORMOBILE.DEVICEPROMO = {

	options: {
		snapThreshold: $(window).width() / 2,
		swipeMinTime: 400,
		swipeThreshold: 50,
		swipeDoublePercent: 85
	},

	currentIndex: 0,
	autoSlide: true,

	promoDatas: {
		startX: 0,
		startY: 0,
		startTime: 0,
		movement: 0,
		translate: 0,
		active: false
	},

	timerId: 0,
	promoCount: $('#device-promo .device-promo-slide .device-promo').length,
	winw: $(window).width(),

	$wrapper: $('#device-promo .device-promo-slide'),

	init: function () {
		this.bindTouchEvents();
		$(window).resize(this.setPromoSizes);
	},

	setPromoSizes: function (e) {

		var winw = $(window).width(),
			ratio = 0;

		TELENORMOBILE.DEVICEPROMO.winw = $(window).width();
		$('#device-promo .device-promo-slide').width($('#device-promo').find('.device-promo').length * (TELENORMOBILE.DEVICEPROMO.winw - 20));
		TELENORMOBILE.DEVICEPROMO.$wrapper.css('-webkit-transform', 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + TELENORMOBILE.DEVICEPROMO.currentIndex * -(TELENORMOBILE.DEVICEPROMO.winw - 20) + ', 0, 0, 1)');
	},

	bindTouchEvents: function () {
		this.$wrapper.on({
			touchstart: function (event) {
				var e = event.originalEvent;
				TELENORMOBILE.DEVICEPROMO.promoDatas.startX = e.targetTouches[0].pageX;
				TELENORMOBILE.DEVICEPROMO.promoDatas.startY = e.targetTouches[0].pageY;
				TELENORMOBILE.DEVICEPROMO.promoDatas.startTime = new Date().getTime();
				TELENORMOBILE.DEVICEPROMO.promoDatas.active = true;
				$(this).removeClass('snapping');
			},
			touchmove: function (event) {
				var e = event.originalEvent,
					winw = TELENORMOBILE.DEVICEPROMO.winw - 20;

				if (TELENORMOBILE.DEVICEPROMO.promoDatas.active) {
					var movementX = parseInt(e.targetTouches[0].pageX - TELENORMOBILE.DEVICEPROMO.promoDatas.startX),
						newpos = TELENORMOBILE.DEVICEPROMO.promoDatas.translate + movementX;

					if (Math.abs(movementX) > 30) { e.preventDefault(); }

					TELENORMOBILE.DEVICEPROMO.currentIndex = Math.floor(Math.abs((newpos / (TELENORMOBILE.DEVICEPROMO.winw - 20))));

					if (newpos > TELENORMOBILE.DEVICEPROMO.options.snapThreshold) {
						TELENORMOBILE.DEVICEPROMO.promoDatas.translate = 0;
						newpos = 0;
						movementX = 0;
						TELENORMOBILE.DEVICEPROMO.$wrapper.addClass('snapping');
					}
					if (newpos < ((TELENORMOBILE.DEVICEPROMO.promoCount - 1) * -winw) - TELENORMOBILE.DEVICEPROMO.options.snapThreshold) {
						TELENORMOBILE.DEVICEPROMO.promoDatas.translate = (TELENORMOBILE.DEVICEPROMO.promoCount - 1) * -winw;
						newpos = (TELENORMOBILE.DEVICEPROMO.promoCount - 1) * -winw;
						movementX = 0;
						TELENORMOBILE.DEVICEPROMO.$wrapper.addClass('snapping');
					}
					TELENORMOBILE.DEVICEPROMO.promoDatas.movement = movementX;
					$(this).css('-webkit-transform', 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + newpos + ', 0, 0, 1)');
				}
			},
			touchend: function () {
				TELENORMOBILE.DEVICEPROMO.promoDatas.active = false;
				TELENORMOBILE.DEVICEPROMO.promoDatas.translate += TELENORMOBILE.DEVICEPROMO.promoDatas.movement;
				if (TELENORMOBILE.DEVICEPROMO.promoDatas.startTime + TELENORMOBILE.DEVICEPROMO.options.swipeMinTime > new Date().getTime() && Math.abs(TELENORMOBILE.DEVICEPROMO.promoDatas.movement) > TELENORMOBILE.DEVICEPROMO.options.swipeThreshold) {
					if (TELENORMOBILE.DEVICEPROMO.promoDatas.movement > 0) {
						TELENORMOBILE.DEVICEPROMO.snapPromo('right', Math.abs(TELENORMOBILE.DEVICEPROMO.promoDatas.movement / (TELENORMOBILE.DEVICEPROMO.winw - 20)) * 100);
					} else {
						TELENORMOBILE.DEVICEPROMO.snapPromo('left', Math.abs(TELENORMOBILE.DEVICEPROMO.promoDatas.movement / (TELENORMOBILE.DEVICEPROMO.winw - 20)) * 100);
					}
				} else {
					if (Math.abs(TELENORMOBILE.DEVICEPROMO.promoDatas.translate % (TELENORMOBILE.DEVICEPROMO.winw / 20)) < TELENORMOBILE.DEVICEPROMO.options.snapThreshold) {
						TELENORMOBILE.DEVICEPROMO.snapPromo('right', 0);
					} else if (Math.abs(TELENORMOBILE.DEVICEPROMO.promoDatas.translate % (TELENORMOBILE.DEVICEPROMO.winw - 20)) > (TELENORMOBILE.DEVICEPROMO.winw - 20) - TELENORMOBILE.PROMO.options.snapThreshold) {
						TELENORMOBILE.DEVICEPROMO.snapPromo('left', 0);
					}
				}
				TELENORMOBILE.DEVICEPROMO.promoDatas.movement = 0;
			}
		});
	},

	snapPromo: function (dir, movementSize) {
		var stepSize = 1,
			target = 0;

		if ((dir == 'left' && TELENORMOBILE.DEVICEPROMO.currentIndex < TELENORMOBILE.DEVICEPROMO.promoCount - 1) || (dir == 'right' && TELENORMOBILE.DEVICEPROMO.currentIndex > 0)) {

			if ((typeof movementSize) && (movementSize > TELENORMOBILE.DEVICEPROMO.options.swipeDoublePercent) && (TELENORMOBILE.DEVICEPROMO.currentIndex < TELENORMOBILE.DEVICEPROMO.promoCount - 2) && (TELENORMOBILE.DEVICEPROMO.currentIndex > 0)) {
				stepSize = 2;
			}

			if (dir == 'left') {
				TELENORMOBILE.DEVICEPROMO.currentIndex += stepSize;
			} else {
				TELENORMOBILE.DEVICEPROMO.currentIndex -= stepSize - 1;
			}

			target = -1 * TELENORMOBILE.DEVICEPROMO.currentIndex * (TELENORMOBILE.DEVICEPROMO.winw - 20);
			if (target > 0) { target = 0; }

			this.$wrapper.addClass('snapping').css('-webkit-transform', 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + target + ', 0, 0, 1)');
			setTimeout(function () {
				TELENORMOBILE.DEVICEPROMO.$wrapper.removeClass('snapping');
			}, 300);

			TELENORMOBILE.DEVICEPROMO.promoDatas.translate = target;

		} else {

			target = -1 * TELENORMOBILE.DEVICEPROMO.currentIndex * (TELENORMOBILE.DEVICEPROMO.winw - 20);
			this.$wrapper.addClass('snapping').css('-webkit-transform', 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + target + ', 0, 0, 1)');

			if (target != TELENORMOBILE.DEVICEPROMO.promoDatas.translate) {
				TELENORMOBILE.DEVICEPROMO.promoDatas.translate = target;
				setTimeout(function () {
					TELENORMOBILE.DEVICEPROMO.$wrapper.removeClass('snapping');
				}, 300);
			}
		}
	}
};

TELENORMOBILE.SEARCH = {

	settings: {
		manufacturers: [],
		maxprice: 200000,
		category: '',
		tarifa: 2,
		order: 'date desc'
	},

	$searchFilters: $('#search-filters'),

	init: function () {
		this.bindEvents();
	},

	bindEvents: function () {
		$('#device-type li').each(function (index, value) {
			$(this).on('click', function () {
				$(this).siblings().removeClass('active')
				$(this).addClass('active');
				switch (index) {
					// Mobiltelefonok
					case 0:
						// ajax search
						break;
					// Tablet
					case 1:
						// ajax search
						break;
					// Netbook-laptop
					case 2:
						// ajax search
						break;
					// Modem
					case 3:
						// ajax search
						break;

				}
			});
		});

		this.$searchFilters.find('.filter-group h1').on('click', function () {
			TELENORMOBILE.SEARCH.$searchFilters.find('.filter-group').not($(this).parent()).removeClass('open');
			$(this).parent().toggleClass('open');
			$(this).parent().delay(300).queue(function () {
				var pos = $(this).offset().top;
				$('body,html').stop().animate({
					scrollTop: pos
				}, 300);
				$(this).dequeue();
			});
		});

		this.$searchFilters.find('.filter-group .manufacturers .wrapper .item').each(function () {
			$(this).on('click', function () {
				$(this).toggleClass('active');
				if ($(this).hasClass('active')) {
					$(this).next('input').attr('checked', 'checked');
				} else {
					$(this).next('input').removeAttr('checked');
				}
			});
		});

		this.$searchFilters.find('.filter-group .style ul li').each(function () {
			$(this).on('click', function () {
				$(this).toggleClass('active');
			});
		});

		this.$searchFilters.find('.filter-group .max-price input').each(function () {
			$(this).on({
				click: function () {
					$('#max-price-hidden').val($(this).val())
				},
				change: function () {
					$('#max-price-hidden').val($(this).val())
				}
			});
		});

		this.$searchFilters.find('.filter-group .tariff ul li').each(function () {
			$(this).on('click', function () {
				$(this).toggleClass('active');
				if ($(this).hasClass('active')) {
					$('#tariff_' + $(this).data('id')).attr('checked', 'checked');
				} else {
					$('#tariff_' + $(this).data('id')).removeAttr('checked');
				}
			});
		});

		this.$searchFilters.find('.filter-group .properties .wrapper .item').each(function () {
			$(this).on('click', function () {
				$(this).toggleClass('active');
			});
		});

		this.$searchFilters.find('footer button.search').each(function () {
			$(this).on('click', function () {
				TELENORMOBILE.SEARCH.$searchFilters.toggleClass('open');
				if (TELENORMOBILE.SEARCH.$searchFilters.hasClass('open')) {
					$(this).html('Keresés <span></span>');
				} else {
					$('#search-form').submit();
					/*
					 $(this).html('Új keresés <span></span>');
					 $(this).parent().delay(300).queue(function() {
					 var pos = $(this).offset().top;
					 $('body,html').stop().animate({
					 scrollTop: pos
					 }, 300);
					 $(this).dequeue();
					 });
					 */
				}
			});
		});

		$('#search-result').each(function () {
			$('#period').on('change', function (e) {
				$('#scategory').val($('#period option:selected').data('category'));
				$('#search-result .select-grp > form').submit();
			});
		});

	}
};

TELENORMOBILE.GLOBAL = {

	init: function () {
		this.customSelects();
		//this.filterImages();
		this.checkLists();
		this.unheightTables();
		this.operaMiniFallbacks();
	},

	operaMiniFallbacks: function () {
		if (!isOperaMini()) return false;

		// image src

		$("img").map(function () {
			if ($(this).attr('data-src')) $(this).attr({ src: $(this).attr('data-src') });
		});

		/*$("#page section.block .item-list .item").hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		})*/
	},

	customSelects: function () {
		$('#page .select-grp').each(function () {
			var $select = $(this).find('select'),
				$replace = $(this).find('span.select-replace b');
			$select.on('change', function () {
				if (typeof ($(this).find(':selected').data('num')) == 'undefined') {
					$replace.text($(this).find(':selected').text());
				} else {
					var num = parseInt($(this).find(':selected').data('num'));
					$replace.html($(this).find(':selected').text() + '<span>(' + num + ')</span>');
				}
			});
		});
	},

	checkLists: function () {
		$('#page section.block > ul:not(#landingpage-menu-more) li, #page section.block .content > ul:not(#landingpage-menu-more) li').each(function () {
			if ($(this).find('> span').length == 0) {
				$(this).append('<span></span>');
			}
		});
	},

	filterImages: function () {
		if (window.devicePixelRatio > 1) {
			$('#page img.high').each(function () {
				$(this).attr('src', $(this).data('src'));
			});
		} else {
			$('#page img.low').each(function () {
				$(this).attr('src', $(this).data('src'));
			});
		}
	},

	unheightTables: function () {
		$('#page .content table').each(function () {
			$(this).attr('height', '');
		});
	}
};

TELENORMOBILE.DEVICEPAGE = {

	init: function () {
		this.deviceTabbed();
		this.priceTableSelect();
		this.phonePictures();
	},

	phonePictures: function () {
		$('.block .device-img.phone-page').on('click', function (e) {
			$('#pictures.phone-photos-overlay').show();
			$('#page').css({ height: $('#pictures.phone-photos-overlay').outerHeight() });
			$('html').addClass('white');
		});
		$('#pictures.phone-photos-overlay').on('click', function (e) {
			$(this).hide();
			$('#page').css({ height: 'auto' });
			$('html').removeClass('white');
		});
	},

	deviceTabbed: function () {
		$('#device-tabbed li').each(function (index, value) {
			$(this).on('click', function () {
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
				switch (index) {
					case 0:
						$("#pictures").hide();
						$("#full").show();
						break;
					case 1:
						$("#pictures").show();
						$("#full").hide();
						break;
				}
			});
		});
	},

	priceTableSelect: function () {
		var commitment = $('#commitment'),
			postorprepaid_select = $('#postorprepaid');

		$('.table-list').each(function () { $(this).hide(); });
		if (postorprepaid_select.find(':selected').val() == 'prepaid') {
			$("#prepaid").show();
		} else {
			$("#" + postorprepaid_select.find(':selected').val() + "_" + commitment.val()).show();
		}

		postorprepaid_select.change(function () {
			$('.table-list').each(function () {
				$(this).hide();
			});
			if ($(this).find(':selected').val() == 'prepaid') {
				$("#prepaid").show();
				$("#commitment-options").addClass("off");
				$("#commitment-options .select-replace, #commitment").css('visibility', 'hidden');
			}
			else {
				$("#" + $(this).find(':selected').val() + "_" + commitment.val()).show();
				$("#commitment-options").removeClass("off");
				$("#commitment-options .select-replace, #commitment").css('visibility', 'visible');
			}
		});
		commitment.change(function () {
			if (postorprepaid_select.val() != 'prepaid') {
				$('.table-list').each(function () {
					$(this).hide();
				});
				$("#" + postorprepaid_select.val() + "_" + $(this).find(':selected').val()).show();
			}
		});
	}
};

function isOperaMini() {
	return Object.prototype.toString.call(window.operamini) === "[object OperaMini]";
	//navigator.userAgent.indexOf('Opera Mobi')<0?false:true;
}

$(document).ready(function () {
	TELENORMOBILE.init();
	MBP.scaleFix();
	if ($('section#phonepage').length > 0) {
		setTimeout(function () { phonepage.initialize(); }, 333);
	}

	//ideiglenesen ide teszem az esemenyek a boltkeresohoz
	$('button.search').click(function () {
		$('#search-shop-form').submit();
	});
	$('#search-shop-form .chkbox-grp li').on('click', function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('#chk' + $(this).data('id')).removeAttr('checked');
		} else {
			$(this).addClass('active');
			$('#chk' + $(this).data('id')).attr('checked', 'checked');
		}
	});
});

/* phonepage from site.js 2012.02.21. */
var phonepage = new function () {

	this.toInteger = function (s) {
		var tmp = '';
		for (var i = 0; i < s.length; i++) {
			if ((s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) || s.charAt(i) == ',') {
				tmp += s.charAt(i);
			}
		}
		return tmp; //parseInt('0' + tmp, 10);
	},

		this.serviceIndex = function () {
			return (($('input#cb_service:checked').length > 0) ? 1 : 0);
		},

		this.isNetshop = function (tariffval) {
			return (($('#price option:selected').parent().hasClass('netshop')) && tariffval && phonepackage[tariffval]['netshop_allowed'] ? true : false);
		},

		this.showResult = function () {
			var price = $('#price');
			var tariff = $('#tariff');
			var loyality = $('#loyality');
			var service = $('#cb_service');

			var priceval = price.val();
			var tariffval = tariff.val();
			var loyalityval = loyality.val();
			var serviceval = phonepage.serviceIndex();
			var tmp = null;

			if (phonepage.isNetshop(tariffval)) {
				$('div#phone_discount').html('<p>'
					+ ((parseInt(String(phonepackage[tariffval]['loyality'][loyalityval]['netshop'][serviceval]['discount']['amount']).split('(')[1].split('%')[0], 10) > 5) ? '<b class="emphasize4">Extra kedvezménnyel!</b><br />' : '')
					+ 'online kedvezmény: '
					+ phonepackage[tariffval]['loyality'][loyalityval]['netshop'][serviceval]['discount']['amount']
					+ (phonepackage[tariffval]['loyality'][loyalityval]['netshop'][serviceval]['discount']['shopprice'] ? '<br /> bolti ár: ' + phonepackage[tariffval]['loyality'][loyalityval]['netshop'][serviceval]['discount']['shopprice'] + ' Ft' : '')
					+ '</p>');
				$('a#phone_netshop').attr('href', phonepackage[tariffval]['loyality'][loyalityval]['netshop'][serviceval]['netshoplink']);
			} else {
				$('div#phone_discount').html('');
			}
			$('div#phone_result').html('<h6><small>Havidíj:</small> ' + (phonepackage[tariffval]['fee'][serviceval] == '' || phonepackage[tariffval]['fee'][serviceval] == null ? 'nincs' : phonepackage[tariffval]['fee'][serviceval] + ' Ft') + '</h6>' + phonepackage[tariffval]['description']);
			$('#tariffName, #tariffName_sel').attr('value', tariff.find('option:selected').html());
			$('#commitmentName, #commitmentName_sel').attr('value', loyality.find('option:selected').html());
		},

		this.packHandler = function () {
			var price = $('#price');
			var tariff = $('#tariff');
			var tariff_full = $('#tariff_full');
			var loyality = $('#loyality');
			var loyality_full = $('#loyality_full');
			var service = $('#cb_service');
			var pricevars;

			price.data('changed', false);
			tariff.data('changed', false);
			loyality.data('changed', false);
			service.data('changed', false);

			// selecting a price
			price.change(function (e, triggered) {
				var priceval = price.val();
				var tariffval = tariff.val();
				var tmp = null;

				// tariff select building
				eval('pricevars = {' + $(this).find('option:selected').attr('class') + '}');
				tariff.find('option').remove();
				tariff_full.find('option').clone(true).appendTo(tariff.find('optgroup#tariff_no'));
				for (var i in pricevars.tariff) {
					tariff.find('optgroup#tariff_no option[value=' + pricevars.tariff[i] + ']').appendTo(tariff.find('optgroup#tariff_yes'));
				}

				if (!$('optgroup#tariff_no option').length) {
					$('optgroup#tariff_no, optgroup#tariff_sep').hide();
				} else {
					$('optgroup#tariff_no, optgroup#tariff_sep').show();
				}

				// tariff change
				if (!triggered) {
					tariff.find('option[value=' + pricevars.selected + ']').attr('selected', 'selected');
					tariff.trigger('change', true);
				} else {
					tariff.find('option[value=' + tariffval + ']').attr('selected', 'selected');
					phonepage.showResult();
				}

				// netshop or shop
				tariffval = tariff.val();
				if (phonepage.isNetshop(tariffval)) {
					$('div#buttons_shop').addClass('hidden');
					$('div#buttons_netshop').removeClass('hidden');
				} else {
					$('div#buttons_netshop').addClass('hidden');
					$('div#buttons_shop').removeClass('hidden');
				}

			});

			// selecting tariff
			tariff.change(function (e, triggered) {
				var priceval = price.val();
				var tariffval = tariff.val();
				var tmp = false;

				// tariff has service?
				if (phonepackage[tariffval]['service'].length > 0) {
					$('div#service').removeClass('hidden');
					$('div#service label').text(phonepackage[tariffval]['service']);
					$('div#service_advert').removeClass('hidden').html(phonepackage[tariffval]['advert']);
				} else {
					$('div#service').addClass('hidden');
					$('div#service_advert').addClass('hidden');
				}

				// loyality select building
				loyality.find('option').remove();
				for (var i in phonepackage[tariffval]['loyality']) {
					loyality_full.find('option[value=' + i + ']').clone(true).appendTo(loyality).text(phonepackage[tariffval]['loyality'][i]['text']);
				}

				service.removeAttr('checked');
				if (!triggered) {
					for (var i in phonepackage[tariffval]['loyality']) {
						if (tmp) {
							break;
						}
						for (var j in { 'netshop': 'netshop', 'shop': 'shop' }) {
							if (tmp) {
								break;
							}
							for (var k = 0; k < 2; k++) {
								if ((phonepackage[tariffval]['loyality'][i][j][k] != null) && (price.find('option[value=' + phonepackage[tariffval]['loyality'][i][j][k]['value'] + ']').length > 0)) {
									loyality.find('option[value=' + i + ']').attr('selected', 'selected');
									price.find('option[value=' + phonepackage[tariffval]['loyality'][i][j][k]['value'] + ']').attr('selected', 'selected');
									if (k == 1) {
										service.attr('checked', 'checked');
									}
									tmp = true;
									break;
								}
							}
						}
					}
					loyality.trigger('change', true);
					price.trigger('change', true);
				} else {
					for (var i in phonepackage[tariffval]['loyality']) {
						if (tmp) {
							break;
						}
						for (var k = 0; k < 2; k++) {
							if ((priceval == (phonepackage[tariffval]['loyality'][i]['shop'][k] || { value: '' })['value']) || (priceval == (phonepackage[tariffval]['loyality'][i]['netshop'][k] || { value: '' })['value'])) {
								loyality.find('option[value=' + i + ']').attr('selected', 'selected');
								service.removeAttr('checked');
								if (k == 1) {
									service.attr('checked', 'checked');
								}
								tmp = true;
								break;
							}
						}
					}
					loyality.trigger('change', true);
					phonepage.showResult();
				}

			});

			// here comes the package info showing
			loyality.change(function (e, triggered) {

				var priceval = price.val();
				var tariffval = tariff.val();
				var loyalityval = loyality.val();
				var tmp = false;

				if (!triggered) {
					service.removeAttr('checked');
					for (var j in { 'netshop': 'netshop', 'shop': 'shop' }) {
						if (tmp) {
							break;
						}
						for (var k = 0; k < 2; k++) {
							if ((phonepackage[tariffval]['loyality'][loyalityval][j][k] != null) && (price.find('option[value=' + phonepackage[tariffval]['loyality'][loyalityval][j][k]['value'] + ']').length > 0)) {
								price.find('option[value=' + phonepackage[tariffval]['loyality'][loyalityval][j][k]['value'] + ']').attr('selected', 'selected');
								if (k == 1) {
									service.attr('checked', 'checked');
								}
								tmp = true;
								break;
							}
						}
					}
					price.trigger('change', true);
				} else {
				}

			});

			service.change(function () {
				this.blur();

				var priceval = price.val();
				var tariffval = tariff.val();
				var loyalityval = loyality.val();
				var serviceval = phonepage.serviceIndex();
				var netshopval = phonepage.isNetshop(tariffval);
				var tmp = false;

				for (var j in (netshopval ? { 'netshop': 'netshop', 'shop': 'shop' } : { 'shop': 'shop', 'netshop': 'netshop' })) {
					if (tmp) {
						break;
					}
					if (phonepackage[tariffval]['loyality'][loyalityval][j][serviceval] != null) {
						price.find('option[value=' + phonepackage[tariffval]['loyality'][loyalityval][j][serviceval]['value'] + ']:eq(0)').attr('selected', 'selected');
						tmp = true;
						break;
					} else {
						for (var i in phonepackage[tariffval]['loyality']) {
							if (phonepackage[tariffval]['loyality'][i][j][serviceval] != null) {
								loyality.find('option[value=' + i + ']').attr('selected', 'selected');
								price.find('option[value=' + phonepackage[tariffval]['loyality'][i][j][serviceval]['value'] + ']:eq(0)').attr('selected', 'selected');
								tmp = true;
								break;
							}
						}
					}
				}
				loyality.trigger('change', true);
				price.trigger('change', true);

			});

			// phonepack integer values correction
			var tmp = '';
			for (var i in phonepackage) {
				for (j = 0; j < 2; j++) {
					if (phonepackage[i]['fee'][j] && typeof (phonepackage[i]['fee'][j]) != 'number') {
						phonepackage[i]['fee'][j] = phonepage.toInteger(phonepackage[i]['fee'][j]);
					}
				}
			}

			// select the price
			price.trigger('change', false);

		};

	this.initialize = function () {

		if ($('section#phonepage').length > 0) {
			phonepage.packHandler();

		}

	};

}(); // /phonepage

// css include for opera mini:
if (isOperaMini()) {
	$('head').append('<link rel="stylesheet" href="mobile/css/style-opera-mini.css?v=' + Math.random() * 3000 + '">');
	//$('head').append('<link rel="stylesheet" href="mobile/css/style-opera-mini.css">');
}