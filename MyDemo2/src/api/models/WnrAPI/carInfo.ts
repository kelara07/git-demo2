/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 车辆
 */
export interface CarInfo {
  /**
   * 排氣量
   * @minLength 0
   * @maxLength 12
   * @nullable
   */
  cc?: string | null;
  /** @nullable */
  cstmGuid?: string | null;
  /**
   * 車輛種類
   * @minLength 0
   * @maxLength 10
   * @nullable
   */
  cType?: string | null;
  /**
   * 駕駛者
   * @minLength 0
   * @maxLength 16
   * @nullable
   */
  driver?: string | null;
  /** @nullable */
  editID?: number | null;
  /**
   * 引擎號碼
   * @minLength 0
   * @maxLength 18
   * @nullable
   */
  engineNo?: string | null;
  /**
   * 廠牌
   * @minLength 0
   * @maxLength 16
   * @nullable
   */
  factory?: string | null;
  guid?: string;
  /**
   * 許可日期
   * @nullable
   */
  licenseDate?: string | null;
  /**
   * 牌照號碼
   * @minLength 0
   * @maxLength 12
   * @nullable
   */
  licensePlate?: string | null;
  /**
   * 製造日期
   * @minLength 0
   * @maxLength 12
   * @nullable
   */
  makerDate?: string | null;
  /**
   * 車型
   * @minLength 0
   * @maxLength 16
   * @nullable
   */
  model?: string | null;
  /** @nullable */
  modifyDate?: string | null;
  /**
   * 可載人數
   * @minLength 0
   * @maxLength 12
   * @nullable
   */
  passenger?: string | null;
  /**
   * 價格
   * @minLength 0
   * @maxLength 16
   * @nullable
   */
  price?: string | null;
}
