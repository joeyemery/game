define([
	'jquery',
	'crafty',
	'libs/tooltip',
	'core/asset_loader',
	'core/component_loader',
	'core/save',
	'player',
	'music',
	'scenes/house_joey_bedroom',
	'scenes/main_town'
], function($, Crafty, Tooltip, AssetLoader, ComponentLoader, Save, Player, Music, HouseJoeyBedroomScene, MainTownScene) {

	Crafty.init();
	Crafty.canvas.init();
	Crafty.background('#000');

	// Right, this is basically the first function to ever fire.
	// In here we're gonna start dealing with loading in our assets
	// and displaying a nice little progress bar. When all the assets
	// are successfully loaded you'll be able to click the buttons.
	var initialize = function() {
		// Create a variable to hold the loader.
		var progress = $('.load_progress');

		// Bind the tooltip plugin to .tooltip.
		$('.tooltip').powerTip({
			smartPlacement: true
		});

		// Init Crafty and the Crafty.canvas API.

		// Load in all the assets using our AssetLoader class.
		// .load takes 3 parameters (functions):
		// (onDone, onSingleDone, onFail)
		AssetLoader.load(
			// When all the assets are loaded.
			function(e) {
				// Now we've loaded all the assets in we should register them.
				Music.register();

				// We've loaded all the file assets, now get the components.
				ComponentLoader.load(function() {
					// Everything has been loaded, no need for the progress bar.
					progress.slideUp(100);

					// If this is the users first time playing, we'll only make the
					// new game button active.
					if(Save.get('first_play')) {
						$('a.play').removeClass('disabled');
					}

					// Otherwise we'll enable the load button too, but add a class to
					// ask for confirmation before starting a new game. (We wouldnt 
					// want to lose our awesome saves, would we?).
					else {
						$('a.play, a.load').removeClass('disabled');
						$('a.play').addClass('confirmation_check');
					}

					// Bind events.
					bindEvents();

					// Play the intro music!
					Music.play('loading_screen', -1, 1);
				});
			},

			// When a single asset has been loaded.
			function(e) {
				// Update the progress bar with the current %.
				progress.find('span').css('width', e.percent + '%');
			},

			// If an error has occured.
			function(e) {
				// Log it, fuck it.
				console.log(e);
			}
		);
	};

	// Bind events function.
	function bindEvents() {
		$('.play').on('click', playClick);
		$('.load').on('click', loadClick);
	}

	// When the user presses the play button.
	function playClick(e) {
		// Prevent the default action.
		e.preventDefault();

		// Call the crafty setup function.
		craftySetup();

		Crafty.scene('house_joey_bedroom');

	}

	function loadClick(){}

	// The transition from loading screen to game. Inits crafty.
	function craftySetup() {
		// Empty the current HTML inside the <body> tag. Also remove the loading
		// class on body to get rid of the background image.
		$('body').removeClass('loading').find('.home').remove();
	}

	return {
		initialize: initialize
	};

});