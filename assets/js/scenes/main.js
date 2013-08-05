define([
	'crafty',
	'map',
	'player'
], function(Crafty, Map, Player, CLoader) {

	Crafty.scene('main', function() {
		// Load and render the map.
	    Map.load('main', function() {
	    	Player.initialize();
	    });
	});

	load = function() {
		Crafty.scene('main');
	}

	return {
		load: load
	};

});