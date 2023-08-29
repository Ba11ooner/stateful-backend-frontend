// @ts-ignore
/* eslint-disable */
import {request} from 'umi';

// const local: string = "";
const local: string = "http://localhost:8080";

/** addUser POST /user/add */
export async function addUserUsingPOST(body: API.UserAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponselong>(local + '/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** throwBusinessException GET /user/be */
export async function throwBusinessExceptionUsingGET(options?: { [key: string]: any }) {
  return request<any>(local + '/user/be', {
    method: 'GET',
    ...(options || {}),
  });
}

/** deleteUser POST /user/delete */
export async function deleteUserUsingPOST(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseboolean>(local + '/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserById POST /user/get */
export async function getUserByIdUsingPOST(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseUserVO>(local + '/user/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getLoginUser GET /user/get/login */
export async function getLoginUserUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseUserVO>(local + '/user/get/login', {
    //TODO 携带 cookie
    credentials:'include',
    method: 'GET',
    ...(options || {}),
  });
}

/** hello GET /user/hello */
export async function helloUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponsestring>(local + '/user/hello', {
    method: 'GET',
    ...(options || {}),
  });
}

/** listUser GET /user/list */
export async function listUserUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserVO>(local + '/user/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserByPage POST /user/list/page */
export async function listUserByPageUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserByPageUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserVO>(local + '/user/list/page', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** userLogin POST /user/login */
export async function userLoginUsingPOST(
  body: API.UserLoginRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUser>(local + '/user/login', {
    //TODO 携带 cookie
    credentials:'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userLogout GET /user/logout */
export async function userLogoutUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseboolean>(local + '/user/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** throwRuntimeException GET /user/re */
export async function throwRuntimeExceptionUsingGET(options?: { [key: string]: any }) {
  return request<any>(local + '/user/re', {
    method: 'GET',
    ...(options || {}),
  });
}

/** userRegister POST /user/register */
export async function userRegisterUsingPOST(
  body: API.UserRegisterRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>(local + '/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUser POST /user/update */
export async function updateUserUsingPOST(
  body: API.UserUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>(local + '/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
