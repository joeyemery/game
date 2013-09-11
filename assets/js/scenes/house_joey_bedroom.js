define([
	'crafty',
	'map',
	'player',
	'libs/create_mocks_module',
	'libs/tiledmapbuilder'
], function(Crafty, Map, Player, Mocks, Maps) {

	Crafty.scene('house_joey_bedroom', function() {
		
		Map.render('house_joey_bedroom', function() {
			Player.initialize();
		});

	});

	load = function() {
		Crafty.scene('house_joey_bedroom');
	}

	return {
		load: load
	};

});