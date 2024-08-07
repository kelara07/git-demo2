/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { DspCalenderType } from './dspCalenderType';
import type { PackageProfitPremium } from './packageProfitPremium';
import type { InsPackPremiumBelongWay } from './insPackPremiumBelongWay';

/**
 * 健診計算時 可指定的變數
 */
export interface InsPackParam {
  dspCalender?: DspCalenderType;
  dspPremiumDay?: PackageProfitPremium;
  premiumBelongTo?: InsPackPremiumBelongWay;
}
