import { App } from 'vue'
import { Col } from './Col/index'
import { Row } from './Row/index'
import { Button } from './Button/index'
import { Icon } from './Icon/index'
import { Rate } from './Rate/index'
import { Overlay } from './Overlay/index'
import { TimePicker } from './TimePicker/index'

function install(app: App): void {
  const packages = [Row, Col, Button, Icon, Rate, Overlay, TimePicker]
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}

export { Row, Col, Button, Icon, Rate, Overlay, TimePicker }

export default { install }
