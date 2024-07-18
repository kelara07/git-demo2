/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 用户注册
 */
export interface RegisterUserDto {
  /**
   * 地址
   * @nullable
   */
  address?: string | null;
  /**
   * 是否同意被指导
   * @nullable
   */
  allowDirector?: boolean | null;
  /**
   * 公司名稱
   * @nullable
   */
  companyName?: string | null;
  /** @minLength 1 */
  confirmPassword: string;
  /**
   * E-Mail
   * @minLength 0
   * @maxLength 50
   */
  email: string;
  /**
   * 身分證字號
   * @minLength 1
   */
  identityNo: string;
  /** 是否为"CW"角色用户 */
  isCW: boolean;
  /**
   * 密碼
   * @minLength 10
   * @maxLength 20
   */
  passwordHash: string;
  /**
   * 手機
   * @minLength 1
   * @pattern ^[0-9]{10}$
   */
  tel: string;
  /**
   * 中文姓名
   * @minLength 0
   * @maxLength 20
   * @pattern ^[一-龥]+$
   */
  userName: string;
}