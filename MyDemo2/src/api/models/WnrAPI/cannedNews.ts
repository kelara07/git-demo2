/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 罐头简讯
 */
export interface CannedNews {
  editId?: number;
  id?: number;
  modifyDate?: string;
  /**
   * 內容
   * @minLength 0
   * @maxLength 160
   */
  newsletter: string;
}
