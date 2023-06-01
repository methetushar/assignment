require('./bootstrap');
window.Vue = require('vue').default;
require('./helpers/mixins');

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;
window.Validator = Validator;
Vue.use(SimpleVueValidation);

import moment from "moment";

Vue.filter('formatDate', function (value) {
    if (value){
        return moment(value).format('MMMM Do YYYY');
    }else {
        return '-';
    }
});
Vue.use(VueToast,{
    position: 'top-right',
    pauseOnHover:true,
});
import router from "./routes";
Vue.component('DataLoader', require('./components/DataLoader').default)
Vue.component('Nodatafound', require('./components/Nodatafound').default)
Vue.component('app-layout', require('./views/Layout.vue').default);


const app = new Vue({
    el: '#app',
    router,
    data:{
        baseurl: window['application']['baseurl'],
        image_url: window['application']['baseurl'] +'/assets/img/',
    },

});
