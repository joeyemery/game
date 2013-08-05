define([
	'jquery'
], function($) {
	
	var load = function(callback) {
		// Load in all the components.
		requirejs([
			'components/resizer',
			'components/camera',
			'components/hero',
			'components/controls',
			'components/quest_log',
			'components/stats',
			'components/equips'
		], function() {
			if(callback)
				callback();
		});
	}

	return {
		load: load
	};

});