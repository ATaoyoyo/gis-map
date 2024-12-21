import type { Viewer } from 'cesium'

declare global {
  interface Window {
    __Viewer: Viewer
  }
}

export * from './GisMap'
export * from './GisController'
export * from './ArcgisLayer'
