<template>
	<div class="index">
		<div v-title>首页</div>
		<img src="../../static/images/dida.jpg" alt="" class="banner">

		<!-- 微信头像ID -->
		<div class="wx">
			<img src="../../static/images/touxiang.jpg" alt="" class="img">
			<p class="name">微信昵称</p>
			<p class="total_price">{{totalPrice | currency('¥',2)}}</p>
			<p class="recommend">
				<span class="recommend_title">推荐码</span><span class="recommend_code">{{recommendCode}}</span>
			</p>
		</div>

		<!-- 已累计 -->
		<div class="count">
			<p class="start" @click="router1()">
				<span class="start_title">已累计星客</span><img src="../../static/images/go@2x.png" alt="" class="jiantou"><span class="start_number">{{startNumber}}个</span>
			</p>
			<p class="start" @click="router2()">
				<span class="start_title">已累计客户</span><img src="../../static/images/go@2x.png" alt="" class="jiantou"><span class="start_number">{{startNumber}}个</span>
			</p>
			<p class="start" @click="router3()">
				<span class="start_title">已累计关联小伙伴</span><img src="../../static/images/go@2x.png" alt="" class="jiantou"><span class="start_number">{{startNumber}}个</span>
			</p>
		</div>

		<!-- 网页信息 此信息可要可不要 -->
		<p class="info">
			Copyright © 2004 </br>Adobe Systems Incorporated. All rights reserved. 
		</p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				totalPrice: '13529.256',
				recommendCode: '234566',
				startNumber: '265',
			}
		},
		methods:{
			router1(){
				this.$router.push({path: '/count', query: {selected: "1"}});
			},
			router2(){
				this.$router.push({path: '/count', query: {selected: "2"}});
			},
			router3(){
				this.$router.push({path: '/count', query: {selected: "3"}});
			},
		},

	}
</script>

<style scoped>
.index{
  width:100%;
  height:100vh;
  font-size: 14px;
}
.banner{
	display: block;
	width: 100%;
}

.wx{
	position: relative;
	margin: 10px 20px;
	border-bottom: 1px solid #ccc;
	text-align: center;
}
.img{
	position: absolute;
	top: -50px;
	left: 0;
	right: 0;
	margin: auto;
	display: inline-block;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border: 4px solid white;
}
.name{
	padding-top: 35px;
}
.total_price{
	font-size: 40px;
	font-weight: bold;
	margin-top: 15px;
	color: rgb(41,130,212);
}
.recommend{
	margin: 15px;
}
.recommend_title{
	margin-right: 10px;
}
.recommend_code{
	font-size: 20px;
	font-weight: bold;
	color: rgb(41,130,212);
}

/*已累计*/
.count{
	margin: 0 20px;
	padding-top: 10px;
}
.start{
	font-size: 16px;
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid #ccc;
	margin: 0 auto;
	width: 90%;
}
.start_title{
	text-align: left;
}
.start_number{
	float: right;
}
.jiantou{
	float: right;
	width: 8px;
	margin-top: 18px;
	margin-left: 10px;
}
.info{
	position: fixed;
	bottom: 20px;
	left: 0;
	right: 0;
	text-align: center;
}
@media (max-width: 320px) {
	.info{
		display: none;
	}
}
	
</style>













