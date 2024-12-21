<template>
	<div class="arcgisLayer"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import type { ArcgisLayerProps } from "./types.ts";
import { ArcGisMapServerImageryProviderExt } from "@gis-map/utils";

defineOptions({
	name: "ArcgisLayer",
});
defineProps<ArcgisLayerProps>();
const viewer = window.__Viewer;

onMounted(() => {
	loadArcgisLayers();
});

const loadArcgisLayers = async () => {
	// for (const layer of props.layers) {
	// 	const imagery = await ArcGisMapServerImageryProvider({url: ""})
	// 	viewer.imageryLayers.addImageryProvider(imagery)
	// }
	const layer1 = "/gisapi/http/RES_YXDT_W8W4/90d0bfd81e6e4551b187d5e71af175c6";
	const layer2 = "/gisapi/http/RES_ZTSJ_9J31/8550799829af4fc0bf1c69fc90f72f41";
	const Imagery1 = new ArcGisMapServerImageryProviderExt({ url: layer1 });
	const Imagery2 = new ArcGisMapServerImageryProviderExt({ url: layer2 });
	viewer.imageryLayers.addImageryProvider(Imagery1);
	viewer.imageryLayers.addImageryProvider(Imagery2);
};
</script>

<style scoped></style>
