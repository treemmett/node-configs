module.exports = {
  overrides: [
    {
      files: 'webpack.config.{ts,js}',
      env: {
        node: true,
        browser: false
      }
    }
  ]
};
