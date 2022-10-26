import { createApp } from 'vue'
import router from './router/routers';
import App from './app.vue'

const app = createApp(App);
app.use(router)
app.mount("#z-ui-app")