import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Com from '../components/index'
// import '@/sites/assets/styles/reset.scss'
// import '@/sites/assets/styles/md-style.scss'
import DemoBlock from './components/demo-block'
import 'vite-plugin-vuedoc/style.css'
// import { isMobile } from '@/sites/assets/util';

// if (isMobile) {
//   location.replace('demo.html' + location.hash);
// }
createApp(App)
  .component('demo-block', DemoBlock)
  .use(Com)
  .use(router)
  .mount('#app')
