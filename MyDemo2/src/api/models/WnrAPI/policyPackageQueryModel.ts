/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 保单清单查询
 */
export interface PolicyPackageQueryModel {
  /**
   * 要保人
   * @nullable
   */
  applicant?: string | null;
  /**
   * 保險公司
   * @nullable
   */
  inrCmpy?: string | null;
  /**
   * 主被保人
   * @nullable
   */
  insurer?: string | null;
  pageNum?: number;
  /**
   * 繳別
   * @nullable
   */
  payment?: string | null;
  /**
   * 繳費月份
   * @nullable
   */
  payMonth?: string | null;
  /**
   * 投保日期(訖)
   * @nullable
   */
  policyDateEnd?: string | null;
  /**
   * 投保日期(起)
   * @nullable
   */
  policyDateStart?: string | null;
  /**
   * 保單號碼
   * @nullable
   */
  policyID?: string | null;
  /**
   * 投保月份
   * @nullable
   */
  policyMonth?: string | null;
  /**
   * 保單狀態
   * @nullable
   */
  status?: string | null;
}
