var LocalStorage = {
	separator: '___',
	support: function() {
		var supported = false;
        try{
            supported = ("localStorage" in window) && ("setItem" in localStorage);
        }catch(e){}
        return supported;
	},
	get: function(key) {
		key = key.split(this.separator);
		var data = JSON.parse(window.localStorage.getItem(key[0]));
		return data && key[1] ? data[key[1]] : data;
	},
	set: function(key, value) {
		key = key.split(this.separator);
		var data = value;
		if (key[1]) {
			var data = this.get(key[0]) || {};
			data[key[1]] = value;
		}
		window.localStorage.setItem(key[0], JSON.stringify(data));
	}
};

module.exports = LocalStorage;
