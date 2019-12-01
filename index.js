module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/member-ordering': 2,
    '@typescript-eslint/no-unused-vars': 2,
    'consistent-return': 0,
    'import/no-cycle': 0,
    'import/order': 0,
    'no-alert': 2,
    'no-console': 2,
    'prettier/prettier': [2, { singleQuote: true }],
    'sort-imports': 2
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
