/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 角色及有效期
 */
export interface AddValueNew {
  /**
   * 类型 (AG:Agent共用, 
CW:保險贏家, 
PFA:個人財務健診, 
HAM:高資產客戶財管, 
BO:商機365, 
FP:財務規劃師, 
FDE:基金神探8分鐘, 
ODS:Microsoft 365方案, 
MIX:保險大贏家)
   * @minLength 0
   * @maxLength 12
   * @nullable
   */
  addValueType?: string | null;
  /**
   * 取消日
   * @nullable
   */
  cancelDate?: string | null;
  dbID?: number;
  /** 删除标记(0:未删除,1:已删除) */
  deleteMark?: boolean;
  /**
   * 有效期
   * @nullable
   */
  expireDate?: string | null;
  modifyDate?: string;
}
