/* global cfg, def, req */

def(function() {
	cfg({
		libs: {
			badUrls: [
				'.....BAD-URLS-X1.....',
				'.....BAD-URLS-X2.....'
			],

			emptyConfig: {},

			jQuery: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min'
		}
	});

	req(['jQuery'], function($) {
		req(function(emptyConfig) {
			$('body').append('<div class="alert-success">`emptyConfig` Loaded Successfully</div>', emptyConfig);
		}, function(errors) {
			$('body').append('<div class="alert-success">`emptyConfig` Failed To Load<br /><pre>' + JSON.stringify(errors) + '</pre></div>');
		});

		req(function(badAnonymous) {
			$('body').append('<div class="alert-success">`badAnonymous` Loaded Successfully</div>', badAnonymous);
		}, function(errors) {
			$('body').append('<div class="alert-success">`badAnonymous` Failed To Load<br /><pre>' + JSON.stringify(errors) + '</pre></div>');
		});

		req(function(badUrls) {
			$('body').append('<div class="alert-success">`badUrls` Loaded Successfully</div>', badUrls);
		}, function(errors) {
			$('body').append('<div class="alert-success">`badUrls` Failed To Load<br /><pre>' + JSON.stringify(errors) + '</pre></div>');
		});

		def('brokenDefine', function(brokenDependency) {
			$('body').append('<div class="alert-success">`brokenDefine` Defined Successfully</div>', brokenDependency);
		});

		req(function(brokenDefine) {
			$('body').append('<div class="alert-success">`brokenDefine` Loaded Successfully</div>', brokenDefine);
		}, function(errors) {
			$('body').append('<div class="alert-success">`brokenDefine` Failed To Load<br /><pre>' + JSON.stringify(errors) + '</pre></div>');
		});
	});
});
