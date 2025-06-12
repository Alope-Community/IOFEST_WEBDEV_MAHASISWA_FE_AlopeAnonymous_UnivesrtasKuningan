import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

createApp(App).mount("#app");
const app = createApp(App);
app.use(router);
app.use(ToastPlugin);
app.mount("#app");
