/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

export interface PolicyService {
  /**
   * 服務日
   * @nullable
   */
  actDate?: string | null;
  /**
   * 內容
   * @minLength 0
   * @maxLength 48
   * @nullable
   */
  content?: string | null;
  guid?: string;
  /** @nullable */
  modifyDate?: string | null;
  /** 保单Id */
  policyGuid?: string;
  /**
   * 類型("保全", "收費", "理賠", "其他", "繳費資訊", "資料變更")
   * @minLength 0
   * @maxLength 10
   * @nullable
   */
  type?: string | null;
}
