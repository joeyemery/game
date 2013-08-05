define([
	'crafty',
	'jquery'
], function(Crafty, $) {
	
	var Save = {

		// Default save.
		data: {
			first_play: true,
			level: 		1,
			pos_x: 		0,
			pos_y: 		0
		},
		
		// Init function.
		initialize: function() {
			// Load all the data or revert to defaults.
			this.load();

			// Save everything into LocalStorage.
			this.save_all();
		},

		load: function() {
			this.data.first_play	= (first_play = localStorage.getItem('first_play')) ? first_play : this.data.first_play;
			this.data.level			= (level = localStorage.getItem('level')) ? level : this.data.level;
			this.data.pos_x 		= (pos_x = localStorage.getItem('pos_x')) ? pos_x : this.data.pos_x;
			this.data.pos_y 		= (pos_y = localStorage.getItem('pos_y')) ? pos_y : this.data.pos_y;
		},

		save_all: function() {
			var instance = this;

			$.each(this.data, function(key, value) {
				instance.set(key, value);
			});
		},

		get: function(identifier) {
			return this.data[identifier];
		},

		set: function(identifier, value) {
			this.data[identifier] = value;
			localStorage.setItem(identifier, value);
		}
	}

	Save.initialize();
	return Save;

});