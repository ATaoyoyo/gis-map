import { Viewer, Ion } from "cesium";
import { ArcGisMapServerImageryProviderExt } from "../Arcgis4490";

declare global {
	interface Window {
		CESIUM_BASE_URL: string;
	}
}

Ion.defaultAccessToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxYjVhNDBlNS0wODZhLTQzZjctOTc4OS04NDMyMWNlN2Y0OWEiLCJpZCI6OTE0MDIsImlhdCI6MTY1MTAyMzg1OX0.Cjh1qrRgSmz_J-dFMfaGDK9yq3eVBx4_fP1nS4szZlc";

export const MapViewer = (container: string) => {
	const viewer = new Viewer(container, {
		animation: false,
		baseLayerPicker: false,
		fullscreenButton: false,
		vrButton: false,
		geocoder: false,
		homeButton: false,
		infoBox: false,
		sceneModePicker: false,
		selectionIndicator: false,
		timeline: false,
		navigationHelpButton: false,
		navigationInstructionsInitiallyVisible: false,
		skyBox: false,
		skyAtmosphere: false,
		showRenderLoopErrors: false,
		shadows: false,
		shouldAnimate: true,
		baseLayer: false,
		imageryProvider: new ArcGisMapServerImageryProviderExt({
			url: "/gisapi/http/RES_YXDT_W8W4/90d0bfd81e6e4551b187d5e71af175c6",
		}),
	});

	viewer.cesiumWidget.creditContainer.remove(); // logo
	viewer.scene.screenSpaceCameraController.enableCollisionDetection = false;

	return viewer;
};
