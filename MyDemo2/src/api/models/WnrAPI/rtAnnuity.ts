/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 退休規劃 每一筆年金規劃
 */
export interface RtAnnuity {
  /** 每年年金金額 */
  annuity?: number;
  /**
   * 名稱
   * @nullable
   */
  annuityName?: string | null;
  /** 總金額 */
  benefitAmount?: number;
  /** 年金給付終止年(含) */
  endYear?: number;
  /** 年金給付起始年(民國) */
  startYear?: number;
}
