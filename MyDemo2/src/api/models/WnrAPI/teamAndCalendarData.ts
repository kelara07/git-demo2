/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { CalendarData } from './calendarData';
import type { SimpleUser } from './simpleUser';

/**
 * 团队和行事历数据
 */
export interface TeamAndCalendarData {
  calendarData?: CalendarData;
  /**
   * 团队
   * @nullable
   */
  teamUser?: SimpleUser[] | null;
}
