module.exports = {
  extends: [
    './rules/best-practice',
    './rules/errors',
    './rules/env',
    './rules/es6',
    './rules/imports',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ],
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      extends: ['./rules/typescript']
    },
    {
      files: '**/*.{tsx,jsx}',
      extends: ['./rules/react']
    }
  ]
};
