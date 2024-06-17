/**
 * 使用者登入的資訊要傳遞的數據
 * @property {string} userNameOrEmailAddress 使用者的使用者名稱或電子郵件地址
 * @property {string} password 用戶的密碼
 * @property {boolean} rememberClient 指示是否應記住客戶端
 */
export interface AuthenticateDto {
  /** 使用者的使用者名稱或電子郵件地址 */
  userNameOrEmailAddress: string;
  /** 用戶的密碼 */
  password: string;
  /** 指示是否應記住客戶端 */
  rememberClient: boolean;
}
