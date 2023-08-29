// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 向客人问好 GET /sayHi */
export async function sayHiUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sayHiUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<string>('/sayHi', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
