require.config({
	paths: {
		jquery: 	'libs/jquery',
		pilot: 		'libs/pilot',
		underscore: 'libs/underscore',
		crafty: 	'libs/crafty',
		text: 		'libs/text',
		map: 		'core/map',
		sprites: 	'core/sprites',
		player: 	'core/player',
		music: 		'core/music'
	} 
});

require(['game'], function(Game) {
	Game.initialize();
});