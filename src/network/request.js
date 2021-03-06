import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  //拦截器
/*  instance.interceptors.request(config => {
    return config
  },err => {
    return err
  })

  instance.interceptors.response(res => {
    return res
  },err => {
    return err
  })*/
  return instance(config)
}