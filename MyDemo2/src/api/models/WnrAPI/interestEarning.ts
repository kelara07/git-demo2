/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { Module1 } from './module1';
import type { SubModule1 } from './subModule1';

export interface InterestEarning {
  /**
   * 模块
   * @nullable
   */
  detail?: Module1[] | null;
  subtotal?: SubModule1;
  /**
   * 风险级别
   * @nullable
   */
  type?: string | null;
  /** 数据 */
  value?: number;
}
