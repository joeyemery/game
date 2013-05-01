/* When the document is ready. */
$(document).ready(function() {
	/* Use RequireJS to load in all game assets. */
	requirejs([
		'core/loader'
	], function () {
		/* All the assets are loaded in and the DOM is ready for manipulation. */
		
	    /* Initiate and configure CraftyJS (My chosen Javascript game engine). */
		Crafty.init(640, 320);
		Crafty.canvas.init();
	});
});