/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

export interface SysPhrase {
  id?: number;
  /** @nullable */
  item?: SysPhrase[] | null;
  /**
   * 名称
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * 排序
   * @nullable
   */
  order?: number | null;
  /**
   * 类型(EN: 不打算開發, EY: 打算開發, Ibon-Inc: [统超]行事曆-銷售, Ibon-oth: [统超]行事曆-增員, Ibon-sel: [统超]行事曆-訓練, Ibon-svs: [统超]行事曆-其他, Ibon-trn: [统超]行事曆-服務, Sche-Inc: 行事曆-銷售, Sche-sel: 行事曆-增員, IDT: 證件類型, PHS: 進行階段, R1: 藉口理由, R2: 觀念偏差, R3: 猶豫不決, R4: 實際障礙, SRV: 服務類型, Marriage: 婚姻, Blood: 血型, AnnualIncome: 年收入, NetAssets: 淨資產, Tel: 通訊錄電話, Address: 通訊錄地址, Mail: 通訊錄郵件)
   * @minLength 0
   * @maxLength 20
   */
  type: string;
  /** @nullable */
  value?: string | null;
}