define([
	'crafty'
], function(Crafty) {

	var AssetLoader = {
		assets: new Array(),

		// Procedurally call all the different methods to load
		// in the assets.
		load: function(onDone, onSingleLoad, onFail) {
			if(onDone)
				this.onDone = onDone;

			if(onSingleLoad)
				this.onSingleLoad = onSingleLoad;

			if(onFail)
				this.onFail = onFail;

			this.load_asset_list();
		},

		// Loads in all the assets from the JSON document and fires
		// make_array on the returned data.
		load_asset_list: function() {
			var instance = this;

			$.get('assets/json/assets.json', function(data) {
				instance.make_array(data);
			});
		},

		// Takes the asset object and puts all the file locations
		// into a single array.
		make_array: function(assetObject) {
			var instance = this;

			$.each(assetObject, function(key, value) {
				instance.assets.push(value.location);
			});

			this.do_load();
		},

		// Deals with the actual loading of the assets using
		// Craftys .load API method.
		do_load: function() {
			Crafty.load(this.assets, this.onDone, this.onSingleLoad, this.onFail);
		},

		// These are empty functions ready to replaces by passing
		// them through as closures to the load_assets method.
		onDone: function(){},
		onSingleLoad: function(){},
		onFail: function(){}
	}

	return AssetLoader;

});