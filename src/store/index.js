/**
 * Created by dongfangyiheng on 2018/4/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import state from './state'
import getter from './getter'
import mutation from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  action,
  getter,
  mutation,
  state
})
