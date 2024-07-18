/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { TPersonalProfitGroupProfits } from './tPersonalProfitGroupProfits';
import type { MedicalProfit } from './medicalProfit';
import type { MonthFeeInfo } from './monthFeeInfo';
import type { InsPackParam } from './insPackParam';
import type { PManBase } from './pManBase';
import type { PolicyInfo } from './policyInfo';
import type { TextProfit } from './textProfit';
import type { InsYearValue } from './insYearValue';

/**
 * 用以記錄個人保單健診中保險利益的詳細資料 主要用於建立dataSet
 */
export interface TPersonalProfit {
  /**
   * 各年度各保單現金價值 每一欄為一張保單之金額 [保單,年度](維度0=保單數+1, 最後一列為當年度合計值)
   * @nullable
   */
  dtCSV?: number[][] | null;
  /**
   * 各年度身故金額  每一欄為一張保單之金額 [保單,年度](維度0=保單數+1, 最後一列為當年度合計值)
   * @nullable
   */
  dtLife?: number[][] | null;
  /**
   * 各年度領回金額(含生存金,年金...) 每一欄為一張保單之金額 [保單,年度](維度0=保單數+1, 最後一列為當年度合計值)
   * @nullable
   */
  dtMBack?: number[][] | null;
  /**
   * 計算中的錯誤訊息
   * @nullable
   */
  errorMessage?: string | null;
  /**
   * 附加資料 (Json格式)
   * @nullable
   */
  extrnData?: string | null;
  /**
   * 群組綜合投保利益 包含當年度與 最小~最大 的給付說明 key:GroupNo
   * @nullable
   */
  groupProfits?: TPersonalProfitGroupProfits;
  insPackType?: number;
  /** 是否計算成功(false:失敗,沒有計算結果,失敗原因表現在errorMessage, true:可以產出計算結果,可能會有部分錯誤訊息,呈現在errorMessage) */
  isSuccess?: boolean;
  /** @nullable */
  mainCName?: string | null;
  /** @nullable */
  mainPKID?: string | null;
  /** 最大繳費年數 */
  maxPayYear?: number;
  /** 最大保障年數 */
  maxProtectYear?: number;
  /**
   * 醫療明細表(有GroupNo的給付項目)的文字型保險利益集合
   * @nullable
   */
  medicalTxtPrfts?: MedicalProfit[] | null;
  /**
   * 各保單每月保費
   * @nullable
   */
  monthFee?: MonthFeeInfo[] | null;
  param?: InsPackParam;
  /**
   * 被保人列表
   * @nullable
   */
  pManList?: PManBase[] | null;
  /**
   * 保單列表
   * @nullable
   */
  policies?: PolicyInfo[] | null;
  /**
   * 險種特色
   * @nullable
   */
  specProfits?: TextProfit[] | null;
  /** 最早投保年齡 */
  startAge?: number;
  /** 最早投保年度 */
  startYear?: number;
  /**
   * 包含每一張保單每一個險種(不管有沒有群組編號)的各項文字給付說明
   * @nullable
   */
  textProfits?: TextProfit[] | null;
  /** 總領回金額 */
  totalMBack?: number;
  /** 一般身故終身保障數值 */
  wholeLife?: number;
  /** 是否有包含現金價值的保單 */
  withCSV?: boolean;
  /**
   * 各年度保費 [保單,年度] (維度0=保單數+1, 最後一列為當年度合計值)
   * @nullable
   */
  yearFee?: number[][] | null;
  /**
   * 各年度保障金額
   * @nullable
   */
  yearValues?: InsYearValue[] | null;
}
