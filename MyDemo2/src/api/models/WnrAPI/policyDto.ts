/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { CarInfoDto } from './carInfoDto';

/**
 * 保单
 */
export interface PolicyDto {
  /**
   * 投保年齡
   * @nullable
   */
  age?: number | null;
  /**
   * 要保人
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
  /** 不列入健診 */
  calcIt?: boolean;
  carInfo?: CarInfoDto;
  /**
   * 收費方式
   * @minLength 0
   * @maxLength 8
   * @nullable
   */
  charge?: string | null;
  /** 客户Id */
  cstmGuid: string;
  /** @nullable */
  guid?: string | null;
  /**
   * 保險公司(名称)
   * @minLength 0
   * @maxLength 10
   */
  inrcmpy: string;
  /**
   * 保險標的
   * @minLength 0
   * @maxLength 100
   * @nullable
   */
  insrTarget?: string | null;
  /** 保單類型 (0:壽險, 1:產險, 2:車險(產), 3:住宅火險(產), 4:自訂商品) */
  insType: number;
  /**
   * 主被保人(姓名)
   * @minLength 0
   * @maxLength 50
   */
  insurer: string;
  /**
   * 計入個人績效
   * @nullable
   */
  isPreformance?: boolean | null;
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
   */
  payment: string;
  /**
   * 繳費資訊
   * @nullable
   */
  paymentInfo?: string | null;
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
   * 總保費
   * @nullable
   */
  premiums?: number | null;
  /**
   * 備註/建築結構
   * @nullable
   */
  remark?: string | null;
  /**
   * 承做業務(默认值为: 当前登录用户姓名)
   * @minLength 0
   * @maxLength 20
   */
  setID: string;
  /**
   * 序號
   * @nullable
   */
  sno?: number | null;
  /**
   * 保單狀態
   * @minLength 0
   * @maxLength 10
   * @nullable
   */
  status?: string | null;
}
