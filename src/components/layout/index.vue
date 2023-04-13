<script setup>
import Footer from './footer.vue';
import Top from './top.vue';
</script>
<template>
	<div>
		<Top />
		<!-- <router-view name="top" /> -->
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component :is="Component" />
			</keep-alive>
		</router-view>
		<!-- <router-view name="footer" /> -->
		<Footer />
	</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}
</style>
