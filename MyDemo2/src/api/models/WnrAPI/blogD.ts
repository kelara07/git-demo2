/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

export interface BlogD {
  /** 類別 */
  catagoryId: string;
  /** @nullable */
  sNo?: number | null;
  /**
   * 來源
   * @minLength 0
   * @maxLength 50
   */
  source: string;
  /**
   * 標題
   * @minLength 0
   * @maxLength 50
   */
  subject: string;
  /**
   * 網址
   * @minLength 0
   * @maxLength 511
   */
  url: string;
}