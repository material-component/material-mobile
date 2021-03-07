import Hello from './components/HelloWorld.vue'
import Mm from './components/Mm.vue'
function install(app: any) {
  app.component(Hello.name, Hello)
  app.component('Mm', Mm)
}

export { Hello, Mm }
export default { install }
