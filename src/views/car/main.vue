<script setup>
import carContent from '@components/car/main/content.vue';
import carLeft from '@components/car/main/left.vue';
import carRight from '@components/car/main/right.vue';
</script>

<template>
	<set-title title="首页">
		<div>
			<div class="g-flex g-jc-sb">
				<car-left name="内容" />
				<car-right name="内容" />
			</div>
			<car-content name="内容" />
		</div>
	</set-title>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
