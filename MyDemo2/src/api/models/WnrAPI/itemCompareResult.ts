/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { ProfitGroup } from './profitGroup';
import type { PackageItem } from './packageItem';
import type { CompareTxtProfitCollect } from './compareTxtProfitCollect';

/**
 * 險種比較結果(提供展示呈現)
 */
export interface ItemCompareResult {
  /**
   * 群組利益(相同給付內容,依TextProfit的GroupID)的呈現結果
   * @nullable
   */
  groupText?: ProfitGroup[] | null;
  /**
   * 比較的險種集合
   * @nullable
   */
  items?: PackageItem[] | null;
  /**
   * 長年期險種身故及領回數值 險種1:身故,領回 險種2:身故,領回 險種3:身故,領回 險種4:身故,領回
   * @nullable
   */
  longItemVal?: number[][] | null;
  /**
   * 文字投保利益(詳細,依每個險種txtProfit內容)
   * @nullable
   */
  txtProfitlines?: CompareTxtProfitCollect[] | null;
}
