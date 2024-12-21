import { getCurrentInstance, inject } from "vue";
import { GisMapKey } from "@gis-map/utils/config.ts";
import type { GisMapContext } from "@gis-map/utils/config.ts";

export default function useGisMap() {
	const instance = getCurrentInstance();
	const provides =
		instance?.parent === null
			? instance.vnode.appContext && instance.vnode.appContext.provides
			: (instance?.parent as any)?.provides;
	if (provides) {
		const $vc =
			instance?.appContext.config.globalProperties?.$VueCesium?.["gis-map"];
		if ($vc) {
			return $vc;
		}
		return inject<GisMapContext>(GisMapKey);
	}
}
