import Http from '../../services/index'

const baseApi = '/user'

const apis = {
  // 登录
  login: (params) => Http.post(`${baseApi}/login`, params),
  // pv上报
  reportPV: (params) => Http.get('/report/pv', params)
}

export default apis
