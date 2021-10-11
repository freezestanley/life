import request from '../../config';
// import * as Types from './interface';
// 重新提交理赔单到tpa
export const detail = async () => request.post(`/api/configs/detail`);
export default {
  detail,
};
