/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * WnrAPI
 * OpenAPI spec version: 1.0
 */

/**
 * 菜单
 */
export interface FunctionSetNew {
  /**
   * 移动端使用
   * @nullable
   */
  forMobile?: boolean | null;
  /**
   * PC端使用
   * @nullable
   */
  forPc?: boolean | null;
  id?: number;
  /**
   * 菜单名称
   * @minLength 0
   * @maxLength 48
   */
  name: string;
  /** @nullable */
  parentId?: number | null;
  /** @nullable */
  path?: string | null;
  /** @nullable */
  roles?: string[] | null;
  /** 顺序 */
  sort?: number;
  /** 类型(0:容器, 1:功能) */
  type?: number;
  /**
   * @minLength 0
   * @maxLength 100
   * @nullable
   */
  url?: string | null;
}
