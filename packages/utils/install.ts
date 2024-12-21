import type {App, Plugin} from 'vue'
import {each} from 'lodash-es'

type SFCWithInstallOptions<T> = T & Plugin

export function makeInstaller(components: Plugin[]): Plugin {
  return (app: App) => each(components, c => app.use(c))
}

export const withInstall = <T>(component: T) => {
  (component as SFCWithInstallOptions<T>).install = (app: App) => {
    const name = (component as any).name
    app.component(name, component as Plugin)
  }

  return component as SFCWithInstallOptions<T>
}
