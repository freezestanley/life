/**
 * 主要处理接口token过期，token异常的问题
 * 当前端无法处理时, 配合后端返回的
 * 不同渠道的跳转逻辑
 */
import { needLoginErrorCode } from "@/utils/const"
import { history } from "umi"
import { SOURCE } from "@/utils/const"
import { local } from "@/utils/store"
import { SOURCE as SOURCE_ENUM } from "@/typings/enum"
// 不做处理的白名单
const whiteList = ["/login", "/personalinsure/share"]
const redirect = () => {
  // TODO 这段代码可以去掉
  const source = local.getKey(SOURCE),
    { pathname } = history.location
  if (source === SOURCE_ENUM["BFD"]) return history.replace("/login")
  // 商品列表页不处理
  const homeWhiteList = []
  if (homeWhiteList.includes(pathname)) return
  // 官网需处理商详页
  const redirectMap = {}
  redirectMap[pathname] && history.replace(redirectMap[pathname])
}
export default (code: string) => {
  const needLogin = needLoginErrorCode.includes(code)
  const noVerifyPage = whiteList.includes(history.location.pathname)
  if (needLogin && !noVerifyPage) {
    redirect()
    return true
  }
}
