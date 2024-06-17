/**
 * 錯誤模型介面
 * @property {number} code - 錯誤代碼
 * @property {string} message - 錯誤訊息
 * @property {string} details - 錯誤詳細資訊
 * @property {unknown} validationErrors - 驗證錯誤
 */
interface ErrorModel {
  /** 錯誤代碼 */
  code: number;
  /** 錯誤訊息 */
  message: string;
  /** 錯誤詳細資訊 */
  details: string;
  /** 驗證錯誤 */
  validationErrors: unknown;
}

/**
 * API 結果泛型介面
 * @property {T | null} result - 結果資料，可能為空
 * @property {string | null} targetUrl - 目標網址，可能為空
 * @property {boolean} success - 是否成功
 * @property {ErrorModel | null} error - 錯誤資訊，可能為空
 * @property {boolean} unAuthorizedRequest - 是否未經授權的請求
 * @property {boolean} __abp - 是否符合 ABP 標準
 */
export interface ApiResult<T> {
  /** 結果資料，可能為空 */
  result: T | null;
  /** 目標網址，可能為空 */
  targetUrl: string | null;
  /** 是否成功 */
  success: boolean;
  /** 錯誤資訊，可能為空 */
  error: ErrorModel | null;
  /** 是否未經授權的請求 */
  unAuthorizedRequest: boolean;
  /** 是否符合 ABP 標準 */
  __abp: boolean;
}
