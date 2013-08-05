define([
	'jquery'
], function($) {

	var ComponentLoader = {
		load: function(onDone) {
			if(onDone)
				this.onDone = onDone;

			var instance = this;

			requirejs([
				'components/resizer',
				'components/camera',
				'components/hero',
				'components/controls',
				'components/quest_log',
				'components/stats',
				'components/equips'
			], function() {
				instance.onDone();
			});
		},

		// An empty function ready to be replaced by passing
		// through a function as a parameter.
		onDone: function(){}
	}

	return ComponentLoader;

});