/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { ExchangeRate } from './exchangeRate';
import type { FixedFinanceData } from './fixedFinanceData';
import type { VProposalDataWithPageInfo } from './vProposalDataWithPageInfo';

export interface ProposalData {
  /** @nullable */
  exchangeRate?: ExchangeRate[] | null;
  fixedData?: FixedFinanceData;
  pageInfo?: VProposalDataWithPageInfo;
}
