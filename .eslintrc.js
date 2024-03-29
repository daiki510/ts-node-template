module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  env: {
    browser: true,
    commonjs: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist'],
  // include: ['./jest.config.ts'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  rules: {
    eqeqeq: 'error',
    'no-console': 'warn',
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'memo'], location: 'anywhere' }],
    'max-statements': ['warn', 30],
    'max-lines': ['warn', 500],
    'max-lines-per-function': ['warn', { max: 30, skipBlankLines: true }],
    'max-depth': ['warn', 3],
    complexity: ['warn', 5],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/naming-convention': [
      'warn',
      { selector: 'variableLike', format: ['camelCase'] },
      { selector: 'method', format: ['camelCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'parameter', format: ['camelCase'] },
    ],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-require-imports': ['error'],
    //TODO:jestに対するルールが効いていないため対応
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest/require-top-level-describe': ['error'],
  },
};
