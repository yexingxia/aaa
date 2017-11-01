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
	.match('/static/gut.gif', {
		useHash: false
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

// default media `dev`：本地环境
fis.media('dev')
	.match('*', {
		useHash: false,
		optimizer: null
	});

// media `test/prod_*`：发布到测试(test)或线上环境(prod_*)
const SERVERS = [{
	media: 'test',
	ip: '10.45.10.72'
}, {
	media: 'prod_1',
	ip: '10.8.23.151', // '10.9.17.145'
}, {
	media: 'prod_2',
	ip: '10.8.23.152', // '10.9.17.146'
}];

SERVERS.map(function(v) {
	fis.media(v.media)
		.match('/{pkg,static,page}/**', {
			deploy: fis.plugin('http-push', {
				receiver: 'http://' + v.ip + ':8999/receiver',
				//远端目录
				to: '/home/appadmin/best123/source'
			})
		})
		.match('/widget/**/img/**', {
			deploy: fis.plugin('http-push', {
				receiver: 'http://' + v.ip + ':8999/receiver',
				//远端目录
				to: '/home/appadmin/best123/source'
			})
		})
		.match('/favicon.ico', {
			deploy: fis.plugin('http-push', {
				receiver: 'http://' + v.ip + ':8999/receiver',
				//远端目录
				to: '/home/appadmin/best123/source'
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
});

