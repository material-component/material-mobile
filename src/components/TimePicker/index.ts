import { App } from 'vue'
import TimePicker from './src/TimePicker'

TimePicker.install = function (app: App) {
  app.component(TimePicker.name, TimePicker)
}

export { TimePicker }
