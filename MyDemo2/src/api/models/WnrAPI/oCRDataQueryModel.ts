/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

export interface OCRDataQueryModel {
  /**
   * 客戶姓名
   * @nullable
   */
  cstmName?: string | null;
  /** @nullable */
  editId?: number | null;
  isDesc?: boolean;
  /** @nullable */
  multipleColumnsSort?: string | null;
  pageNum?: number;
  pageSize?: number;
  /** @nullable */
  sortField?: string | null;
  /**
   * 0:policyOCR  1:台灣保險公會保險存摺PDF
   * @nullable
   */
  type?: number | null;
}
