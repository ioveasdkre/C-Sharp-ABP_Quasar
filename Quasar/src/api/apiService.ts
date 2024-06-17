import { api } from 'boot/axios';

/**
 * 提供通用 API 服務的類別。
 * @method get(url: string): Promise<any> - 發送 GET 請求並返回結果。
 * @method post<T>(url: string, data?: T): Promise<any> - 發送 POST 請求並返回結果。
 */
export class ApiService {
  /**
   * 發送 GET 請求並返回結果。
   * @param {string} url - 請求的 URL。
   */
  async get(url: string) {
    return await api.get(url);
  }

  /**
   * 發送 POST 請求並返回結果。
   * @param {string} url - 請求的 URL。
   * @param {T | null} [data=null] - 請求的資料，預設為 null。
   */
  async post<T>(url: string, data: T | null = null) {
    return await api.post(url, data);
  }
}
