import { App } from 'vue'
import Icon from './src/Icon'

Icon.install = function (app: App) {
  app.component(Icon.name, Icon)
}

export { Icon }
