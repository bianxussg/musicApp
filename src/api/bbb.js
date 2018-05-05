/**
 * Created by Administrator on 2018/3/25/025.
 */
import {commonParams, options} from './config'
import axios from 'axios'


export function getB() {
  const url = '/api/getB'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url,{
    params: data
  }).then((res)=>{
    return Promise.resolve(res.data)
  })
}
