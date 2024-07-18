/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

export interface VCustomerHealthCheck {
  /** @nullable */
  birthday?: string | null;
  /**
   * @minLength 0
   * @maxLength 10
   * @nullable
   */
  cstmNo?: string | null;
  editId?: number;
  guid?: string;
  /**
   * @minLength 0
   * @maxLength 4
   * @nullable
   */
  hasFamily?: string | null;
  /**
   * @minLength 0
   * @maxLength 20
   * @nullable
   */
  id?: string | null;
  /**
   * @minLength 0
   * @maxLength 8
   * @nullable
   */
  idType?: string | null;
  /**
   * @minLength 0
   * @maxLength 16
   * @nullable
   */
  mobile?: string | null;
  /** @nullable */
  modifyDate?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 2
   * @nullable
   */
  sex?: string | null;
}
