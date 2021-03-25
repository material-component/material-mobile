module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: [
    'plugin:tailwind/recommended',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  rules: {
    'no-var': 'error',
    'object-shorthand': 2,
    'no-undef': 2,
    camelcase: 'off',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'off'
  },
  globals: {
    h: true,
    HTMLElementTagNameMap: true
  }
}
