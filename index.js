module.exports = {
  extends: [
    './rules/best-practice',
    './rules/errors',
    './rules/env',
    './rules/es6',
    './rules/imports',
    './rules/strict',
    './rules/style',
    './rules/variables',
  ],
  overrides: [
    {
      extends: ['./rules/typescript'],
      files: '**/*.{ts,tsx}',
    },
    {
      extends: ['./rules/react'],
      files: '**/*.{tsx,jsx}',
    },
  ],
};
