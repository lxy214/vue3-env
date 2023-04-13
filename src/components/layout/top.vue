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
	<div class="v-layout-top">
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
.v-layout-top {
	position: absolute;
	top: 0;



}

</style>
