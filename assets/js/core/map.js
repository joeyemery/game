define([
	'crafty'
], function(Crafty) {

	var render = function(map, callback) {
		$.get('assets/json/maps/' + map + '.json', function(data) {
			Crafty.e("2D, Canvas, TiledMapBuilder").setMapDataSource(data).createWorld(function(map) {
				callback();
			});
		});

		Crafty.e('2D, Canvas, player');
	}

	return {
		render: render
	};

});