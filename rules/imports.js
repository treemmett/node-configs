module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['import'],
  rules: {
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-commonjs': 'off',
    'import/no-cycle': 0,
    'import/no-default-export': 'off',
    'import/no-deprecated': 'off',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          '**/*.test.{ts,tsx,js,jsx}', // repos with a single test file
          '**/*test-*.{ts,tsx,js,jsx}', // repos with multiple top-level test files
          '**/jest.config.{ts,js}', // jest config
          '**/jest.setup.{ts,js}', // jest setup
          '**/vue.config.{ts,js}', // vue-cli config
          '**/webpack.config.{ts,js}', // webpack config
          '**/webpack.config.*.{ts,js}', // webpack config
          '**/rollup.config.{ts,js}', // rollup config
          '**/rollup.config.*.{ts,js}', // rollup config
          '**/.eslintrc.{ts,js}', // eslint config
          '**/gulpfile.{ts,js}', // gulp config
          '**/gulpfile.*.{ts,js}', // gulp config
          '**/Gruntfile{,.{ts,js}}', // grunt config
          '**/protractor.conf.{ts,js}', // protractor config
          '**/protractor.conf.*.{ts,js}', // protractor config
          '**/karma.conf.{ts,js}' // karma config
        ],
        optionalDependencies: false
      }
    ],
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': ['error', { caseSensitive: true, commonjs: true }],
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': 'off',
    'import/prefer-default-export': 'error',
    'import/unambiguous': 'off'
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$'
    ],
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
    }
  }
};
