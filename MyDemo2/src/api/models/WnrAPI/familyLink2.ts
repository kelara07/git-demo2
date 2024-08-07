/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 家庭关系
 */
export interface FamilyLink2 {
  /** 客户1 */
  chief?: string;
  /** 客户2 */
  customerGuid?: string;
  /**
   * 顺序
   * @minLength 0
   * @maxLength 10
   * @nullable
   */
  familyNo?: string | null;
  /** 删除标记 */
  isDel?: boolean;
  /**
   * 說明
   * @minLength 0
   * @maxLength 80
   * @nullable
   */
  memo?: string | null;
  /**
   * 关系(客户2是客户1的)
   * @minLength 0
   * @maxLength 8
   * @nullable
   */
  relate?: string | null;
  /**
   * 关系(客户1是客户2的)
   * @minLength 0
   * @maxLength 8
   * @nullable
   */
  reverseRelate?: string | null;
}
