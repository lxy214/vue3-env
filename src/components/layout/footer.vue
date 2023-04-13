<script setup>
import { useRoute, useRouter } from 'vue-router';

let list = [
	{
		url: '/',
		icon: '',
		name: '首页'
	},
	{
		url: '/flow',
		icon: '',
		name: '客流'
	},
	{
		url: '/line',
		icon: '',
		name: '线路'
	},
	{
		url: '/car',
		icon: '',
		name: '车辆'
	}
];
const route = useRoute();
const selectIndex = (path) => {
	let current = route.path.split('-') || [];
	if (current && current[0] == path) return true;
};
</script>
<template>
	<div class="v-layout-footer">
		<div class="_box">
			<router-link v-for="(item, index) in list" :key="index" class="g-flex-cc" :to="item.url">
				<div class="__btn" :class="{'__active': selectIndex(item.url)}">
					{{ item.name }}
				</div>
			</router-link>
		</div>
	</div>
</template>

<style lang="scss">
.v-layout-footer {
	position: fixed;
	bottom: 50px;
	left: 50%;
	transform: translate(-50%, 0);
	width: 736px;
	height: 90px;
	background: rgba(0,0,0,0.5);
	border-radius: 10px;
	z-index: 1000;
	._box {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90px;
		&>a{
			flex: 1;
			color: #fff;
			
			.__btn {
				border: 2px solid #cdcdcd;
				padding: 0px 20px;
				width: 80px;
				height: 32px;
				line-height: 32px;
			}
			.__active {
				color: #00a5ff; 
				border: 2px solid #00a5ff;
			}
			
		}
	}



}

</style>
