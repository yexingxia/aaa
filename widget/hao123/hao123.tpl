<!--
    @require "hao123.less"
-->
<div class="wrapper">
	<div class="mod-hao123">
		<h1 class="title">Best123</h1>
		<a class="add-favorite" href="#">收藏我吧！</a>
	</div>
</div>

<script>
	setTimeout(function() {require.async('/widget/hao123/hao123.js', function(Index) {
		new Index();
	})}, 0);
</script>
