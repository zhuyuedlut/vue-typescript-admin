import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { LOGOUT, SUCCESS } from "@/constant/code"
import i18n from "@/utils/i18n"

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use((config) => {
  if (UserModule.token) {
    config.headers['X-Access-Token'] = UserModule.token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  const res = response.data
  if (res.code !== SUCCESS) {
    Message({
      message: res.message || 'Error',
      type: 'error',
      duration: 5 * 1000
    })
  }
  if (LOGOUT.includes(res.code)) {
    MessageBox.confirm(
        i18n.$t('message.login.logout') as string,
        i18n.$t('message.login.title') as string,
        {
          confirmButtonText: i18n.$t('message.login.loginAgain') as string,
          cancelButtonText: i18n.$t('message.login.cancel') as string,
          type: 'warning'
        }
    ).then(() => {
      UserModule.ResetToken()
      location.reload()
    })
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return response.data
  }
}, (error) => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service