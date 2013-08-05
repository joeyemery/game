define([
	'jquery',
	'underscore',
	'pilot',
	'crafty',
	'music',
	'scenes/home',
	'scenes/loading'
], function($, _, Pilot, Crafty, Music, HomeScene, LoadingScene) {

	// Extend Pilot's router to define our routes.
	var GameRouter = Pilot.Router.extend({
		routes: {
			'play': 'play',

			// Catch all default route.
			'*actions': 'home'
		}
	});

	var initialize = function() {
		var Router = new GameRouter;

		// Play route.
		Router.on('route:play', function() {
			Crafty.init(1200, 500);
			Crafty.canvas.init();
			
			LoadingScene.load();
		});

		// Catch all/default/home route.
		Router.on('route:home', function() {
			var HomeTemplate = new HomeScene;

	    		Music.initialize();
	    		console.log(Crafty.audio.sounds);
	    		Music.play('home', -1, 1);
		});

		// Start tracking history.
		Pilot.history.start();
	};

	return {
		initialize: initialize
	};

});