// default settings. fis3 release

// Global start
fis.hook('commonjs');

fis.match('::package', {
		postpackager: fis.plugin('loader', {})
	})
	.match('*.html', {
		optimizer: fis.plugin('html-minifier')
	})
	.match('::image', {
		useHash: true
	})
	.match('*.png', {
		// fis-optimizer-png-compressor 插件进行压缩，已内置
		optimizer: fis.plugin('png-compressor', {
			type: 'pngquant' //default is pngcrush
		})
	})
	.match('*.ico', {
		useHash: false
	})
	.match('/widget/**.js', {
		isMod: true,
		useHash: false
	})
	.match('*.less', {
		parser: fis.plugin('less-2.x'),
		rExt: '.css'
	});
// Global end

// default media `dev`
fis.media('dev')
	.match('*', {
		useHash: false,
		optimizer: null
	});

// media `prod`
fis.media('prod')
	.match('/{pkg,static,page}/**', {
		deploy: fis.plugin('http-push', {
			receiver: 'http://10.45.25.82:8999/receiver',
			//远端目录
			to: '/deploy'
		})
	})
	.match('/favicon.ico', {
		deploy: fis.plugin('http-push', {
			receiver: 'http://10.45.25.82:8999/receiver',
			//远端目录
			to: '/deploy'
		})
	})
	.match('/static/*', {
		deploy: fis.plugin('http-push', {
			receiver: 'http://10.45.25.82:8999/receiver',
			//远端目录
			to: '/deploy'
		})
	})
	.match('/widget/**.js', {
		optimizer: fis.plugin('uglify-js'),
		exclude: '/widget/ui/**.js',
		packTo: '/pkg/aio.js'
	})
	.match('/widget/ui/**.js', {
		optimizer: fis.plugin('uglify-js'),
		packTo: '/pkg/common.js'
	})
	.match('*.{less,css}', {
		optimizer: fis.plugin('clean-css'),
		packTo: '/pkg/aio.css'
	})
	.match('/pkg/*', {
		useHash: true
	});
