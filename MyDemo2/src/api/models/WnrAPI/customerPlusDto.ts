/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { CustomerDto } from './customerDto';
import type { FamilyLink2 } from './familyLink2';
import type { LinkLine } from './linkLine';

export interface CustomerPlusDto {
  customerDto: CustomerDto;
  /**
   * 家庭资料
   * @nullable
   */
  familyLinksList?: FamilyLink2[] | null;
  /** 是简易版吗 */
  isSimpleVersion?: boolean;
  /**
   * 通訊資料
   * @nullable
   */
  linkLineList?: LinkLine[] | null;
}