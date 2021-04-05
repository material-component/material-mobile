import Rate from './src/Rate'
import Star from './src/Star'
import { App } from 'vue'

Rate.install = function (app: App) {
  app.component(Rate.name, Rate)
  app.component(Star.name, Star)
}

export { Rate }
