/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { TableLog } from './tableLog';
import type { PagingInfo } from './pagingInfo';

export interface TableLogDataWithPageInfo {
  /** @nullable */
  datas?: TableLog[] | null;
  /** @nullable */
  message?: string | null;
  pageInfo?: PagingInfo;
}
