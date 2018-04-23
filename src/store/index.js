/**
 * Created by dongfangyiheng on 2018/4/23.
 */
import Vue from 'Vue'
import Vuex from 'Vuex'
import action from './action'
import getter from './getter'
import mutation from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
    action,
    getter,
    mutation

})
