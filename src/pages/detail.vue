<template>
	<div class="detail">
		<div v-title>详情</div>
		
		<div class="header">
			<p class="row1">
				<span class="name">{{name}}</span>
				<img src="../../static/images/daili@2x.png" alt="" class="icon" v-if="selected==1">
				<img src="../../static/images/daili@2x.png" alt="" class="icon" v-if="selected==2">
				<img src="../../static/images/daili@2x.png" alt="" class="icon" v-if="selected==3">
			</p>
			<p class="row2">
				<span>{{date}}</span>已累计<span>{{startNumber}}</span>颗
			</p>
			<div class="row3">
				<p class="level_line">
					<span class="line" :class="{'line1':startNumber==1}" v-if="startNumber==1"></span>
					<span class="line" :class="{'line2':startNumber==2}" v-if="startNumber==2"></span>
					<span class="line" :class="{'line3':startNumber==3}" v-if="startNumber==3"></span>
					<span class="line" :class="{'line4':startNumber==4}" v-if="startNumber==4"></span>
					<span class="line" :class="{'line5':startNumber==5}" v-if="startNumber==5"></span>
					<span class="line" :class="{'line6':startNumber==6}" v-if="startNumber==6"></span>
					<span class="line" :class="{'line7':startNumber==7}" v-if="startNumber==7"></span>
					<span class="line" :class="{'line8':startNumber==8}" v-if="startNumber==8"></span>
					<span class="line" :class="{'line9':startNumber==9}" v-if="startNumber==9"></span>
					<span class="line" :class="{'line10':startNumber==10}" v-if="startNumber==10"></span>
					<span class="line" :class="{'line11':startNumber==11}" v-if="startNumber==11"></span>
					<span class="line" :class="{'line12':startNumber==12}" v-if="startNumber==12"></span>
					<span class="line" :class="{'line13':startNumber==13}" v-if="startNumber==13"></span>
					<span class="line" :class="{'line14':startNumber==14}" v-if="startNumber==14"></span>
					<span class="line" :class="{'line15':startNumber==15}" v-if="startNumber==15"></span>
					<span class="line" :class="{'line16':startNumber==16}" v-if="startNumber==16"></span>
					<span class="line" :class="{'line17':startNumber==17}" v-if="startNumber==17"></span>
					<span class="line" :class="{'line18':startNumber==18}" v-if="startNumber==18"></span>
					<span class="line" :class="{'line19':startNumber==19}" v-if="startNumber==19"></span>
					<span class="line" :class="{'line20':startNumber==20}" v-if="startNumber==20"></span>
				</p>
				<div class="level">
					<p class="level_number">1级</p>
					<p class="level_number">2级</p>
					<p class="level_number">3级</p>
					<p class="level_number">4级</p>
				</div>
			</div>
		</div>

		<!-- tab切换 -->
		<div class="nav">
		    <p class="bar" :style="{borderBottomColor:idx==0?'rgb(41,130,212)':'#fff',color:idx==0?'rgb(41,130,212)':'#999999'}" @click="tab1()">奖励计划</p >
		    <p class="bar" :style="{borderBottomColor:idx==1?'rgb(41,130,212)':'#fff',color:idx==1?'rgb(41,130,212)':'#999999'}" @click="tab2()">升星规则</p>
		    <div class="public_line" style="float:left" ></div>
		</div>

		<!-- 奖励计划 -->
		<div class="reward" v-show="leftBlock">
			<p class="reward_title">文案待定</p>
			<ul style="margin-top: 20px;">
				<li class="list">
					<span class="left">5颗星</span><span class="center"></span><span class="right">返利XX元</span>
				</li>
				<li class="list">
					<span class="left">10颗星</span><span class="center"></span><span class="right">返利XX元</span>
				</li>
				<li class="list">
					<span class="left">15颗星</span><span class="center"></span><span class="right">返利XX元</span>
				</li>
				<li class="list">
					<span class="left">20颗星</span><span class="center"></span><span class="right">返利XX元</span>
				</li>
			</ul>
		</div>

		<!-- 升星规则 -->
		<div class="rule" v-show="rightBlock">
			<p class="reward_title">升星攻略</p>
			<ul style="padding-top: 10px;">
				<li class="rule_list">
					<p class="list_title">我要升5星</p>
					<p class="list_content">巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则</p>
				</li>
				<li class="rule_list">
					<p class="list_title">我要升10星</p>
					<p class="list_content">巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则</p>
				</li>
				<li class="rule_list">
					<p class="list_title">我要升15星</p>
					<p class="list_content">巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则</p>
				</li>
				<li class="rule_list">
					<p class="list_title">我要升20星</p>
					<p class="list_content">巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则巴拉巴拉的一大串规则</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				name: '飞天茅台',
				date: '2018.9',
				startNumber: 18,
				idx:0,
				selected: this.$route.query.selected,
				// rewardData: [],
				leftBlock: true,
				rightBlock: false,
			}
		},
		methods: {
			//tab切换
			tab1(){
				this.idx = 0;
				this.leftBlock = true;
				this.rightBlock = false;
			},
			tab2(){
				this.idx = 1;
				this.leftBlock = false;
				this.rightBlock = true;
			},
		},

	}
</script>

<style scoped>
.nav{
	width:100%;
	height:50px;
	font-size: 16px;
	line-height: 50px;
	overflow: hidden;
	background: #fff;
}
.nav .bar{
	float: left;
	width:50%;
	height:49px;
	text-align: center;
	border-bottom:2px solid #999;
	color:#999999;
}
.public_line{
  width: 100%;
  height: 1px;
  border-top: 1px solid #D9D9D9;
  color: #D9D9D9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.reward,.rule{
	margin: 20px;
	color: rgb(41,130,212)
}
.reward_title{
	font-weight: bold;
}
.list{
	display: flex;
	height: 50px;
	line-height: 50px;
	padding: 0 10px;
}
.center{
	flex: 1;
	margin: 25px 10px 0;
	width: 50%;
	height: 1px;
	background-color: rgb(41,130,212);
	text-align: center;
	vertical-align: top;
}
.rule_list{
	margin-top: 10px;
	padding: 10px;
	border: 1px solid rgb(41,130,212);
	border-radius: 5px;
}
.list_title{
	text-align: center;
}

.detail{
  width:100%;
  height:100vh;
}
.header{
	padding: 20px;
	background-color: rgb(41,130,212);
	color: white;
}
.icon{
	width: 25px;
	float: right;
}
.row2{
	font-size: 14px;
	margin: 30px 0 10px;
}
.level{
	display: flex;
	margin: 0 5px;
	text-align: center;
}
.level_number{
	flex: 1;
	margin-top: 5px;
	font-size: 12px;
}
.level_line{
	width: 100%;
	height: 8px;
	line-height: 8px;
	margin-top: 20px;
	border-radius: 4px;
	background-color: white;
	overflow: hidden;
}
.line{
	display: inline-block;
	height: 20px;
	margin-top: -2px;
	background-color: rgb(90,180,230);
}
.line1{
	width: 5%;
}
.line2{
	width: 10%;
}
.line3{
	width: 15%;
}
.line4{
	width: 20%;
}
.line5{
	width: 25%;
}
.line6{
	width: 30%;
}
.line7{
	width: 35%;
}
.line8{
	width: 40%;
}
.line9{
	width: 45%;
}
.line10{
	width: 50%;
}
.line11{
	width: 55%;
}
.line12{
	width: 60%;
}
.line13{
	width: 65%;
}
.line14{
	width: 70%;
}
.line15{
	width: 75%;
}
.line16{
	width: 80%;
}
.line17{
	width: 85%;
}
.line18{
	width: 90%;
}
.line19{
	width: 95%;
}
.line20{
	width: 100%;
}
	
</style>













