/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { Body } from './body';
import type { BodyContentStatistics } from './bodyContentStatistics';

/**
 * 退休後年支出
 */
export interface Retire {
  /** 預計退休年齡 */
  age?: number;
  /** @nullable */
  body?: Body[] | null;
  /** 通膨率 */
  inflationRate?: number;
  /** 複利終值倍數 */
  multiple?: number;
  statistics?: BodyContentStatistics;
}
