



import dfBrid from "df_hybrid"
import Cookies from "js-cookie"
import { setSessonStorage, setLocalStorage } from "./util"
import { Toast } from "antd-mobile"

/**
 * 判断是否是百福德环境
 */
export function BFD_checkApp() {
  return window.navigator.userAgent.indexOf("BFD-APP") > -1
}
/**
 * 加载js依赖文件
 */
export function loadFUNJS() {
  // var script = document.createElement('script');
  // script.type = 'text/javascript';
  // script.async = true;
  // script.src = '//static.dongfangfuli.com/info/bridge/1.0/prd/app_bridge.min.js';
  // document.head.appendChild(script);
  console.log("loadFUNJS11")
}
var timeFun
/**
 * 跳转至app页面
 * @param {*} pathKey 原生页面key
 *  'city'        //城市选择页
    'user'        //个人中心页
    'userdetail'  //个人详情
    'balance'     //账户余额
    'setting'     //设置页
    'about'       //关于
    'feedback'    //意见反馈
 */
export function BFD_goToAppPage(pathKey) {
  try {
    if (timeFun) {
      clearTimeout(timeFun)
    }
    timeFun = setTimeout(() => {
      const params = {
        pageName: pathKey,
        pageData: ""
      }
      console.log("跳转原生", dfBrid)
      dfBrid.DFWUtils.appShowPage(params, function(respData) {
        var infoStr = JSON.stringify(respData)
        console.log("appShowPage", infoStr)
      })
    }, 200)
  } catch (e) {
    console.log("跳转原生异常", e)
    return false
  }
  return true
}
export function BFD_LoginOut() {
  try {
    const params = {
      type: "tokenTimeout"
    }
    console.log("跳转登陆页", dfBrid)
    dfBrid.DFWUtils.appRelogin(params, function(respData) {
      var infoStr = JSON.stringify(respData)
    })
  } catch (e) {
    console.log("跳转登陆页", e)
    return false
  }
  return true
}
export function BFD_appBackToStorehome() {
  try {
    if (timeFun) {
      clearTimeout(timeFun)
    }
    timeFun = setTimeout(() => {
      dfBrid.DFWApp.appBackToStorehome()
    }, 200)
  } catch (e) {
    console.log("跳转原生异常", e)
    return false
  }
  return true
}
export function BFD_changeAppAddress(city, cityId) {
  console.log(`city${city},cityId${cityId}`)
  try {
    const params = {
      city: city, //城市名     必填
      cityId: cityId //城市id    必填
    }
    dfBrid.DFWCity.appSwitchCityInfo(params, function(respData) {
      var infoStr = JSON.stringify(respData)
    })
  } catch (e) {
    console.log("更改原生地址异常", e)
    return false
  }
  return true
}
export function BFD_appGetCityInfo() {
  try {
    dfBrid.DFWCity.appGetCityInfo(function(respData) {
      console.log("bridge", respData)
      const add = Cookies.get("address")
      if (!add) {
        Cookies.set("address", respData.data.address, { expires: 365 })
      }
      return respData.data.address
    })
  } catch (e) {
    console.log("更改原生地址异常", e)
    return {}
  }
}
export function BFD_appGetGpsLoc(
  callBack,
  urlCity,
  isInitAddress,
  reject,
  resolve
) {
  try {
    console.log("appLocation调用app")
    dfBrid.DFWLocation.appGetGpsLoc(function(respData) {
      console.log("appLocation回调", respData)
      let locationInfo = { location: {} }
      let locat = null
      if (respData.data && respData.data.longitude && respData.data.latitude) {
        locat = {
          lng: respData.data.longitude,
          lat: respData.data.latitude
        }
        locationInfo.location = locat
        setLocalStorage("systemLoaction", JSON.stringify(locationInfo))
        setSessonStorage("systemLoaction", JSON.stringify(locationInfo))
      }
      console.log("callBack", locat)
      callBack && callBack(locat, urlCity, isInitAddress, reject, resolve)
      return location
    })
  } catch (e) {
    console.log("获取APP经纬度异常", e)
    return {}
  }
}
/**
 * app分享功能，调用就完事了
 */
export interface AppShareToTypes {
  title?: string
  dec?: string
  linkUrl: string
  thumbnailPic?: string
}
export enum AppShareCodeEnum {
  SUCCESS = "0", // 0 成功
  REQUERY_IS_NULL = "101", // 101 必填数据为空
  DATA_ERROR = "201", // 201 数据格式错误
  PAY_CANCEL = "301", // 301 用户支付取消
  NO_AUTH = "501" // 501 没有授权和授权失败












































































}
export interface AppShareToResTypes {
  code: AppShareCodeEnum
}
export const BFD_appShare = async (
  params: AppShareToTypes
): Promise<AppShareToResTypes> => {
  try{
    return dfBrid.DFWShare.appShare(params)
  }catch(err){
    console.log(err)
  }

}
