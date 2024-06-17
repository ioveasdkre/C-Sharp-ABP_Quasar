import { ApiResult } from 'src/api/apiResult';

/**
 * 表示登入回傳資料模型
 * @property {Application} application - 應用程式資訊
 * @property {User} user - 使用者資訊
 * @property {Tenant} tenant - 租戶資訊
 */
export interface GetCurrentLoginInformationsModel {
  /** 應用程式資訊 */
  application: Application;
  /** 使用者資訊 */
  user: User;
  /** 租戶資訊 */
  tenant: Tenant;
}

/**
 * 表示登入回傳資料結果模型
 * @property {Application} application - 應用程式資訊
 * @property {User} user - 使用者資訊
 * @property {Tenant} tenant - 租戶資訊
 */
interface Application {
  /** 應用程式資訊 */
  version: string;
  /** 發行日期 */
  releaseDate: Date;
  /** 租戶資訊 */
  features: Features;
}

/**
 * 表示應用程式功能資訊
 */
interface Features {}

/**
 * 表示租戶資訊
 * @property {string} tenancyName - 租戶名稱
 * @property {string} name - 名稱
 * @property {number} id - 租戶 ID
 */
interface Tenant {
  /** 租戶名稱 */
  tenancyName: string;
  /** 名稱 */
  name: string;
  /** 租戶 ID */
  id: number;
}

/**
 * 表示使用者資訊
 * @property {string} name - 名字
 * @property {string} surname - 姓氏
 * @property {string} userName - 使用者名稱
 * @property {string} emailAddress - 電子郵件地址
 * @property {number} id - 使用者 ID
 */
interface User {
  /** 名字 */
  name: string;
  /** 姓氏 */
  surname: string;
  /** 使用者名稱 */
  userName: string;
  /** 電子郵件地址 */
  emailAddress: string;
  /** 使用者 ID */
  id: number;
}

/** 表示取得目前登入資訊結果 */
export interface GetCurrentLoginInformationsResult
  extends ApiResult<GetCurrentLoginInformationsModel> {}
