/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { CardData } from './cardData';
import type { Receipt } from './receipt';

export interface POSubscription {
  autoSubscribe?: boolean;
  cardData?: CardData;
  period?: number;
  /** @nullable */
  poSubList?: string[] | null;
  receipt?: Receipt;
  userID?: number;
}