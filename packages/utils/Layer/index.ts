import * as Cesium from 'cesium'

type TMapType = 'vec' | 'cva' | 'img' | 'cia' | 'ter' | 'cta' | 'ibo' | 'eva' | 'eia'
/**
 * Cesium 天地图
 * @param viewer
 * @param layer
 * vec：矢量底图、cva：矢量标注、img：影像底图、cia：影像标注
 * ter：地形晕渲、cta：地形标注、eva：矢量英文标注、eia：影像英文标注
 */
const tk = '5088e03edca813572f7203993de9f263'

export function addTMap(viewer: Cesium.Viewer, layer: TMapType) {
  // 添加天地图影像注记底图
  const tMapImagery = new Cesium.WebMapTileServiceImageryProvider({
    url: `http://t0.tianditu.gov.cn/${layer}_w/wmts?tk=` + tk,
    layer,
    style: 'default',
    tileMatrixSetID: 'w',
    format: 'tiles',
    maximumLevel: 18
  })
  viewer.imageryLayers.addImageryProvider(tMapImagery)
}
