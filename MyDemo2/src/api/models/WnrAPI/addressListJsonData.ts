/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */
import type { Address } from './address';

export interface AddressListJsonData {
  code?: number;
  /** @nullable */
  data?: Address[] | null;
  /** @nullable */
  message?: string | null;
  status?: boolean;
}