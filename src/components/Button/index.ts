import Button from './src/Button'

Button.install = function (app: any) {
  app.component(Button.name, Button)
}

export { Button }
