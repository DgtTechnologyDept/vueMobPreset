import { post } from '@/utils/http'
const Host = process.env.VUE_APP_HOST + '/home'

/**
 * 查询接口
 * @param {请求参数} param
 */
export function getList(param) {
  return post({
    url: Host + '/getList',
    param
  })
}
