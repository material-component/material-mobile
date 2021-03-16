import { App } from 'vue'
import { Col } from './Col/index'
import { Row } from './Row/index'

function install(app: App): void {
  const packages = [Row, Col]
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}

export { Col, Row }

export default { install }
