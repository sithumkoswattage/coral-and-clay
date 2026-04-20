import { createApp } from 'vue';
import { createPinia } from 'pinia'; // For the Shopping Cart/Bookmarks bonus
import './style.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');