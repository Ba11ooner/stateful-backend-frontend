// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {getUrl} from "@/services/url";

const local: string = getUrl();

/** addSample POST /sample/add */
export async function addSampleUsingPOST(
  body: API.SampleAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>(local + '/sample/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteSample POST /sample/delete */
export async function deleteSampleUsingPOST(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseboolean>(local + '/sample/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getSampleById POST /sample/get */
export async function getSampleByIdUsingPOST(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseSampleVO>(local + '/sample/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** list GET /sample/list */
export async function listUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListSampleVO>(local + '/sample/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listSampleByPage POST /sample/list/page */
export async function listSampleByPageUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listSampleByPageUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageSampleVO>(local + '/sample/list/page', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateSample POST /sample/update */
export async function updateSampleUsingPOST(
  body: API.SampleUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>(local + '/sample/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
