/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { Blog } from './blog';
import type { PagingInfo } from './pagingInfo';

export interface BlogDataWithPageInfo {
  /** @nullable */
  datas?: Blog[] | null;
  /** @nullable */
  message?: string | null;
  pageInfo?: PagingInfo;
}
