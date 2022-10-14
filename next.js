module.exports = {
  extends: ['next/core-web-vitals', 'next', '../index'],
  overrides: [
    {
      files: ['next*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
