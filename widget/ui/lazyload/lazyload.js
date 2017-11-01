var $ = require('widget/ui/jquery/jquery.js');

$.fn.lazyload = function(opts) {
	var defaults = {
		container: window,
		className: 'lazy-img',
		threshold: 200
	};
	opts = $.extend(defaults, opts);

	var $mod = $(this);

	checkImage();
	bindEvents();


	function isInView(v) {
		var offsetTop = containerHeight = selfHeight = 0;
		var container = opts.container;
		if (container === window) {
			offsetTop = v.getBoundingClientRect().top;
			containerHeight = screen.availHeight;
		} else {
			offsetTop = v.getBoundingClientRect().top - container.getBoundingClientRect().top;
			containerHeight = container.offsetHeight;
		}
		selfHeight = v.offsetHeight;
		return offsetTop < containerHeight + opts.threshold && offsetTop + selfHeight + opts.threshold > 0;
	}

	function loadImage(img) {
		var $img = $(img);
		$img.attr('src', $img.attr('imgSrc')).one('load', function() {
			$img.removeClass(opts.className);
		});
	}

	function checkImage() {
		$mod.find('.' + opts.className).each(function(k, v) {
			isInView(v) && loadImage(v);
		});
	}

	function bindEvents() {
		var timer = null;
		$(opts.container).on('scroll resize', function(e) {
			clearTimeout(timer);
			timer = setTimeout(checkImage, 50);
		});
	}
};

