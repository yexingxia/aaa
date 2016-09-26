module.exports = {
	tpl: [
		'<ul class="nav">',
			'{{each data as item index}}',
				'<li class="site{{if item.alias}} pic-text{{/if}}"{{if item.background}} style="background: {{item.background}}"{{/if}}>',
					'<div class="inner">',
						'<a class="link" href="{{item.url}}" title="{{item.name}}">',
							'<img src="{{item.img}}" alt="{{item.name}}"/>',
							'{{if item.alias}}',
								'<span class="alias">{{item.alias.length ? item.alias : item.name}}</span>',
							'{{/if}}',
						'</a>',
					'</div>',
				'</li>',
			'{{/each}}',
		'</ul>'
	].join(''),
	data: [{
		name: 'OA系统',
		alias: true,
		img: __uri('img/ex_v.png'),
		url: 'http://inner.800bestex.com:8090/'
	}, {
		name: '协和系统',
		alias: true,
		img: __uri('img/ex_v.png'),
		url: 'https://xh.800best.com/'
	}, {
		name: '百世快递大学',
		alias: "企业大学",
		img: __uri('img/ex_v.png'),
		url: 'http://daxue2.800best.com/'
	}, {
		name: '百世大笔',
		img: __uri('img/dabi.png'),
		url: 'http://dabi.800best.com/'
	}, {
		name: '问道网误录签收反馈',
		img: __uri('img/askform.png'),
		url: 'http://app.askform.cn/2770050001.aspx'
	}, {
		name: '百世快递',
		img: __uri('img/express.png'),
		url: 'http://www.800bestex.com/'
	}, {
		name: '百世快运',
		img: __uri('img/freight.png'),
		url: 'https://t.800best.com/turbo/home/home'
	}, {
		name: '百世集团',
		img: __uri('img/best.png'),
		url: 'http://www.800best.com/'
	}, {
		name: 'U9系统',
		alias: true,
		img: __uri('img/ex_v.png'),
		url: 'https://u9.800best.com/'
	}, {
		name: 'S9系统',
		img: __uri('img/s9.png'),
		url: 'http://s9.800best.com/'
	}, {
		name: 'CRM系统',
		alias: true,
		img: __uri('img/ex_v.png'),
		url: 'http://crm.800bestex.com/'
	}, {
		name: '百世天雷',
		img: __uri('img/m9.png'),
		url: 'http://m9.800best.com',
		background: "#2f4050"
	}, {
		name: '灵通打单',
		img: __uri('img/dadan.png'),
		url: 'http://bestsmart.800best.com/',
		background: "#2d527d"
	}]
};
