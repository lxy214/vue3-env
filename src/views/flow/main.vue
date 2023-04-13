<script setup>
import flowContent from '@components/flow/main/content.vue';
import flowLeft from '@components/flow/main/left.vue';
import flowRight from '@components/flow/main/right.vue';
</script>

<template>
	<set-title title="首页">
		<div>
			<div class="g-flex g-jc-sb">
				<flow-left name="内容" />
				<flow-right name="内容" />
			</div>
			<flow-content name="内容" />
		</div>
	</set-title>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
