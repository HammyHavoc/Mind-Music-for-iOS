define( function ( require ) {

	"use strict";

	return {
		app_slug : 'mind-music-ios',
		wp_ws_url : 'https://www.mindmusic.online/wp-appkit-api/mind-music-ios',
		wp_url : 'https://www.mindmusic.online',
		theme : 'q-android-master',
		version : '1.2',
		app_type : 'phonegap-build',
		app_title : 'Mind Music',
		app_platform : 'ios',
		app_path: '',
		gmt_offset : 0,
		debug_mode : 'off',
		auth_key : 'Q$#;h-|OlLx;G[V}qgL^,h?L]K95^u8QA2O#N6UaNE@/]~VrU4fb-.V]j|sI5`6-',
		options : {"refresh_interval":0,"onesignal":{"app_id":"e5edb987-35f5-4ef7-9eb8-bd1e455a5a5d"}},
		theme_settings : [],
		addons : [{"name":"OneSignal for WP AppKit","slug":"wpak-addon-onesignal","url":"https:\/\/www.mindmusic.online\/wp-content\/plugins\/wpak-addon-onesignal","js_files":[{"file":"js\/wpak-onesignal.js","type":"module","position":"","platforms":["android","ios"]},{"file":"js\/wpak-onesignal-app.js","type":"theme","position":"after","platforms":["android","ios"]}],"css_files":[],"html_files":[],"template_files":[],"app_data":null}]
	};

});
