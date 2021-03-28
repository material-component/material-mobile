import Form from './src/Form'

Form.install = function (app: any) {
    app.component(Form.name, Form)
}

export { Form }
