/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 生存領回名單搜尋
 */
export interface LifeGiftQueryModel {
  /** 結束日期 */
  end?: string;
  pageIndex?: number;
  pageSize?: number;
  /** 開始日期 */
  start?: string;
  /** (后端设定)當前使用者 */
  userId?: number;
}