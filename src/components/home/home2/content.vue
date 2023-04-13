<script setup>
import { defineComponent, onMounted, ref, computed, getCurrentInstance, defineProps, inject } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import img from '@constants/img';
import Echart from '@common/echarts/echarts';

const props = defineProps({
	msg: {
		type: String,
		default: 'vue'
	},
	name: String,
	
});
const { proxy } = getCurrentInstance();
const axios = inject('axios');
const count = ref(0);
const store = useStore();
const route = useRoute();
let options = {
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
};
onMounted(() => {
	axios.get(proxy.API.HOME_MAP_GET).then((res) => {
		console.log(res);
	});
	store.commit("homeOptions/setInfo", 789);
});
const info = computed(() => {
	return store.state.homeOptions;
});
</script>


<template>
	<h1>{{ msg }}</h1>
	<img alt="Vue logo" :src="img.logo">
	<div>{{ info }} {{ name }}</div>
	<Echart id="charts" height="40vh" width="100%" :options="options" />
	<button type="button" @click="count++">
		count is: {{ count }}
	</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
