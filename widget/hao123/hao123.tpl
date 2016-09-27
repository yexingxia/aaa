<!--
    @require "hao123.less"
-->
<div class="wrapper">
	<div class="mod-hao123">
		<div class="toolbar">
			<a class="add-desktop" href="/widget/hao123/hao123.url" download="百世快递123.url">添加到桌面</a>
			<a class="add-favorite" href="#">收藏</a>
		</div>
		<h1 class="title">Best123</h1>
	</div>
</div>

<script>
	setTimeout(function() {require.async('/widget/hao123/hao123.js', function(Index) {
		new Index();
	})}, 0);
</script>
