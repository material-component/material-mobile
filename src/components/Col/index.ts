import Col from './src/Col'

Col.install = function (app: any) {
  app.component('Col', Col)
}

export { Col }
