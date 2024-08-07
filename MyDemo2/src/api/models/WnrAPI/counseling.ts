/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 主管与辅导
 */
export interface Counseling {
  /**
   * 是否同意被指导
   * @nullable
   */
  allowDirector?: boolean | null;
  /**
   * 直屬主管
   * @nullable
   */
  identityNo?: string | null;
  /** 0:直属主管, 1:辅导对象 */
  type?: number;
  /**
   * 中文姓名
   * @nullable
   */
  userName?: string | null;
}
