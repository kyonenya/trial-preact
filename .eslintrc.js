module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  settings: {
    react: {
      pragma: 'h',
    },
  },
  extends: [
    'preact',
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
  ],
  globals: {},
  rules: {
    'import/prefer-default-export': 0,
  },
};
