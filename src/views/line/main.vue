<script setup>
import lineContent from '@components/line/main/content.vue';
import lineLeft from '@components/line/main/left.vue';
import lineRight from '@components/line/main/right.vue';
</script>

<template>
	<set-title title="首页">
		<div>
			<div class="g-flex g-jc-sb">
				<line-left name="内容" />
				<line-right name="内容" />
			</div>
			<line-content name="内容" />
		</div>
	</set-title>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
