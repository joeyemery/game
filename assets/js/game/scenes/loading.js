Crafty.scene('loading', function() {
	/* Load in all the sprite assets. */
	Crafty.load(['assets/sprites/floor.png'], function() {
		Crafty.scene('main');
	});
	
	Crafty.background('#eee');
});