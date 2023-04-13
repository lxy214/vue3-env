<template>
	<div class="">
		<slot />
	</div>
</template>
 
<script setup>
import { ref, onMounted, defineProps } from 'vue';

const props = defineProps({
	title: String
});
onMounted(() => {
	document.title = props.title || document.title;
});

</script>

 
<style scoped lang = "sass">
 
</style>