<template>
	<div :class="['gis-controller', position]">
		<div class="gis-reset" @click="onReset">
			<img class="icon" :src="home" alt="">
		</div>

		<div class="gis-compass" @click="onCompass">
			<img class="icon" :src="compass" alt="">
		</div>

		<div class="gis-controller__zooms">
			<div class=" gis-zoom-in" @click="onZoomIn">
				<img class="icon" :src="inPng" alt="">
			</div>
			<div class=" gis-zoom-out" @click="onZoomOut">
				<img class="icon" :src="out" alt="">
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type {GisControllerProps, GisControllerEmits} from './types.ts'
import compass from './assets/compass.png'
import home from './assets/home.png'
import inPng from './assets/in.png'
import out from './assets/out.png'

defineOptions({
	name: 'GisController',
})

const viewer = window.__Viewer

withDefaults(defineProps<GisControllerProps>(), {
	position: 'bottom-right',
})
const emits = defineEmits<GisControllerEmits>()


const onReset = () => {
	
	emits('reset-zoom')
}
const onCompass = () => {
	emits('compass')
}
const onZoomIn = () => {
	viewer.camera.zoomIn(1000)
	emits('zoom-in')
}
const onZoomOut = () => {
	viewer.camera.zoomOut(1000)
	emits('zoom-out')
}
</script>

<style scoped>
.gis-controller {
	position: absolute;
	z-index: 99;

	&.top-left {
		top: 10px;
		left: 10px;
	}

	&.top-right {
		top: 10px;
		right: 10px;
	}

	&.bottom-left {
		bottom: 10px;
		left: 10px;
	}

	&.bottom-right {
		bottom: 10px;
		right: 10px;
	}

	.icon {
		width: 24px;
		height: 24px;
		user-select: none;
	}

	.gis-reset, .gis-compass {
		margin-bottom: 16px;
	}

	.gis-reset, .gis-compass, .gis-zoom-in, .gis-zoom-out {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 6px;
		background: #fafafa;
		cursor: pointer;
	}

	.gis-controller__zooms {
		background: #fafafa;
		border-radius: 6px;
	}
}
</style>
