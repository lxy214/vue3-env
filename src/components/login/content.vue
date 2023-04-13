<script setup>
import { defineComponent, onMounted, ref, computed, getCurrentInstance, defineProps } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import API from '@constants/api/root';
import img from '@constants/img';

const props = defineProps({
	name: String,
});
const count = ref(0);
const store = useStore();
const route = useRoute();
onMounted(() => {
	const { proxy } = getCurrentInstance();
	proxy.$message.success("mesage");
});
</script>


<template>
	<h1>{{ msg }}</h1>
	<img alt="Vue logo" :src="img.logo">
	<div>{{ msg }}</div>
	<p>
		Recommended IDE setup:
		<a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
		+
		<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
	</p>

	<p>
		<a href="https://vitejs.dev/guide/features.html" target="_blank">
			Vite Documentation
		</a>
		|
		<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
	</p>

	<button type="button" @click="count++">
		count is: {{ count }}
	</button>
	<el-button>Default</el-button>
	<el-button type="primary">
		Primary
	</el-button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
