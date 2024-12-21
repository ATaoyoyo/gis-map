import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Map from 'gis-map'
import 'gis-map/dist/index.css'

createApp(App).use(Map).mount('#app')
