/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

export interface ViewOCRData {
  /**
   * @minLength 0
   * @maxLength 16
   */
  cmpyName: string;
  /**
   * @minLength 0
   * @maxLength 16
   * @nullable
   */
  cstmID?: string | null;
  /**
   * 0:policyOCR  1:台灣保險公會保險存摺PDF
   * @minLength 0
   * @maxLength 16
   * @nullable
   */
  cstmName?: string | null;
  editId?: number;
  id?: number;
  modifyDate?: string;
  /**
   * @minLength 0
   * @maxLength 24
   * @nullable
   */
  policyId?: string | null;
  /** @nullable */
  type?: number | null;
}
