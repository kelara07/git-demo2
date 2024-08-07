/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

export interface PolicyServiceD {
  /** 服務日 */
  actDate: string;
  /**
   * 內容
   * @minLength 1
   */
  content: string;
  /** @nullable */
  guid?: string | null;
  /** 保单Id */
  policyGuid: string;
  /**
   * 類型(保全, 收費, 理賠, 其他, 繳費資訊, 資料變更)
   * @minLength 1
   */
  type: string;
}
