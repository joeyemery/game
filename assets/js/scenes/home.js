define([
	'crafty',
	'jquery',
	'underscore',
	'pilot',
	'map',
	'player',
	'text!../../templates/home.html'
], function(Crafty, $, _, Pilot, Map, Player, HomeTemplate) {

	var HomeScene = Pilot.Scene.extend({

		el: $('body'),

		initialize: function() {
			this.load();
		},

		load: function() {
			var template = _.template(HomeTemplate);

			this.$el.html(template);
			this.$el.addClass('home');
		}

	});

	return HomeScene;

});