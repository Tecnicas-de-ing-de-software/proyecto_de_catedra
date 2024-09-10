import './bootstrap';
import { createApp } from 'vue';
import ProductList from './components/ProductList.vue';
import ProductForm from './components/ProductForm.vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp({});
app.component('product-list', ProductList);
app.component('product-form', ProductForm);
app.use(BootstrapVue3);
app.mount("#app");