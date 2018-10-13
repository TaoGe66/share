<template>
	<div class="count">
		<div v-title>已累计</div>

		<h1 class="title" v-if="selected==1">你已累计星客<span>{{startNumber}}个</span></h1>
		<h1 class="title" v-if="selected==2">你已累计客户<span>{{startNumber}}个</span></h1>
		<h1 class="title" v-if="selected==3">你已累计关联小伙伴<span>{{startNumber}}个</span></h1>

		<start v-if="selected==1"></start>
		<client v-if="selected==2"></client>
		<partner v-if="selected==3"></partner>
		
	</div>
</template>

<script>
	// import 
	export default {
		data(){
			return {
				startNumber: '265',
				selected: this.$route.query.selected,
			}
		},
		components: {
			start: resolve => {
				require(['../components/start.vue'],resolve)
			},
			client: resolve => {
				require(['../components/client.vue'],resolve)
			},
			partner: resolve => {
				require(['../components/partner.vue'],resolve)
			},
		},

	}
</script>

<style scoped>
.count{
  width:100%;
  height:100vh;
}
.title{
	width: 100%;
	height: 60px;
	line-height: 60px;
	background-color: rgb(41,130,212);
	padding: 0 20px;
	color: white;
}
.title>span{
	float: right;
}
	
</style>













