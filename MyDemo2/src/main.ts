import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './css/site.css'
import './css/reSite.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000, locale: zhCn })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
