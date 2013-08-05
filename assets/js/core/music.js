define([
	'crafty'
], function(Crafty) {

	var Music = {
		register: function() {
			Crafty.audio.add({
				loading_screen: [
					'assets/music/loading_screen.ogg'
				]
			});
		},

		play: function(audio_name, repeat, volume) {
			Crafty.audio.play(audio_name, repeat, volume)
		}
	}

	return Music;

});