/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { CustomGroupItem } from './customGroupItem';

/**
 * 商品组合
 */
export interface CustomGroupPlus {
  editID?: number;
  id?: string;
  /**
   * 明细
   * @nullable
   */
  items?: CustomGroupItem[] | null;
  modifyDate?: string;
  /**
   * 组合名称
   * @minLength 0
   * @maxLength 40
   */
  name: string;
}
