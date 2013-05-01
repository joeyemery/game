Crafty.scene('main', function() {
	for(i = 0; i < 10; i++) {
		for(j = 0; j < 5; j++) {
			Crafty.e('2D, Canvas, test').attr({x: (i * 64), y: (j * 64), w: 64, h: 64});
		}
	}
	
	var player = Crafty.e('2D, Canvas, player, Hero, Animate, Collision, Controls').attr({x: 64, y: 64, w: 32, h: 48}).controls(2);
});