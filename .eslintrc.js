module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  settings: {
    react: {
      pragma: 'h',
      version: 'latest',
    },
  },
  extends: [
    'preact',
    'eslint:recommended',
//    'airbnb',
    'airbnb/hooks',
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
//    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  globals: {},
  rules: {
    // disable while development
    '@typescript-eslint/no-unused-vars': 0,
    // overwrite airbnb
    'import/prefer-default-export': 0,
    'no-use-before-define': 0, // 'h' from preact
    'react/jsx-filename-extension': 0,
    'import/extensions': 0,
//    'arrow-body-style': 0,
  },
};
