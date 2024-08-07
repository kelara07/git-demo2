/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 每一筆定時定額投資參數
 */
export interface RtRegularInvest {
  /** 投資收益金額 */
  benefitAmount?: number;
  /** 結束年度 */
  endYear?: number;
  /** 是否計入退休 */
  isPutInRetire?: boolean;
  /** 每月投入金額 */
  putInValue?: number;
  /** 再投資報酬率 */
  refillRate?: number;
  /**
   * 投資項目名稱
   * @nullable
   */
  regularName?: string | null;
  /** 預設報酬率 */
  setRate?: number;
  /** 開始年度 */
  startYear?: number;
}
