import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import messages from './translation/translation';

Vue.use(VueI18n);

var der = 'fr' ;
if (localStorage.getItem('lang')) {
                der=localStorage.getItem('lang');
}
// localStorage.setItem('lang','fr');

const i18n = new VueI18n({
  locale: der,
  messages, // set locale messages
})



import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'

Vue.prototype.$apiAdress = 'http://127.0.0.1:8000'
Vue.config.performance = true
Vue.use(CoreuiVue)


Vue.use(VueI18n)


new Vue({
  el: '#app',
  router,
  store,  
  icons,
  i18n,
  template: '<App/>',
  components: {
    App
  },
})
