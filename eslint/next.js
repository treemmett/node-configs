module.exports = {
  extends: ['next/core-web-vitals', 'next', './index'],
  overrides: [
    {
      files: ['next*.js', 'i18next-parser.config.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-await-in-loop': 'off',
      },
    },
  ],
};
