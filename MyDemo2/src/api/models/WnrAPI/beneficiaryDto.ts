/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 受益人
 */
export interface BeneficiaryDto {
  /**
   * 分配方式
   * @minLength 0
   * @maxLength 6
   * @nullable
   */
  assignType?: string | null;
  /**
   * 受益类型
   * @minLength 0
   * @maxLength 12
   * @nullable
   */
  beneType?: string | null;
  /**
   * 姓名
   * @minLength 0
   * @maxLength 16
   * @nullable
   */
  bfyName?: string | null;
  /** @nullable */
  guid?: string | null;
  /**
   * 證件號碼
   * @minLength 0
   * @maxLength 20
   * @nullable
   */
  id?: string | null;
  policyGuid?: string;
  /**
   * 比例
   * @minLength 0
   * @maxLength 10
   * @nullable
   */
  rate?: string | null;
  /**
   * 關係
   * @minLength 0
   * @maxLength 12
   * @nullable
   */
  relation?: string | null;
  /**
   * 其他關係
   * @nullable
   */
  relationOther?: string | null;
  /**
   * 順序
   * @minLength 0
   * @maxLength 6
   * @nullable
   */
  sNo?: string | null;
}