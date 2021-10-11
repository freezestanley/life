import Cookies from "js-cookie"
import * as Sentry from "@sentry/react"
import { LinkHTMLAttributes } from "react"

export function encodeSearchParams(obj) {
  const params = []

  Object.keys(obj).forEach(key => {
    let value = obj[key]
    // 如果值为undefined我们将其置空
    if (typeof value === "undefined") {
      value = ""
    }
    // 对于需要编码的文本（比如说中文）我们要进行编码
    params.push([key, encodeURIComponent(value)].join("="))
  })

  return params.join("&")
}

/**
 * 日期格式化
 * @param {data} data - 待格式化的时间
 * @param {string} fmt - 格式化形式
 * @returns {string} - 格式化后的时间
 */
export function dateFormat(fmt, date) {
  date = new Date(date)
  let ret
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (const k in opt) {
    ret = new RegExp(`(${k})`).exec(fmt)
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      )
    }
  }
  return fmt
}

/**
 * 千分位 格式化
 * @param {number, string} num - 待格式化金额
 * @returns {string} - 格式化后的金额
 */
export function toThousands(num) {
  num = (num || 0).toString()
  let result = ""
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  return result
}

export function genRandomNums() {
  return Math.floor(Math.random() * 10000000)
}

export function deepClone<T>(obj: T) {
  const objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === "object") {
    Object.keys(obj).forEach(key => {
      if (obj.hasOwnProperty(key)) {
        // eslint-disable-line
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key])
        } else {
          objClone[key] = obj[key]
        }
      }
    })
  }
  return objClone as T
}

export function isFunction(val) {
  return val && typeof val === "function"
}

export function thousandToFormat(num, maximumFractionDigits = 2) {
  if (num === undefined || num === null || num === "null") {
    return 0
  }
  num = Number(num)
  return num.toLocaleString("zh", {
    maximumFractionDigits
  })
}

// 四舍五入百分比
export function toPercent(value, digits) {
  console.log("valuessss", value, typeof value)
  if (value) {
    if (value === "null") {
      return "0%"
    }
    return Number(value).toLocaleString("zh", {
      maximumFractionDigits: digits || 2,
      style: "percent"
    })
  }
  return "0%"
}
// 遍历json树结构
export function findJson(arr, value) {
  const returnedItem = []
  arr.forEach(item => {
    if (item.label == value) {
      for (const i in item.children) {
        returnedItem.push(item.children[i].label)
      }
    }
  })
  return returnedItem
}

// 获取随机字符串
export function randomString() {
  const length = 10
  let result = ""
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
export function formatRMB(num) {
  if (typeof num !== "number") return
  num = Math.round(num)
  const len = num.toString().length
  function fn(str) {
    return (num = Number(str).toString())
  }
  if (len > 0 && len <= 4) {
    return `${num}元`
  }
  if (len <= 8) {
    return `${fn((num / 10000).toFixed(2))}万`
  }
  if (len > 8) {
    return `${fn((num / 100000000).toFixed(2))}亿`
  }
}

export const scrollToAnchor = anchorName => {
  if (anchorName) {
    const anchorElement = document.getElementById(anchorName)
    if (anchorElement) {
      anchorElement.scrollIntoView()
    }
  }
}
// 计算某一个元素距离页面最左边的距离
export function getOffsetLeft(obj) {
  let tmp = obj.offsetLeft
  let node = obj.offsetParent
  while (node != null) {
    tmp += node.offsetLeft
    node = node.offsetParent
  }
  return tmp
}
// 计算某一个元素距离页面最上边的距离
export function getOffsetTop(obj) {
  let tmp = obj.offsetTop
  let node = obj.offsetParent
  while (node != null) {
    tmp += node.offsetTop
    node = node.offsetParent
  }
  return tmp
}

// 判断有几位小数
export function getDecimalNum(str) {
  const decimalIndex = String(str).indexOf(".") + 1
  const count = String(str).length - decimalIndex
  if (decimalIndex > 0) {
    return count
  }
  return 0
}

export function objToArr(obj) {
  const arr = []
  for (const i in obj) {
    arr.push({
      value: parseInt(i),
      label: obj[i]
    })
  }
  return arr
}
/**
 * @description 数组简单比较，不适用 复杂[]
 * @param {*} arr1
 * @param {*} arr2
 */
export function simpleArrCompare(arr1, arr2) {
  const sortArr1 = arr1.sort()
  const sortArr2 = arr2.sort()
  return (
    sortArr1.length === sortArr2.length &&
    sortArr1.every((item, i) => {
      return item === sortArr2[i]
    })
  )
}

/**
 * @description 处理文件流，转成虚拟 a 标签下载
 * @param blob 字节流
 * @param filename
 */
export function createADownload(data, filename = []) {
  const [name, suffix] = filename
  const blob = new Blob([data])
  if ("msSaveOrOpenBlob" in navigator) {
    // ie 兼容
    window.navigator.msSaveBlob(blob, `${decodeURI(name)}.${suffix}`)
    return
  }
  const a = window.document.createElement("a")
  document.body.appendChild(a)
  const downUrl = window.URL.createObjectURL(blob)
  a.href = downUrl
  a.download = `${decodeURI(name)}.${suffix}`
  a.target = "_blank"
  a.click()
  a.remove()
  window.URL.revokeObjectURL(downUrl)
}

// url参数截取
export function getQueryString(name) {
  // const url = window.location.href
  // const name2 = name.replace(/[\[\]]/g, '\\$&')
  // const regex = new RegExp(`[?&]${name2}(=([^&#]*)|&|#|$)`)
  // const results = regex.exec(url)
  // if (!results) return null
  // if (!results[2]) return ''
  // return decodeURIComponent(results[2].replace(/\+/g, ' '))
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, "i")
  const res = window.location.search.substr(1).match(reg)
  if (res !== null) return window.decodeURIComponent(res[2])
  return ""
}
export const getLocationQuery = obj => {
  const queryObj = {}
  Object.keys(obj).forEach(k => {
    queryObj[k] = getQueryString(k)
  })
  return queryObj
}
export function classNames(...argument) {
  return argument.join(" ")
}

/**
 * 设置浏览器title与icon
 * @param item
 * @param iconPath
 */
export function changePageTag(item, iconPath) {
  if (item) {
    document.title = item.title
  }
  if (iconPath) {
    let $favicon: HTMLLinkElement = document.querySelector('link[rel="icon"]')
    if ($favicon !== null) {
      $favicon.href = iconPath
    } else {
      $favicon = document.createElement("link")
      $favicon.rel = "icon"
      $favicon.href = iconPath
      document.head.appendChild($favicon)
    }
  }
}

const TokenKey = "birthday"
const host = window.location.hostname

/**
 * 查询Cookie
 * @param key 关键字
 * @param domain 域名,不填取默认当前host
 */
export function getCookie(key, domain = host) {
  const config = { path: "", domain }
  return Cookies.get(key, config)
}

/**
 * 写入Cookie
 * @param key 关键字
 * @param val 值
 * @param domain 域名,不填取默认当前host
 */
export function setCookie(key, val, domain = host) {
  const config = { path: "", domain }
  // return Cookies.set(key, val, config)
  return Cookies.set(key, val, { expires: 365 })
}
/**
 * 移除Cookie
 * @param key 关键字
 * @param domain 域名,不填取默认当前host
 */
export function removeCookie(key, domain = host) {
  const config = { path: "", domain }
  return Cookies.remove(key, config)
}

export function clearAllCookie() {
  const keys = document.cookie.match(/[^ =;]+(?==)/g)
  if (keys) {
    for (let i = keys.length; i--; ) {
      document.cookie = `${keys[i]}=0;path=/;expires=${new Date(
        0
      ).toUTCString()}` // 清除当前域名下的,例如：m.ratingdog.cn
      document.cookie = `${keys[i]}=0;path=/;domain=${
        document.domain
      };expires=${new Date(0).toUTCString()}` // 清除当前域名下的，例如 .m.ratingdog.cn
      document.cookie = `${
        keys[i]
      }=0;path=/;domain=ratingdog.cn;expires=${new Date(0).toUTCString()}` // 清除一级域名下的或指定的，例如 .ratingdog.cn
    }
  }
}

/**
 * 获取
 * @param key 关键字  withPre 是否带前缀
 */
export function getLocalStorage(key, withPre = true) {
  if (withPre) {
    return localStorage.getItem(`${TokenKey}_${key}`)
  }
  return localStorage.getItem(`${key}`)
}

/**
 * 写入LocalStorage
 * @param key 关键字
 */
export function setLocalStorage(key, val, withPre = true) {
  let data = val
  if (typeof val === "object") {
    data = JSON.stringify(val)
  }
  if (withPre) {
    return localStorage.setItem(`${TokenKey}_${key}`, data)
  }
  return localStorage.setItem(`${key}`, data)
}

/**
 * 移除
 * @param key 关键字
 */
export function removeLocalStorage(key) {
  return localStorage.removeItem(`${TokenKey}_${key}`)
}

/**
 * 清空所有
 * @param key 关键字
 */
export function clearAllLocalStorage() {
  return localStorage.clear()
}

/**
 * 获取GetSessonStorage
 * @param key 关键字
 */
export function getSessonStorage(key) {
  return sessionStorage.getItem(`${TokenKey}_${key}`)
}

/**
 * 写入SetSessonStorage
 * @param key 关键字
 * @param val 值
 */
export function setSessonStorage(key, val) {
  sessionStorage.setItem(`${key}`, val)
  return sessionStorage.setItem(`${TokenKey}_${key}`, val)
}

/**
 * 写入SetSessonStorage
 * @param key 关键字
 * @param val 值
 */
export function removeSessonStorage(key) {
  return sessionStorage.removeItem(`${TokenKey}_${key}`)
}

/**
 * 清空
 * @param key 关键字
 * @param val 值
 */
export function clearAllSessonStorage() {
  return sessionStorage.clear()
}

/**
 * 判断工会头
 */
export function unionFlag() {
  let currentUnionValue
  const union = getQueryString("union")
  const { hostname, pathname } = window.location
  if (union) {
    // URI带union参数的判断是工会链接
    return union
  }
  if (/^corp/.test(pathname) && pathname.match(/union\/\w+/g)) {
    // 测试环境http://corp.m.test03.com/union/lifangfang02/user/login
    const val = pathname.match(/union\/\w+/g)
    currentUnionValue = val && val.length > 0 ? val[0].split("/")[1] : ""
  } else {
    // 正式环境http://www.dbenefit.dongfangfuli.com/bfd_pc/index?union=dbenefit&city=2
    // 测试环境http://union.testzhou.zhouweiwei.qa.psf-dev.com/
    // k8s测试环境http://www.lifangfang02.test01.com/drama_pc/home?city=145&mc=Shows
    // stage环境http://www.rjh.stage.dongfangfuli.com/shop/home?city=145&mc=Shopping
    if (
      (process.env.environment === "test" && /^(?:union)/.test(hostname)) ||
      /^(?:w{3})\.((?!stage)[A-Za-z1-9]{1}(\w|-)+\.)(stage\.)?(\w+\.)(?=com)/.test(
        hostname
      )
    ) {
      currentUnionValue = hostname.split(".")[1]
    } else {
      currentUnionValue = ""
    }

    return currentUnionValue
  }
}

export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}
/**
 * 对象转字符串
 * @param json 对象
 */
export function convertParam(json) {
  if (!json) return ""
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ""
      return `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`
    })
  ).join("&")
}

// 获取工会信息
export function checkUnion() {
  return unionFlag() || getSessonStorage("dffl_union")
}

export const replaceModelValue = model => {
  const keys = Object.keys(model)
  const item = {}
  keys.forEach(key => {
    const val = model[key]
    item[key] = val === null || val === undefined ? "" : model[key]
  })
  return item
}
/**
 * 移除指定参数
 * @param {*} url url地址
 * @param {*} ref 移除参数
 */
export function delUrlParam(url, ref) {
  // 如果不包括此参数
  if (url.indexOf(ref) == -1) return url
  const arr_url = url.split("?")
  const base = arr_url[0]
  const arr_param = arr_url[1].split("&")
  let index = -1
  for (let i = 0; i < arr_param.length; i++) {
    const paired = arr_param[i].split("=")
    if (paired[0] == ref) {
      index = i
      break
    }
  }
  if (index == -1) {
    return url
  }
  arr_param.splice(index, 1)
  return `${base}?${arr_param.join("&")}`
}

/**
 * 错误收集器
 * @param key 标记
 * @param errorMessage 错误信息
 */
export function errorLog(page, key, errorMessage) {
  const { UMI_ENV } = process.env
  try {
    if (UMI_ENV === "prd") {
      const error = {
        page,
        error: `error - [${key}]`,
        data: errorMessage,
        timelog: new Date().toJSON(),
        cookies: document.cookie,
        localStorage,
        sessionStorage
      }
      Sentry.withScope(scope => {
        scope.setExtras(error)
        const eventId = Sentry.captureException(error)
      })
    }
  } catch (e) {
    console.log("error", e)
  }
}
