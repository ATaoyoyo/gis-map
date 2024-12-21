import {Viewer} from 'cesium'
import type {InjectionKey} from 'vue'

export interface GisMapContext {
  viewer: Viewer
}
export const GisMapKey: InjectionKey<GisMapContext> = Symbol('GisMapKey')

