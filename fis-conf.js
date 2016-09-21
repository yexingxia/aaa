// default settings. fis3 release

// Global start
fis.hook('commonjs');

fis.match('::package', {
  postpackager: fis.plugin('loader', {})
});

fis.match('*.less', {
  parser: fis.plugin('less-2.x'),
  rExt: '.css'
});

fis.match('*.{js,css}', {
  useHash: true
});

fis.match('::image', {
  useHash: true
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor', {
  	type: 'pngquant' //default is pngcrush
  })
});

fis.match('/widget/**.js', {
  isMod: true
});



// Global end

// default media is `dev`
fis.media('dev')
	.match('*', {
		useHash: false,
		optimizer: null
	});

// extends GLOBAL config
fis.media('prod')
	.match('*.js', {
	  	optimizer: fis.plugin('uglify-js')
	})
	.match('*.css', {
	  	optimizer: fis.plugin('clean-css')
	})
	.match('*.png', {
	  	optimizer: fis.plugin('png-compressor')
	});
