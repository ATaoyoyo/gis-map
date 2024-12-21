import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: "src/main.ts",
			name: "GISMAP",
			fileName: "index",
			formats: ["es", "umd"],
		},
	},
	server: {
		proxy: {
			'/arcgis': {
				target: 'http://23.36.101.28:8080/proxy/http',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/arcgis/, ""),
			}
		}
	}
});
