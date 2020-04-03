module.exports = {
  env: {
    'cypress/globals': true,
    node: true
  },

  overrides: [
    {
      env: {
        browser: true,
        node: false
      },
      files: '**/*.test.{ts,tsx,js,jsx}'
    }
  ],
  plugins: ['cypress', 'chai-friendly'],
  rules: {
    'chai-friendly/no-unused-expressions': 'error',
    'cypress/no-assertion-before-screenshot': 'off',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-force': 'off',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/require-data-selectors': 'off',
    'no-unused-expressions': 'off'
  }
};
