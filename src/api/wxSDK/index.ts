import {
  getLocalStorage,
  getQueryString,
  getSessonStorage,
  setCookie,
  setLocalStorage,
  setSessonStorage,
  unionFlag,
} from './util'
// import { prefix } from './modules'
import request from '@/api/config'
import fetch from 'umi-request';
import { BFD_appGetGpsLoc, BFD_checkApp } from './bfdApp'
const APPAPI_URL = process.env.APPAPI_URL
const MALLAPI_URL = process.env.MALLAPI_URL
export const prefix = {
  hostApi: APPAPI_URL,
  hostMallApi: MALLAPI_URL,
  gw: '/gw/app',
  channelId: '' // 频道标记 20=小米
}
// // export { default as GlobalConfigApi } from './modules/globalConfigApi'

declare const window: Window & { jsonCallBack: any }
const prefixStr = prefix.hostApi + prefix.gw
const commonApiUrl = {
  getunionconfigUrl: prefixStr + '/union/getunionconfig',
  getLogoUrl: prefixStr + '/mallunion/getLogo',
  getDefaultAddr: prefixStr + '/trade/addressContract/getDefaultAddress',
  signature: prefixStr + '/permission_valid_config/signature'
}

// Ip定位
function initIpLoaction(urlCity, isInitAddress, reject, resolve) {
  let msg: any = {
    code: -1,
    ApiError: '',
    msg: '',
    data: null
  };
  commonApi.getUserLoactionNow().then((data: any) => {
    if (data.status === 0) {
      setSessonStorage('systemLoaction', JSON.stringify(data.result));
      getAddressSystemCode(data.result.location, urlCity, isInitAddress, reject, resolve);
    } else {
      setCookie('address', msg.data);
      msg.code = data.status;
      msg.ApiError = data.message;
      msg.msg = '获取定位失败!';
      reject(msg);
    }
  });
}

/// app定位
function iniAPPLoaction(res, urlCity, isInitAddress, reject, resolve) {
  try {
    const location = {
      lat: res.lat,
      lng: res.lng
    };
    console.log('iniAPPLoaction1', res);
    setSessonStorage('systemLoaction', JSON.stringify({ location }));
    getAddressSystemCode(location, urlCity, true, reject, resolve);
  } catch (ex) {
    console.log('iniAPPLoaction', ex);
    initBrowseLoaction(urlCity, isInitAddress, reject, resolve);
  }
}
/// 微信定位
function initWXLoaction(urlCity, isInitAddress, reject, resolve) {
  const _window: any = window
  try {
    commonApi.getWXAuth().then((e) => {
      _window.wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: e?.Data?.appId, // 必填，公众号的唯一标识
        timestamp: e?.Data?.timestamp, // 必填，生成签名的时间戳
        nonceStr: e?.Data?.nonceStr, // 必填，生成签名的随机串
        signature: e?.Data?.signature, // 必填，签名
        jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表
      });
      _window.wx.ready(function () {
        _window.wx.getLocation({
          type: 'wgs84',
          success(res) {
            const location = {
              lat: res.latitude,
              lng: res.longitude
            };
            console.log('success', res);
            setSessonStorage('systemLoaction', JSON.stringify({ location }));
            getAddressSystemCode(location, urlCity, isInitAddress, reject, resolve);
          }, fail(res) {
            console.log('微信授权失败', res);
            initBrowseLoaction(urlCity, isInitAddress, reject, resolve);
          }
        });
      });
    });
  } catch (ex) {
    console.log(ex);
    initBrowseLoaction(urlCity, isInitAddress, reject, resolve);
  }
}
// 浏览器定位
function initBrowseLoaction(urlCity, isInitAddress, reject, resolve) {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log('location', location);
      setSessonStorage('systemLoaction', JSON.stringify({ location }));
      getAddressSystemCode(location, urlCity, isInitAddress, reject, resolve);
    },
    (err) => {
      console.log(err);
      initIpLoaction(urlCity, isInitAddress, reject, resolve);
    },
    {
      timeout: 5000 // 5 秒超时
    }
  );
}
export const commonApi = {
  /** 获取百福德相关数据 */
  getUnionConfig: () => {
    const unionCode = unionFlag() || getSessonStorage('dffl_union')
    if (!unionCode && unionCode === 'null') {
      return null
    }
    setSessonStorage('dffl_union', unionCode)
    let params = {
      unionFlag: unionCode ? 1 : 0,
      union: unionCode,
    }
    return request
      .post(commonApiUrl.getunionconfigUrl, { data: params })
      .then(({ Data }) => {
        let union = {
          union_scale: 1,
          union_icon: '',
          union_name: '福豆',
        }
        if (Data) {
          union.union_scale = Data.scale
          union.union_icon = Data.icon
          union.union_name = Data.name
        }
        return union
      })
  },
  /** 初始化百福德基础数据 */
  getLogo: () => {
    const unionCode = unionFlag() || getSessonStorage('dffl_union')
    if (!unionCode || unionCode === 'null') {
      return null
    }
    const params = {
      union: unionCode,
    }
    return request.post(commonApiUrl.getLogoUrl, { data: params })
  },
  /**
   * 获取用户定位信息
   * @param {*} mapKey 腾讯地图key
   */
  getUserLoactionNow: (mapKey: any = 'OE2BZ-6FWRQ-LFQ56-GOGXT-CKES2-OEBS2') =>
    new Promise(function (resolve, reject) {
      window.jsonCallBack = (result) => {
        resolve(result)
      }
      var JSONP = document.createElement('script')
      JSONP.type = 'text/javascript'
      JSONP.src = `//apis.map.qq.com/ws/location/v1/ip?key=${mapKey}&output=jsonp&callback=jsonCallBack`
      JSONP.onerror = reject
      document.getElementsByTagName('head')[0].appendChild(JSONP)
      setTimeout(() => {
        document.getElementsByTagName('head')[0].removeChild(JSONP)
      }, 500)
    }),
  /**
   * 初始化用户位置数据
   * @param {*} isInitAddress  true:根据定位信息初始化;false:根据urlCity初始化
   */
  initUserLoaction: (isInitAddress = true, urlCity = '') =>
    new Promise(function (resolve, reject) {
      let msg: any = {
        code: -1,
        ApiError: '',
        msg: '',
        data: {
          provinceId: 9,
          provinceName: '上海市',
          name: '上海',
          cityName: '上海',
          cityId: 145,
          regionId: 1222,
          regionName: '黄浦区',
          streetId: 16777,
          streetName: '南京东路街道',
        },
      }
      if (
        !isInitAddress &&
        (urlCity === null || urlCity === '' || urlCity === undefined)
      ) {
        msg.code = -1
        msg.msg = '参数:isInitAddress为false时,urlCity不能为空!'
        reject(msg)
        return
      }
      let systemLoaction = sessionStorage.getItem('birthday_systemLoaction')
      if (systemLoaction) {
        getAddressSystemCode(
          JSON.parse(systemLoaction).location,
          urlCity,
          isInitAddress,
          reject,
          resolve
        )

        return
      }

      let ua: any = navigator.userAgent.toLowerCase();
      let v = ua?.match(/MicroMessenger/i);
      try {
        if (BFD_checkApp()) {
          console.log('app定位')
          BFD_appGetGpsLoc(iniAPPLoaction, urlCity, isInitAddress, reject, resolve)
        } else
          if (v && v.length > 0 && v[0] === 'micromessenger') {
            console.log('wx定位')
            initWXLoaction(urlCity, isInitAddress, reject, resolve);
            console.log(urlCity,'urlCity');
            console.log(isInitAddress,'isInitAddress');
            console.log(reject,'reject');
            console.log(resolve,'resolve');



          } else if (window.navigator.geolocation) {
            console.log('浏览器定位')
            initBrowseLoaction(urlCity, isInitAddress, reject, resolve);
          } else {
            console.log('ip定位')
            initIpLoaction(urlCity, isInitAddress, reject, resolve);
          }
      } catch (ex) {
        console.log('catch', ex);
        initIpLoaction(urlCity, isInitAddress, reject, resolve);
      }

      // 调用 腾讯定位
      // commonApi.getUserLoactionNow().then((data: any) => {
      //   if (data.status === 0) {
      //     setLocalStorage('systemLoaction', JSON.stringify(data.result))
      //     // 获取 东福系统里面的地址信息
      //     getAddressSystemCode(
      //       data.result.location,
      //       urlCity,
      //       isInitAddress,
      //       reject,
      //       resolve
      //     )
      //   } else {
      //     setCookie('address', msg.data)
      //     msg.code = data.status
      //     msg.ApiError = data.message
      //     msg.msg = '获取定位失败!'
      //     reject(msg)
      //   }
      // })
    }),

  getDefaultAddress: (param) => {
    return request
      .post(commonApiUrl.getDefaultAddr, { data: param })
      .then((res: any) => {
        if (res.Data && res.Status == '0') {
          return res.Data
        } else {
          return res
        }
      })
  },
  getWXAuth: () => {
    // 1 微信 ; 2 企业微信
    const type = navigator.userAgent.match(/wxwork/i) ? 2 : 1;
    // commonApiUrl.signature
    // return fetch('/api/wx/gw/app/permission_valid_config/signature', {
    //   method: '',
    //   data: {
    //     caller: type, url: window.location.href.split('#')[0]
    //   }
    // }).then(({ Data }) => ({
    //     Data
    //   }))
    return request.post('/wx/gw/app/permission_valid_config/signature', { data: { caller: type, url: window.location.href.split('#')[0] } }).then(({ Data }) => ({
      Data
    }));
  }
}
/**
 * 获取我们系统中对应地址信息
 */
function getAddressSystemCode(
  location,
  urlCity,
  isInitAddress,
  reject,
  resolve
) {

  let msg: any = {
    code: -1,
    ApiError: '',
    msg: '',
    data: null,
  }
  const defaultAddress = {
    provinceId: 9,
    provinceName: '上海市',
    name: '上海',
    cityName: '上海',
    cityId: 145,
    regionId: 1222,
    regionName: '黄浦区',
    streetId: 16777,
    streetName: '南京东路街道',
  }
  const lcal: any = location
  const postUrl = isInitAddress
    ? '/trade/cityContract/getCityLocation'
    : '/trade/addressContract/getDefaultAddress'
  const params = isInitAddress
    ? {
      longitude: lcal.lng,
      latitude: lcal.lat,
    }
    : { id: urlCity }
  request.post(prefixStr + postUrl, { data: params }).then((res: any) => {
    try {
      if (!res.Data) {
        msg.code = res?.code
        msg.ApiError = res?.msg
        msg.data = defaultAddress
        msg.msg = '地址解析失败!'
        reject(msg)
        return
      }
      let addressInfo: any = getAddressReturn(res.Data, isInitAddress)
      commonApi.getDefaultAddress({ id: addressInfo.cityId || addressInfo.id }).then(res => {
        addressInfo = getAddressReturn(res, false)
        // 兼容老逻辑
        setCookie('city', addressInfo.cityId)
        setCookie('address', addressInfo)
        const city = `${addressInfo.cityId || addressInfo.id},${addressInfo.name}`
        setSessonStorage('city', city)
        msg.code = 200
        msg.msg = '初始化成功'
        msg.data = addressInfo
        resolve(msg)
      })

    } catch (e) {
      setCookie('address', defaultAddress)
      msg.code = -1
      msg.data = defaultAddress
      msg.ApiError = e.msg
      msg.msg = '解析地址发生异常!'
      reject(msg)
    }
  })
}
/**
 *
 * @param {*} body 转换内容
 * @param {*} isLocation 是否是经纬度定位,true:经纬度定位,false: cityid定位
 */
export function getAddressReturn(body, isLocation) {
  let data = {}
  if (isLocation) {
    data = body ? body : {}
  } else {
    data = {
      provinceId: body.district && body.district.id,
      provinceName: body.district && body.district.name,
      name: body.city && body.city.name,
      cityName: body.city && body.city.name,
      cityId: body.city && body.city.id,
      regionId: body.region && body.region.id,
      regionName: body.region && body.region.name,
      streetId: body.streets && body.streets.length && body.streets[0].id,
      streetName: body.streets && body.streets.length && body.streets[0].name,
    }
  }
  return data
}
