import axios from 'axios'

const axiosServer = axios.create({
  timeout: 1000
})

// request拦截器
axiosServer.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token') || '';
  if (token) {
    config.headers.token = token;
  }
  return config;
}, (err) => {
  return Promise.reject(err);
});

// respone拦截器
axiosServer.interceptors.response.use((response) => {
  const res = response;
  // console.log('interceptors=>', res);
  if (!(res && res.data)) {
    return Promise.reject(res);
  }
  return res.data
}, (error) => {
  // console.log('interceptors response error=>', error); // for debug
  const err = error;
  return Promise.reject(err);
});


export default axiosServer;