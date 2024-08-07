/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 應繳保費
 */
export interface PolicyForSche {
  /**
   * 要保人
   * @nullable
   */
  applicant?: string | null;
  /** 客户Id */
  cstmGuid?: string;
  guid?: string;
  /**
   * 保險公司(名称)
   * @nullable
   */
  inrcmpy?: string | null;
  /**
   * 繳別(中文名称)
   * @nullable
   */
  payment?: string | null;
  /**
   * 投保日期
   * @nullable
   */
  policyDate?: string | null;
  /**
   * 備註保單號碼
   * @nullable
   */
  policyID?: string | null;
  /**
   * 總保費
   * @nullable
   */
  premiums?: number | null;
}
