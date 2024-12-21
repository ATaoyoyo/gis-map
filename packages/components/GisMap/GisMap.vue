<template>
	<div id="gis-map" class="gis-map">
		<template v-if="mapLoaded">
			<slot></slot>
		</template>
	</div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, provide, ref } from "vue";
import { addTMap, MapViewer } from "@gis-map/utils";
import { Rectangle } from "cesium";
import { type GisMapContext, GisMapKey } from "@gis-map/utils/config.ts";

import "../../../node_modules/cesium/Build/Cesium/Widgets/widgets.css";

defineOptions({
	name: "GisMap",
});

const mapLoaded = ref(false);
onMounted(async () => {
	const instance = getCurrentInstance();
	const viewer = MapViewer("gis-map");
	mapLoaded.value = true;
	window.__Viewer = viewer;
	if (instance) {
		instance.appContext.config.globalProperties.$VueCesium =
			instance?.appContext.config.globalProperties.$VueCesium || {};
		instance.appContext.config.globalProperties.$VueCesium["gis-map"] = {
			viewer,
		};
	}
	// 视角调整为中国
	viewer.scene.camera.setView({
		destination: Rectangle.fromDegrees(70, 15, 140, 55),
	});
	// 加载天地图
	addTMap(viewer, "img");
	addTMap(viewer, "cia");
	provide<GisMapContext>(GisMapKey, { viewer: viewer });
});
</script>

<style scoped>
#gis-map {
	position: relative;
	width: 100%;
	height: 100%;
}
</style>
