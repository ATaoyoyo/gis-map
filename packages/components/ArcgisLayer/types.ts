import {Viewer} from 'cesium'

export interface ArcgisLayerProps {
  viewer: Viewer
  layers?: string[]
}
