/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { PersonalFinance } from './personalFinance';

export interface ProposalJff {
  contactObj: PersonalFinance;
  cstmGuid: string;
  /**
   * 客戶姓名
   * @minLength 0
   * @maxLength 20
   */
  cstmName: string;
  /** @nullable */
  guid?: string | null;
}
