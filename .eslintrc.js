module.exports = {
  env: {
    browser: true,
    es2020: true
  },   
  extends: [
    'airbnb-base',
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
