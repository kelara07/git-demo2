/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { VFeedback } from './vFeedback';
import type { PagingInfo } from './pagingInfo';

export interface VFeedbackDataWithPageInfo {
  /** @nullable */
  datas?: VFeedback[] | null;
  /** @nullable */
  message?: string | null;
  pageInfo?: PagingInfo;
}
