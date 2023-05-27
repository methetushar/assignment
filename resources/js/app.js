require('./bootstrap');
window.Vue = require('vue').default;
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast,{
    position: 'top-right',
    pauseOnHover:true,
});
// this.$toast.success(res.data.message);
import router from "./routes";
Vue.component('app-layout', require('./views/Layout.vue').default);


const app = new Vue({
    el: '#app',
    router,
    data:{
        baseurl: laravel.baseurl,
        image_url: laravel.baseurl+'/assets/img/',
    }
});
