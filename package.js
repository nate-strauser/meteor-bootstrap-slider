Package.describe({
    summary: "bootstrap-slider packaged for meteor."
});

Package.on_use(function (api) {
	api.use('bootstrap', 'client');
	api.use('jquery', 'client');
    api.add_files([
        'bootstrap-slider.js',
        'slider.css'
    ], 'client'
    );
});