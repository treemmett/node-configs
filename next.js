module.exports = {
  extends: ['next/core-web-vitals', 'next'],
  overrides: [
    {
      files: ['next*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
