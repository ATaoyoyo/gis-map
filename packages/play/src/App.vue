<script setup lang="ts"></script>

<template>
	<div id="app">
		<GisMap>
			<GisController position="top-right" />
			<ArcgisLayer />
		</GisMap>
		<!-- <OlMap /> -->
	</div>
</template>

<style scoped>
#app {
	width: 100vw;
	height: 100vh;
}
</style>
