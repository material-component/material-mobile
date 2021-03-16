import { App } from 'vue'
import Col from './src/Col'

Col.install = function (app: App) {
  app.component(Col.name, Col)
}

export { Col }
