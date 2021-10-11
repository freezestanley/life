/**
 * 响应拦截器
 * completed 一定是最后的chain
 */
import { shareHandle } from "./shareHandle"
import tokenHandle from "./tokenHandle"
import toastHandle from "./toastHandle"
const handler = {
  flag: false, // 为true时，说明拦截生效可能重定向或做其他处理了
  json: null,
  response: null,
  init: async response => {
    handler.json = await response.json()
    handler.response = response
    return handler
  },
  shareHandle: () => {
    if (handler.flag) return handler
    handler.flag = shareHandle(handler.json.code)
    return handler
  },
  tokenHandle: () => {
    if (handler.flag) return handler
    handler.flag = tokenHandle(handler.response)
    return handler
  },
  toastHandle: () => {
    if (handler.flag) return handler
    handler.flag = toastHandle(handler.response, handler.json)
    return handler
  },
  completed: () => {
    return handler.flag
  }
}
export default handler
