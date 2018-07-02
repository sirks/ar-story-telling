import Vue from 'vue'
import App from './App.vue'
import Home from './views/home/Home.vue'
import E2 from './views/e2/E2.vue'
import E3 from './views/e3/E3.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/e2', component: E2},
    {path: '/e3', component: E3},
    {path: '*', redirect: '/'}
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
