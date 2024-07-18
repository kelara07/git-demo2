/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { UserItem } from './userItem';

export interface UserCMPY {
  /**
   * 地址(x)
   * @minLength 0
   * @maxLength 64
   * @nullable
   */
  address?: string | null;
  /**
   * 公司代號
   * @minLength 0
   * @maxLength 8
   * @nullable
   */
  cmpy?: string | null;
  editID?: number;
  /**
   * 暱稱(x)
   * @minLength 0
   * @maxLength 16
   * @nullable
   */
  english?: string | null;
  /**
   * 全名(x)
   * @minLength 0
   * @maxLength 30
   * @nullable
   */
  fullName?: string | null;
  /**
   * 是否在地(x)
   * @nullable
   */
  local?: boolean | null;
  /**
   * 電話(x)
   * @minLength 0
   * @maxLength 16
   * @nullable
   */
  phone?: string | null;
  /**
   * 公司名稱
   * @minLength 0
   * @maxLength 16
   * @nullable
   */
  shortName?: string | null;
  /**
   * 自定义-商品
   * @nullable
   */
  userItemList?: UserItem[] | null;
}
