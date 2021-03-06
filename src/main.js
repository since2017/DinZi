// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Row,Col} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'optiscroll/dist/optiscroll.css'
import './assets/css/animate.css'
import Optiscroll from 'optiscroll'
import JQuery from 'jquery'
// import Global from './assets/js/global.js'

Vue.use(Row)
Vue.use(Col)

window.$ = JQuery;
Vue.config.productionTip = false;
//默认进入首页
router.beforeEach(function(to,from,next){
	  if (to.path === '/' || to.path === '') {
        next({
            path: '/case'
        })
    } else {
        next()
    }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
