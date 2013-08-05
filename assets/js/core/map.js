define([
	'crafty'
], function(Crafty) {

	var prepare = function(identifier) {
		this.map = identifier;
	}

	var load = function(map, callback) {
		if(callback)
			this.callback = callback;

		var instance = this;

		$.get('assets/maps/' + map + '.json', function(data) {
			instance.render(data, callback);
		});
	}

	var render = function(map_data) {
		$.each(map_data, function(key, value) {
            var tile = Crafty.e('2D, Tile, Canvas, ' + value.tile).attr({
                x: value.x,
                y: value.y,
                w: value.w,
                h: value.h 
            });
        });

        if(this.callback)
            this.callback();	
	}

	return {
		load: load,
		render: render
	};

});