import type { AxiosRequestConfig } from 'axios'
import axios, { type Method } from 'axios'
import router from '@/router'
// 1. 新axios实例，基础配置
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 3000000,
  withCredentials: true
})

instance.interceptors.request.use((config) => {
  if (config.url?.startsWith('/WnrRptService')) {
    config.baseURL = import.meta.env.VITE_REPORT_API_BASE_URL
  } else if (config.url?.startsWith('/GIFW')) {
    config.url = '/InsProduct' + config.url.slice('/GIFW'.length)
  }

  return config
})

// 2. 请求拦截器，携带token
instance.interceptors.request.use((config) => {

  // if (config.allowAnonymous) {
  //   // 若存在 token，则放置到 header 内。FIX: 主页轮播图在自动登出后不显示的问题
  //   if (store.user?.Token) {
  //     config.headers['Authorization'] = `Bearer ${store.user.Token}`
  //   }
  //   return config
  // }

  return new Promise((resolve, reject) => {
  })
})

// delete this!
instance.interceptors.response.use(
  (res) => {
    ;(globalThis as any)[Symbol.for('axios')] = res
    return res.data
  },
  (error) => {
    if (error?.response && error.response.status == 403) {
      localStorage.removeItem('lineFlag')
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export function checkSession() {
  return new Promise<string>((resolve, reject) => {
    console.log(resolve);
  })
}

type Data<T> = {
  [x: string]: any
  pageInfo: any
  datas: T
  code: number
  message: string
  data: T
  Token: string
  id: string
  account: string
  mobile: string
  avatar: string
  identityNo: string
  password: string
  RefreshToken: string
  newPassword: string
  Expires: string
}
// 4. 请求工具函数
export const request = <T>(
  url: string,
  method: Method = 'get' || 'post',
  submitData?: object,
  config?: AxiosRequestConfig
) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData,
    ...config
  })
}

export { instance }

// add a second `options` argument here if you want to pass extra options to each generated query
export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = axios.CancelToken.source()
  const promise = instance({
    ...config,
    ...options,
    cancelToken: source.token
  })

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Operation was cancelled.')
  }

  return promise as any
}
