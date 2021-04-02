import Rate from './src/Rate'
import { App } from 'vue'

Rate.install = function (app: App) {
  app.component(Rate.name, Rate)
}

export { Rate }
