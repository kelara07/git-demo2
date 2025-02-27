/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'no-empty': 'off',
    'vue/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/no-mutating-props': [
      'error',
      {
        shallowOnly: true
      }
    ],
    // 对全角空格，仅作提醒。
    'no-irregular-whitespace': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
