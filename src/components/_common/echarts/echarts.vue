<script setup>
import { onMounted, defineProps } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
	id: {
		type: String,
		defalut: 'charts'
	},
	width: {
		type: String,
		defalut: '100%'
	},
	height: {
		type: String,
		defalut: '40vh'
	},
	options: Object,
});
const _init = () => {
	let myChart = echarts.init(document.getElementById(props.id));
	// 绘制图表
	myChart.setOption(props.options);
	window.onresize = function () { // 自适应大小
		myChart.resize();
	};
};
onMounted(() => { // 需要获取到element,所以是onMounted的Hook
	_init();
});
</script>


<template>
	<div :id="id" :style="{width, height}" />
</template>

<style scoped>
</style>
