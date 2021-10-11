export interface InitRepaymentReq {
  applyNo: string
}
export interface InitRepaymentRes {
  orderNo: string
  payCenterUrl: string
  applyNo: string
  homePageReturnUrl: string // 支付成功后的页面
  businessReturnUrl: string // 支付成功后的页面
}
