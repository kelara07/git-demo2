/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { ITMBase } from './iTMBase';
import type { PManBase } from './pManBase';
import type { ProposalProfitItemYearPremium } from './proposalProfitItemYearPremium';
import type { TextProfit } from './textProfit';
import type { InsYearValue } from './insYearValue';

/**
 * 保單/建議書 保險利益(單一保單,可包含多被保人，多商品， 可由API對外提供)
 */
export interface ProposalProfit {
  /**
   * 保險公司簡稱
   * @nullable
   */
  cmpyName?: string | null;
  /**
   * 附加資料 (Json格式)
   * @nullable
   */
  extrnData?: string | null;
  /**
   * 投保險種列表(投保內容/首期保費明細)
   * @nullable
   */
  insuranceList?: ITMBase[] | null;
  /**
   * 要/被保人列表(基本資料)
   * @nullable
   */
  insuredList?: PManBase[] | null;
  /**
   * 險種每人年度保費
   * @nullable
   */
  itemYearPremium?: ProposalProfitItemYearPremium;
  /**
   * 一般身故的最大最小值
   * @nullable
   */
  lifeMinMax?: number[] | null;
  /** 建議書中的險種最高繳費年期 */
  maxPaymentMaturity?: number;
  /** 建議書中的險種最高保障年期 */
  maxProtectMaturity?: number;
  /** 本建議書一般身故給付最大值 */
  maxProtectValue?: number;
  mBackTotal?: number;
  /**
   * 繳別文字
   * @nullable
   */
  paymentText?: string | null;
  /** 首期保費 */
  premium?: number;
  /**
   * 保單/建議書 主鍵值
   * @nullable
   */
  proposalKey?: string | null;
  /**
   * 險種特色
   * @nullable
   */
  specProfits?: TextProfit[] | null;
  /**
   * 文字利益
   * @nullable
   */
  textProfits?: TextProfit[] | null;
  /**
   * 數字型保險利益(各年度利益)
   * @nullable
   */
  values?: InsYearValue[] | null;
  /** 建議書中的險種終身保障的保險利益 */
  wholeLifeProfit?: number;
}