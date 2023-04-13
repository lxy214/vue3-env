<script setup>
import homeContent from '@components/home/main/content.vue';
import homeLeft from '@components/home/main/left.vue';
import homeRight from '@components/home/main/right.vue';
</script>

<template>
	<set-title title="首页">
		<div>
			<div class="g-flex g-jc-sb">
				<!-- <home-left name="内容" />
				<home-right name="内容" /> -->
			</div>
			<home-content name="内容" />
		</div>
	</set-title>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
