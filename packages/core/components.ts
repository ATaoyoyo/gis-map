import type {Plugin} from 'vue'
import {GisMap, GisController, ArcgisLayer} from '@gis-map/components'

export default [GisMap, GisController, ArcgisLayer] as Plugin[]
