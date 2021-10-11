import { Toast } from "zarm"
/**
 * 接口出现业务错误的时候，toast处理逻辑
 */
/**
 * 加载白名单
 * @param url 请求地址
 * @param path 路由地址
 */
function loadingWhiteList(url: string, path: string) {
  const urls = [
    "employee/h5/group/optional/addFamilyMemberOfInsure",
    "employee/h5/login/getH5UserInfo",
    "employee/personal/queryAccountInfo",
    "employee/h5/group/optional/queryEmployeeOptionalNotice"
  ]
  const paths = ["/employee/addmember"]
  const hasUrl = urls.find(u => {
    return !!~url.indexOf(u)
  })
  const hasPath = paths.find(p => {
    return path.includes(p)
  })
  return hasUrl || hasPath
}

export default (response, json) => {
  if (!json.success) {
    if (!loadingWhiteList(response.url, location.pathname)) {
      // 保存并加入自选不需要弹出提示
      Toast.show(json.message)
    }
  }
  return false
}
