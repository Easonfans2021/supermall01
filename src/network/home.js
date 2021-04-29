import {request} from './request'
//将对首页的请求全部挂载到home.js，到时候直接改这里就行
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page,
    }
  })
}