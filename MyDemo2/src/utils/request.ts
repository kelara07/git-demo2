import axios from 'axios'

// 使用 axios库来创建一个用于发送HTTP请求的实例。
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 300000,
  withCredentials: true
})

// 2. 请求拦截器，携带token
instance.interceptors.request.use((config) => {
  // 检查config.allowAnonymous属性。如果该属性为true,则表示该请求允许匿名访问，直接返回原始的请求配置config
  if (config) {
    return config
  }
// 如果已经登录，则创建一个Promise对象，并在其中执行ping()方法
  return new Promise((resolve, reject) => {
  })
})

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
// 定义一个泛型函数request, 接受一个泛型参数T
export const request = <T>(
  url: string,
  method: any = 'get' || 'post',
  submitData?: object,
  config?: any
) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    // 根据请求方法决定是将数据放在params还是data中
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData,
    ...config
  })
}

export { instance }

// 定义 customInstance 函数，接受一个泛型函数T
export const customInstance = <T>(
  config: any, // Axios请求的配置
  options?: any // 额外的Axios请求配置，可选
): Promise<T> => {
  const source = axios.CancelToken.source()
  const promise = instance({
    ...config,
    ...options,
    cancelToken: source.token // 将取消令牌配置到请求中
  })

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Operation was cancelled.')
  }
  // 返回带有取消令牌的Promise
  return promise as any
}