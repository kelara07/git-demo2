/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 忘记密码 - 手机
 */
export interface ForgetPasswordTel {
  /**
   * 验证码
   * @nullable
   */
  code?: string | null;
  /**
   * 身份证号码
   * @nullable
   */
  identityNo?: string | null;
  /**
   * 手机号码
   * @nullable
   */
  phone?: string | null;
}