import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
    timeout: 5000,
    baseURL: 'http://localhost:8080',
})
instance.interceptors.request.use(config => {
    /*config.data = JSON.stringify(config.data)*/
    config.headers = {
        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config
})
export default instance

/*main.js*/
import axios from './config/axios'
Vue.prototype.$http = axios