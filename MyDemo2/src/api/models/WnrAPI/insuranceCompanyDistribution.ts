/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { InsuranceCompanyDistributionData } from './insuranceCompanyDistributionData';

/**
 * 保險公司分佈
 */
export interface InsuranceCompanyDistribution {
  detail?: InsuranceCompanyDistributionData;
  /** 0:寿险公司, 1:产险公司 */
  type?: number;
}