/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { SubModule1 } from './subModule1';

/**
 * 模块
 */
export interface Module1 {
  /** @nullable */
  itemData?: SubModule1[] | null;
  subtotal?: SubModule1;
  /**
   * 类别
   * @nullable
   */
  type?: string | null;
  /** 数据 */
  value?: number;
}
