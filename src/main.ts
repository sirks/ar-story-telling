import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './views/home/Home.vue'
import Give from './views/give/Give.vue'
import Negotiate from './views/negotiate/Negotiate.vue'
import Protest from './views/protest/Protest.vue'
import JumpTheBoat from './views/jump-the-boat/JumpTheBoat.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/give', component: Give},
    {path: '/negotiate', component: Negotiate},
    {path: '/protest', component: Protest},
    {path: '/jump-the-boat', component: JumpTheBoat},
    {path: '*', redirect: '/'}
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
