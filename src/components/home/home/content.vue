<script setup>
import { onMounted, ref, computed, getCurrentInstance, defineProps } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import * as echarts from 'echarts';

const props = defineProps({
	name: String,
});
const count = ref(0);
const store = useStore();
const route = useRoute();
const { proxy } = getCurrentInstance();
onMounted(() => { // 需要获取到element,所以是onMounted的Hook
	proxy.global.USER_TOKEN = '123';
	let myChart = echarts.init(document.getElementById("myChart123"));
	// 绘制图表
	myChart.setOption({
		xAxis: {
			data: ["4-3", "4-4", "4-5", "4-6", "4-7", "4-8", "4-9"]
		},
		yAxis: {},
		series: [
			{
				name: "用户量",
				type: "line",
				data: [8, 15, 31, 13, 15, 22, 11]
			}
		]
	});
	window.onresize = function () { // 自适应大小
		myChart.resize();
	};
});
const info = computed(() => {
	return store.state.homeOptions;
});
</script>


<template>
	<div id="myChart123" :style="{width: '1500px', height: '550px'}" />
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
