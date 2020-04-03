module.exports = {
  overrides: [
    {
      env: {
        browser: false,
        node: true,
      },
      files: 'webpack.config.{ts,js}',
    },
  ],
};
