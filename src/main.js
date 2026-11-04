import Vue from 'vue'
import Vuelidate from 'vuelidate'

import App from './App.vue'
import router from '@/router'

const app = new Vue({
    router,
    Vuelidate,
    render: h => h(App),
}).$mount('#app')

window.app = app
