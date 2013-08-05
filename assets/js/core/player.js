define([
	'crafty'
], function(Crafty) {

	var Player = {
		initialize: function() {
			this.base = Crafty.e('2D, Canvas, player, Hero, Animate, Collision, Controls').attr({x: 0, y: 0, w: 32, h: 32}).controls(3);
			this.load_equipment();
		},

		load_equipment: function() {
		}
	}

	return Player;

});