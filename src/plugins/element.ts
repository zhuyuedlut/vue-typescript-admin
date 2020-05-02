import Vue from 'vue';
import ElementUI from 'element-ui';
import i18n from "@/lang";
import '@/styles/element-variables.scss'

Vue.use(ElementUI, {
    i18n: (key: string, value: string) => i18n.t(key, value)
});