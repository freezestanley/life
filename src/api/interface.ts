interface DICTCodeReq {
  code: string
}
interface DICTCodesReq {
  // list: string[]
  idList: string
}
interface UploadResType {
  // 通用上传响应
  ossUrl: string // oss绝对路径
  objectKey: string
}
interface GetOccupationReq {
  insCompanyCode: string
}
interface GetOccupationRes {
  code: string
  dictId: number
  extraInfo: string
  id: number
  list: GetOccupationRes[]
  name: string
  parentId: number // 父级id
  occupationStr: string
}
interface PlanInfoTypes {
  canSelfPay: string
  comboType: string
  comboName: string
  companyId: string
  companyName: string
  mainInsuredId: string
  orderId: string
  subOrderId: string
  insCompanyCode?: string
  hasFamilyProgramme?: string
  selfOptStartTime?: string
  selfOptEndTime?: string
  partyType?: string
  perBudget?: number
  [propName: string]: any
}
interface PlanInfoTypesRes {
  currentStep: "0" | "1" | "2" | "3"
}

interface AccountInfoType {
  id: string
  phoneNumber: string
  isVerified: number | undefined | null
  bfdAccountNo: null
  isUpdatePassword: number
  employeeId: string
  employeeName: string
  gender: "M" | "F"
  isGroupPolicy: string
  isOccupied: string
  autoLogin?: 1 | 0
  [propName: string]: any
}
