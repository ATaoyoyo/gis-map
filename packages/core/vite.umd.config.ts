import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cesium from "vite-plugin-cesium";
import { viteStaticCopy } from "vite-plugin-static-copy";

import { resolve } from "path";

const cesiumPath = "../../node_modules/cesium/Build/Cesium/";
export default defineConfig({
	plugins: [
		vue(),
		cesium({ rebuildCesium: true }),
		viteStaticCopy({
			targets: [
				{
					src: resolve(__dirname, `${cesiumPath}/Cesium.js`),
					dest: resolve(__dirname, "./dist/Cesium"),
				},
				{
					src: resolve(__dirname, `${cesiumPath}/Workers`),
					dest: resolve(__dirname, "./dist/Cesium/Workers"),
				},
				{
					src: resolve(__dirname, `${cesiumPath}/ThirdParty`),
					dest: resolve(__dirname, "./dist/Cesium/ThirdParty"),
				},
				{
					src: resolve(__dirname, `${cesiumPath}/Assets`),
					dest: resolve(__dirname, "./dist/Cesium/Assets"),
				},
				{
					src: resolve(__dirname, `${cesiumPath}/Widgets`),
					dest: resolve(__dirname, "./dist/Cesium/Widgets"),
				},
			],
		}),
	],
	build: {
		outDir: "./dist/umd",
		lib: {
			entry: resolve(__dirname, "./index.ts"),
			name: "GisMap",
			fileName: "index",
			formats: ["umd"],
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				exports: "named",
				globals: {
					vue: "vue",
				},
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === "style.css") return "index.css";
					return assetInfo.name as string;
				},
			},
		},
	},
});
