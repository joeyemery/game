/* Load in all the components. */
requirejs([
	// Sprites
	'core/sprites',
	
	// Components
	'components/hero',
	'components/controls',
	
	// Scenes
	'scenes/loading',
	'scenes/main'
], function() {
	Crafty.scene('loading');
});