require.config({
	paths: {
		"backbone": "bower_components/backbone/backbone-min",
		"underscore": "bower_components/lodash/dist/lodash.min",
		"jquery": "bower_components/jquery/jquery.min"
	},
	shim: {
		"backbone": {
			deps: [
				"jquery",
				"underscore"
			],
			exports: "Backbone"
		},
		"underscore": {
			exports: "_"
		}
	}
});

require( [ "app" ], function ( App ) {

});
