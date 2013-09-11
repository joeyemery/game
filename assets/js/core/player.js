define([
	'crafty',
	'assets/js/components/equipment_sprites.js',
	'core/save'
], function(Crafty, EqSprites, Save) {

	var Player = {
		initialize: function() {
			this.destroy();

			Crafty.sprite(32, 32, 'assets/sprites/joey.png', {
				player:	[1, 0]
			});

			// Create the player.
			this.base = Crafty.e('2D, Canvas, player, Animate, Controls, Hero').attr({x: 200, y: 96, w: 32, h: 32}).controls(3);

			// Load the player's equipment.
			this.load_equipment();

			// Create the camera and attach it to the player.
        	this.camera = Crafty.e('Camera').camera(this.base);
		},

		load_equipment: function() {
			var equips = Save.get('equips'); var equipment = {}

			$.each(equips, function(key, value) {
				equipment[key] = Crafty.e('2D, Canvas, player, Animate, Controls, Hero, ' + value).attr({x: 200, y: 96, w: 32, h: 32}).controls(3);
			});

			this.equips = equipment;
		},

		destroy: function() {
			Crafty("player").destroy();
		}
	}

	return Player;

});