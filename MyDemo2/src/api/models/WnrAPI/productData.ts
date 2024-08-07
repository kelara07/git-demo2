/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { ProductDetail } from './productDetail';

export interface ProductData {
  /** @nullable */
  availableDate?: string | null;
  /**
   * 預計有效期
   * @nullable
   */
  expireDate?: string | null;
  isAutoPayment?: boolean;
  /** @nullable */
  list?: ProductDetail[] | null;
  /** 合計 */
  total?: number;
}
