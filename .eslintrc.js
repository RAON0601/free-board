module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    project: '**/tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off', // promise를 다른 곳으로 못 주게 하는 옵션
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off', // 화살표 함수 중괄호 필수 강제 하는 옵션
  },
};
