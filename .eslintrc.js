module.exports = {
  parser: '@typescript-eslint/parser',
  // env: {
  //   browser: true,
  //   es2021: true,
  // },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  // overrides: [
  //   {
  //     env: {
  //       node: true,
  //     },
  //     files: ['.eslintrc.{js,cjs}'],
  //     parserOptions: {
  //       sourceType: 'script',
  //     },
  //   },
  // ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // JSX 태그를 지원
    },
  },
  settings: {
    react: {
      version: 'detect', // 설치된 React의 버전을 자동으로 감지
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['error', 2],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'prettier/prettier': 'error', // Prettier 규칙을 위반할 때 오류를 출력
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 원하는 TypeScript 규칙을 추가
    'react/react-in-jsx-scope': 'off', // React 17 이상에서는 필요 없는 규칙
  },
};
