import { ApiService } from '../apiService';
import { AuthenticateDto } from './dto/authenticateDto';
import { AuthenticateResult } from './result/authenticateResult';

/**
 * 提供登入認證服務的類別。
 * @method authenticateAsync(loginDto: AuthenticateDto) - 使用者登入認證方法，發送登入請求並返回結果。
 */
class TokenAuthService {
  /** 登入認證的 API URL */
  private readonly loginUrl = '/TokenAuth/Authenticate';

  /**
   * 建構 TokenAuthService 實例。
   * @param {ApiService} apiService - 用於進行 API 呼叫的服務。
   */
  constructor(private apiService: ApiService) {}

  /**
   * 使用者登入認證方法，發送登入請求並返回結果。
   * @param {AuthenticateDto} loginDto - 登入請求的資料傳輸物件。
   * @returns {Promise<AuthenticateResult>} 登入結果。
   */
  async authenticateAsync(
    loginDto: AuthenticateDto,
  ): Promise<AuthenticateResult> {
    const result = await this.apiService.post<AuthenticateDto>(
      this.loginUrl,
      loginDto,
    );

    const loginResult: AuthenticateResult = result.data;

    return loginResult;
  }
}

/** 實例化 ApiService */
const apiService = new ApiService();

/** 實例化並導出 TokenAuthService */
export const tokenAuthService = new TokenAuthService(apiService);
