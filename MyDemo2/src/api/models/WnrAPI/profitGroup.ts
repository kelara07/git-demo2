/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 綜合投保利益/檢視總表
 */
export interface ProfitGroup {
  /** 標示是否為保單基本資料紀錄 (目前給付利益不呈現, rangeGroupValue才呈現) */
  flag?: string;
  /** 群組編號 */
  groupID?: number;
  /**
   * 顯示文字
   * @nullable
   */
  item?: string | null;
  /**
   * 合計範圍
   * @nullable
   */
  rangeSummary?: string | null;
  /**
   * 各保單該給付數值範圍 (for 檢視總表(原台壽要求報表))
   * @nullable
   */
  rangeValues?: string[] | null;
  /** 預設顯示 */
  showIt?: boolean;
  /** 排序號 */
  sNo?: number;
  /**
   * 合計
   * @nullable
   */
  summary?: string | null;
  /** 資料類型 */
  type?: string;
  /**
   * 各保單該給付數值 (for綜合投保利益)
   * @nullable
   */
  values?: string[] | null;
}
