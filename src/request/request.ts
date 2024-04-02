// request.ts
import axios from './axios'
import qs from 'qs'

/**
 * @Author: chenbosong
 * @Date: 2022/5/9 19:00
 * @Description: 请求封装
 */
export default class Request {
  /**
   * get方法
   * @param {string} url 路径
   * @param {object} params 参数
   */
  static get = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
      axios.get(url, { params: params }).then((res: any) => {
        if (res && res.status === 200) {
          resolve(res.data)
        }
      }).catch((err: any) => {
        reject(err)
      })
    })
  }

  /**
   * post方法
   * @param {string} url 路径
   * @param {object} params 参数
   */
  static post = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params)).then((res:any) => {
        if (res && res.status === 200) {
          resolve(res.data)
        }
      }).catch((err: any) => {
        reject(err)
      })
    })
  }

  /**
   * put方法
   * @param {string} url 路径
   * @param {object} params 参数
   */
  static put = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
      axios.put(url, qs.stringify(params)).then((res: any) => {
        if (res && res.status === 200) {
          resolve(res.data)
        }
      }).catch((err: any) => {
        reject(err)
      })
    })
  }

  /**
   * delete
   * @param {string} url 路径
   * @param {object} params 参数
   */
  static delete = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      axios.delete(url, qs.stringify(params)).then((res: any) => {
        if (res && res.status === 200) {
          resolve(res.data)
        }
      }).catch((err: any) => {
        reject(err)
      })
    })
  }
}
