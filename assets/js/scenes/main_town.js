define([
	'crafty',
	'map',
	'player',
	'libs/create_mocks_module',
	'libs/tiledmapbuilder'
], function(Crafty, Map, Player, Mocks, Maps) {

	Crafty.scene('main_town', function() {
		Map.render('main_town', function() {
			Player.initialize(false);
		});

	});

});