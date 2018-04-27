// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Vuei18n from 'vue-i18n'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

Vue.use(Vuei18n)
// 默认字体香港繁体
let defaultLang = 'zh-cn'
// 获取系统语言
let systemLang = navigator.language
// 如果是英文，则切换到英文，否则默认中文
if (systemLang.indexOf('en') > -1) {
  defaultLang = 'en-cn'
}
const i18n = new Vuei18n({
  locale: defaultLang,
  messages: {
    'zh-cn': require('./static/data/zh-cn'),
    'en-cn': require('./static/data/en-cn')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
