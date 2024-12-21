import { makeInstaller } from "@gis-map/utils";
import components from "./components";

declare global {
	interface Window {
		CESIUM_BASE_URL: string;
	}
}

window.CESIUM_BASE_URL = "./dist/Cesium";

export const installer = makeInstaller(components);
 
export * from "../components";
export default installer;
