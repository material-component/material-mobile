import Overlay from './src/Overlay'

Overlay.install = function (app: any) {
  app.component(Overlay.name, Overlay)
}

export { Overlay }
