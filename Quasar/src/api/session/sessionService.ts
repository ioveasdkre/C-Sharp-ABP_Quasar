import { ApiService } from '../apiService';
import { GetCurrentLoginInformationsResult } from './result/sessionResult';
import { envConfig } from 'src/config/envConfig';

/**
 * 提供會話相關服務的類別。
 * @method GetCurrentLoginInformationsAsync() - 獲取當前登入資訊的方法，發送請求並返回結果。
 */
class SessionService {
  /** 獲取當前登入資訊的 API URL */
  private readonly getCurrentLoginInformationsUrl = `${envConfig.apiServiceUrl}/Session/GetCurrentLoginInformations`;

  /**
   * 建構 SessionService 實例。
   * @param {ApiService} apiService - 用於進行 API 呼叫的服務。
   */
  constructor(private apiService: ApiService) {}

  /**
   * 獲取當前登入資訊的方法，發送請求並返回結果。
   * @returns {Promise<GetCurrentLoginInformationsResult>} 當前登入資訊結果。
   */
  async GetCurrentLoginInformationsAsync(): Promise<GetCurrentLoginInformationsResult> {
    const result = await this.apiService.get(
      this.getCurrentLoginInformationsUrl,
    );

    const GetCurrentLoginInformationsResult: GetCurrentLoginInformationsResult =
      result.data;

    return GetCurrentLoginInformationsResult;
  }
}

/** 實例化 ApiService */
const apiService = new ApiService();

/** 實例化並導出 SessionService */
export const sessionService = new SessionService(apiService);
