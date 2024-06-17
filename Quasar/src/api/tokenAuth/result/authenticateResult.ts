import { ApiResult } from 'src/api/apiResult';

/**
 * 使用者登入回傳資料模型
 * @property {string} accessToken - 存取權杖
 * @property {string} encryptedAccessToken - 加密的存取權杖
 * @property {number} expireInSeconds - 過期秒數
 * @property {number} userId - 使用者 ID
 */
interface AuthenticateModel {
  /** 存取權杖 */
  accessToken: string;
  /** 加密的存取權杖 */
  encryptedAccessToken: string;
  /** 過期秒數 */
  expireInSeconds: number;
  /** 使用者 ID */
  userId: number;
}

/**
 * 使用者登入回傳資料結果
 */
export interface AuthenticateResult extends ApiResult<AuthenticateModel> {}
