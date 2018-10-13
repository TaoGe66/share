<template>
	<div class="start">
		<ul>
			<li class="list" v-for="(item,index) in startData" @click="detail(item)">
				<img :src="item.avatar" alt="" class="touxiang">
				<span class="name">{{item.name}}</span>
				<img src="../../static/images/go@2x.png" alt="" class="jiantou">
				<span class="date">{{item.date | formDate}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				startData: [
					{
						id: '1',
						avatar: '../../static/images/touxiang.jpg',
						name: '会飞的鱼',
						date: 1470752468900,
					},
					{
						id: '2',
						avatar: '../../static/images/touxiang.jpg',
						name: '大猪',
						date: 1470759288900,
					},
					{
						id: '3',
						avatar: '../../static/images/touxiang.jpg',
						name: '西门吹风',
						date: 1445752468980,
					},
				],
				selected: this.$route.query.selected,
			}
		},
		methods:{
			detail(item){
				this.$router.push({path: '/detail/'+item.id, query: {selected: this.selected}});
			},
		},

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
.jiantou{
	float: right;
	width: 8px;
	margin-top: 22px;
	margin-left: 10px;
}
	
</style>













