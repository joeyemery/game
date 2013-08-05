var Equips = {
	current: null,

	init: function() {
		//this.current = JSON.parse(localStorage.equips);
	},

	get: function(type) {
		return this.current[type];
	}
}

Equips.init();