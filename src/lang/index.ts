import Vue from 'vue';
import VueI18n from 'vue-i18n';
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './en'
import zhLocale from './zh'
import { getLanguage } from "@/untils/cookies";

Vue.use(VueI18n);

const messages = {
    en: {
      ...enLocale,
      ...elementEnLocale,
    },
    zh: {
        ...zhLocale,
        ...elementZhLocale
    },
}

export const getLocal = () => {
    const cookieLanguage = getLanguage();
    if (cookieLanguage) {
        return cookieLanguage;
    }

    const language = navigator.language.toLowerCase();
    const locales = Object.keys(messages)
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale
        }
    }

    return 'en';
}

const i18n = new VueI18n({
    locale: getLocal(),
    messages,
})

export default i18n;