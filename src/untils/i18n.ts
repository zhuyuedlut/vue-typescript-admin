import Vue from "vue"
import VueI18n from "vue-i18n"
import { messages, getLocal } from "@/lang";

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: getLocal(),
  messages,
})

export default new Vue({ i18n })