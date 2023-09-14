module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
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
  },
};