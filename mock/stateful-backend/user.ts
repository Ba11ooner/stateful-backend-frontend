import {Request, Response} from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  //登录
  'POST /user/login': async (req: Request, res: Response) => {
    const {
      userAccount,
      userPassword
    } = req.body;
    await waitTime(200);
    if (userPassword === 'ant.design' && userAccount == 'user') {
      res.send({
        code: 200,
        data: {
          "createTime": "2022-01-01",
          "id": 1,
          "isDelete": 0,
          "updateTime": "2022-01-02",
          "userAccount": "user",
          "userPassword": "",
          "userRole": "user"
        },
        description: '',
        message: 'ok',
      })
      return
    }
    if (userPassword === 'ant.design' && userAccount == 'admin') {
      res.send({
        code: 200,
        data: {
          "createTime": "2022-01-01",
          "id": 2,
          "isDelete": 0,
          "updateTime": "2022-01-02",
          "userAccount": "admin",
          "userPassword": "",
          "userRole": "admin"
        },
        description: '',
        message: 'ok',
      })
      return
    }
    res.send({
      code: 40000,
      data: {},
      description: '用户不存在或密码错误',
      message: '请求参数错误',
    })
  },

  //获取已登录用户信息
  'GET /user/get/login': (req: Request, res: Response) => {
    res.send({
      code: 200,
      data: {
        "createTime": "2022-01-01",
        "id": 1,
        "isDelete": 0,
        "updateTime": "2022-01-02",
        "userAccount": "testUser",
        "userPassword": "",
        "userRole": "admin"
      },
      description: '',
      message: 'ok',
    })
    return
  },
}
