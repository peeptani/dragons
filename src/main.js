import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue'
import { store } from './store/index.js';

Vue.use(BootstrapVue);

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
