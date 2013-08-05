Crafty.c('Controls', {
	init: function() {
		this.requires('Multiway');
	},

	controls: function(speed) {
		this.multiway(speed, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
		return this;
	}
});