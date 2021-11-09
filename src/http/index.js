import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

// 创建请求拦截器
// 接收两个参数 第一个参数：请求拦截要处理得内容，第二个参数：请求失败得要处理得内容
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err, "请求失败");
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 成功响应要做得操作
    return res;
  },
  (err) => {
    console.log(err, "响应失败");
  }
);

/**
 *
 *封装http请求得方法
 * @param {*} [options={}] 默认为一个空对象
 * 需要参数:
 * method 请求方法
 * path 请求路径
 * params 请求参数
 */
function http(options = {}) {
  if (options.method === "get" || options.method === "delete") {
    return instance[options.method](options.path, {
      params: options.params,
    });
  } else if (options.method === "post" || options.method === "put") {
    return instance[options.method](options.path, options.params);
  }
}

export default http;
