Crafty.c('Hero', {
	init: function() {
		this.requires("SpriteAnimation, Collision")
		.animate("walk_left", 0, 1, 2)
		.animate("walk_right", 0, 2, 2)
		.animate("walk_up", 0, 3, 2)
		.animate("walk_down", 0, 0, 2)

		.bind("NewDirection", function (direction) {
			if (direction.x < 0) {
				if (!this.isPlaying("walk_left"))
					this.stop().animate("walk_left", 10, -1);
			}
			if (direction.x > 0) {
				if (!this.isPlaying("walk_right"))
					this.stop().animate("walk_right", 10, -1);
			}
			if (direction.y < 0) {
				if (!this.isPlaying("walk_up"))
					this.stop().animate("walk_up", 10, -1);
			}
			if (direction.y > 0) {
				if (!this.isPlaying("walk_down"))
					this.stop().animate("walk_down", 10, -1);
			}
			if(!direction.x && !direction.y) {
				this.stop();
			}
		})
		
		.bind('Moved', function(from, to) {
			if(this.hit('solid')){
				this.attr({x: from.x, y:from.y});
			}

			if(objCollision = this.hit('teleport')){
				if(scene = objCollision[0].obj.properties.scene) {
					Crafty.scene(scene);
				}
			}
		});
	return this;
}});