<template>
	<div class="partner">
		<ul>
			<li class="list">
				<img src="../../static/images/touxiang.jpg" alt="" class="touxiang">
				<span class="name">微信昵称</span>
				<span class="date">{{date | formDate}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				date: 1470752468900,
			}
		}

	}
</script>

<style scoped>
ul{
	padding: 0 15px;
}
.list{
	font-size: 0;
	height: 60px;
	line-height: 60px;
	border-bottom: 1px solid #ccc;
	padding: 0 10px;
}
.touxiang{
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-top: 10px;
	vertical-align: top;
}
.name,.date{
	font-size: 16px;
}
.name{
	margin-left: 10px;
}
.date{
	float: right;
}
	
</style>













