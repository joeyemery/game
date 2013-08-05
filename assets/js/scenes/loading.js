define([
	'crafty',
	'scenes/main',
	'sprites',
	'music',
	'components/component_loader'
], function(Crafty, MainScene, Sprites, Music, CLoader) {

	Crafty.scene('loading', function() {
		
		Crafty.background('#eee');
	    Crafty.e("2D, DOM, Text").attr({ x: 0, y: 0 }).text("Loading...");

		/* Load in all the sprite assets. */
		Crafty.load(['assets/sprites/joey.png', 'assets/sprites/exterior_floor_32.png', 'assets/sprites/exterior_floor_64.png', 'assets/sprites/exterior_stairs_64_32.png', 'assets/sprites/exterior_rails_32.png', 'assets/sprites/exterior_walls_96_64.png', 'assets/sprites/exterior_flowers_64.png', 'assets/sprites/preset_house_1.png', 'assets/sprites/solid.png'], function() {
	    	CLoader.load(function() {
	    		Crafty.scene('main');
		    	MainScene.load();
	    	});
		});
	});

	var load = function() {
		Crafty.scene('loading');
	}

	return {
		load: load
	};

});