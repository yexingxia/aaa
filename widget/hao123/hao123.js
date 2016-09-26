var $ = require('widget/ui/jquery/jquery.js');
var artTpl = require('widget/ui/art-template/art-template.js');
var storage = require('widget/ui/localstorage/localstorage.js');
var Config = require('config.js');
var STORE = 'nav_freq';

var Hao123 = function() {
	this.$mod = $('.mod-hao123');
	this.TPL = Config.tpl;
	this._data = Config.data;
	this.supported = storage.support();
	this.init();
};
Hao123.prototype = {
	constructor: Hao123,
	init: function() {
		this.render();
		this.bindEvent();
	},
	sort: function(data) {
		var _store = storage.get(STORE) || {};
		$.each(data, function(k, v) {
			v.ratio = _store[v.url] || 0;
			v.index = k;
		});
		data.sort(function(a, b) {
			return b.ratio - a.ratio || a.index - b.index;
		});
	},
	render: function() {
		this.supported && this.sort(this._data);
		this.$mod.append(artTpl.compile(this.TPL)({data: this._data}));
	},
	bindEvent: function() {
		var self = this;
		if (self.supported) {
			self.$mod.on('click', '.link', function(e) {
				var key = [STORE, $(this).attr('href')].join(storage.separator);
				var value = parseInt(storage.get(key), 10) || 0;
				storage.set(key, ++value);
			});
		}
		self.$mod.on('click', '.add-favorite', function(e) {
			const bookmarkURL = window.location.href;
			const bookmarkTitle = document.title;
			// self.addFavorite(e, window.location.href, document.title);
			if ('addToHomescreen' in window && addToHomescreen.isCompatible) {
		        // Mobile browsers
		        addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
		    } else if (window.sidebar && window.sidebar.addPanel) {
		        // Firefox version < 23
		        window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
		    } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
		        // Firefox 23+ and Opera version < 15
		        $(this).attr({
		        	href: bookmarkURL,
		        	title: bookmarkTitle,
		        	rel: 'sidebar'
		        }).off(e);
		        return true;
		    } else if (window.external && ('AddFavorite' in window.external)) {
		        // IE Favorites
		        window.external.AddFavorite(bookmarkURL, bookmarkTitle);
		    } else {
		        // Other browsers (mainly WebKit & Blink - Safari, Chrome, Opera 15+)
		        alert('Press ' + (/Mac/i.test(navigator.userAgent) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
		    }
		    return false;
		});
	},
	addFavorite: function(e, bookmarkURL, bookmarkTitle) {


	}
};

module.exports = Hao123;
