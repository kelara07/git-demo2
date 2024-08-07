/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 雷達圖項目设定项
 */
export interface UserRadarItem {
  /** 画面呈现/输入时的单位，Expect 本身单位为：元 */
  displayUnit?: number;
  /** 用戶設定的期望值 */
  expect?: number;
  /**
   * 该项目包含的群組項號
   * @nullable
   */
  groups?: number[] | null;
  /**
   * ID，用於設定更新時覆蓋對應項目的設定
   * @nullable
   */
  id?: string | null;
  /**
   * 顯示名稱
   * @nullable
   */
  name?: string | null;
}
