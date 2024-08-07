/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { Beneficiary } from './beneficiary';
import type { CarInfo } from './carInfo';
import type { CashValues } from './cashValues';
import type { PolicyItem } from './policyItem';
import type { PolicyService } from './policyService';

export interface Policy {
  /**
   * 保單地址
   * @minLength 0
   * @maxLength 60
   * @nullable
   */
  address?: string | null;
  /**
   * 高資產
   * @nullable
   */
  addValueJson?: string | null;
  /**
   * 契便保額
   * @nullable
   */
  adjedAmount?: number | null;
  /**
   * 投保年齡
   * @nullable
   */
  age?: number | null;
  /**
   * 保額
   * @nullable
   */
  amount?: number | null;
  /**
   * 保額(主约)
   * @nullable
   */
  amountStr?: string | null;
  /**
   * 要保人(姓名)
   * @minLength 0
   * @maxLength 50
   * @nullable
   */
  applicant?: string | null;
  /**
   * 要保人Id
   * @nullable
   */
  applicantGuid?: string | null;
  /**
   * 受益人
   * @nullable
   */
  beneficiaryList?: Beneficiary[] | null;
  /**
   * 受益
   * @minLength 0
   * @maxLength 32
   * @nullable
   */
  benefit?: string | null;
  /** 不列入健診 */
  calcIt?: boolean;
  /**
   * 計算年
   * @nullable
   */
  calYear?: number | null;
  /**
   * 車險GUID
   * @nullable
   */
  carGuid?: string | null;
  carInfo?: CarInfo;
  /**
   * 年度解约金
   * @nullable
   */
  cashValuesList?: CashValues[] | null;
  /**
   * x
   * @nullable
   */
  cDate?: string | null;
  /**
   * 收費方式
   * @minLength 0
   * @maxLength 8
   * @nullable
   */
  charge?: string | null;
  /** 主被保人Id */
  cstmGuid?: string;
  /**
   * 解約金
   * @nullable
   */
  csv?: number[] | null;
  /**
   * 幣別(文字)
   * @minLength 0
   * @maxLength 6
   * @nullable
   */
  currency?: string | null;
  /**
   * 折扣
   * @nullable
   */
  discount?: number | null;
  /** @nullable */
  editID?: number | null;
  /**
   * 異動日
   * @nullable
   */
  etiDate?: string | null;
  /**
   * 異動金額
   * @nullable
   */
  etiMoney?: number | null;
  /**
   * 主約到期日
   * @minLength 0
   * @maxLength 20
   * @nullable
   */
  expireDate?: string | null;
  guid?: string;
  /**
   * 保險公司(名称)
   * @minLength 0
   * @maxLength 10
   * @nullable
   */
  inrcmpy?: string | null;
  /**
   * 保險標的
   * @minLength 0
   * @maxLength 100
   * @nullable
   */
  insrTarget?: string | null;
  /** 保單類型 (0:壽險, 1:產險, 2:車險(產), 3:住宅火險(產), 4:自訂商品) */
  insType?: number;
  /**
   * 主被保人(姓名)
   * @minLength 0
   * @maxLength 50
   * @nullable
   */
  insurer?: string | null;
  /** 計入個人績效 */
  isPreformance?: boolean;
  /**
   * x
   * @minLength 0
   * @maxLength 40
   * @nullable
   */
  mainInsuranceName?: string | null;
  /** @nullable */
  modifyDate?: string | null;
  /**
   * 抵押權人
   * @minLength 0
   * @maxLength 25
   * @nullable
   */
  mortgage?: string | null;
  /**
   * 繳別(中文名称)
   * @minLength 0
   * @maxLength 8
   * @nullable
   */
  payment?: string | null;
  /**
   * 繳費資訊
   * @nullable
   */
  paymentInfo?: string | null;
  /**
   * 缴费月
   * @minLength 0
   * @maxLength 30
   * @nullable
   */
  payMonth?: string | null;
  /**
   * 投保日期
   * @nullable
   */
  policyDate?: string | null;
  /**
   * 保單號碼
   * @minLength 0
   * @maxLength 30
   * @nullable
   */
  policyID?: string | null;
  /**
   * 備註保單號碼
   * @minLength 0
   * @maxLength 30
   * @nullable
   */
  policyID2?: string | null;
  /**
   * 保险商品
   * @nullable
   */
  policyItemList?: PolicyItem[] | null;
  /**
   * 保单服务
   * @nullable
   */
  policyServiceList?: PolicyService[] | null;
  /**
   * 總保費(原币别)
   * @nullable
   */
  premiums?: number | null;
  /**
   * 總保費(新台币)
   * @nullable
   */
  premiumsLocal?: number | null;
  /**
   * 備註/建築結構
   * @nullable
   */
  remark?: string | null;
  /**
   * 自訂
   * @minLength 0
   * @maxLength 20
   * @nullable
   */
  selfDefined?: string | null;
  /**
   * 承做業務 (默认值为: 当前登录用户姓名)
   * @minLength 0
   * @maxLength 20
   * @nullable
   */
  setID?: string | null;
  /**
   * 序號
   * @nullable
   */
  sno?: number | null;
  /**
   * 保單狀態 (建議書, 有效保單, 繳費期滿, 滿期, 失效, 解約, 繳清, 展期, 停效)
   * @minLength 0
   * @maxLength 10
   * @nullable
   */
  status?: string | null;
  /**
   * 使用者日期2
   * @nullable
   */
  userDate2?: string | null;
}
