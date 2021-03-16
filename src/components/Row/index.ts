import { App } from 'vue'
import Row from './src/Row'

Row.install = function (app: App) {
  app.component(Row.name, Row)
}

export { Row }
