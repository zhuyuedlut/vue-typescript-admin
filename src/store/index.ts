import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { ISettingsState } from './modules/settings'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState
  settings: ISettingsState
}

export default new Vuex.Store<IRootState>({});
