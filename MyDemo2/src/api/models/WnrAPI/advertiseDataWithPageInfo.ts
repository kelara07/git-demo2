/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { Advertise } from './advertise';
import type { PagingInfo } from './pagingInfo';

export interface AdvertiseDataWithPageInfo {
  /** @nullable */
  datas?: Advertise[] | null;
  /** @nullable */
  message?: string | null;
  pageInfo?: PagingInfo;
}
