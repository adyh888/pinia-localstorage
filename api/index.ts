import axios from 'axios'
import axiosAdapterUniapp from 'axios-adapter-uniapp'
import { Ac, Dashboard, Dc, Gc, Lc, Mc, Tc, Uc } from '@mew/request'
import { BaseURL } from '../config'
const service = axios.create({
  baseURL: BaseURL(),
  timeout: 10000,
  // @ts-ignore
  adapter: axiosAdapterUniapp
})
// request拦截器
service.interceptors.request.use(
  config => {
    // @ts-ignore
    uni.showLoading({
      title: '数据加载中',
      mask: true
    })
    // config.headers['Content-Type'] = 'application/json;charset=utf-8'
    // let token = storage.get('token') ? storage.get('token') : null
    // if (token) {
    //   config.headers['Authorization'] = 'Bearer ' + token
    // }
    return config
  },
  error => {
    // 请求错误处理
    // @ts-ignore
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    // @ts-ignore
    uni.hideLoading()
    return response
  },
  error => {
    // @ts-ignore
    return Promise.reject(error)
  }
)

export const isDebugMode = true
// console.log(44, api)
export const ac = Ac(service, isDebugMode)
export const dc = Dc(service, isDebugMode)
export const gc = Gc(service, isDebugMode)
export const lc = Lc(service, isDebugMode)
export const mc = Mc(service, isDebugMode)
export const tc = Tc(service, isDebugMode)
export const uc = Uc(service, isDebugMode)
export const dashboard = Dashboard(service, isDebugMode)
