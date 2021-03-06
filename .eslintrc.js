module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  env: {
    browser: true
  },
  rules: {
    // enable
    'curly': 'error',
    // disable
    'no-console': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'space-before-function-paren': 'off',
    'prefer-rest-params': 'off',
    'func-names': 'off',
    'no-useless-escape': 'off',
    'newline-per-chained-call': 'off',
    'no-constant-condition': ['error', { 'checkLoops': false }],
    'no-shadow': 'off'
  },
  overrides: [
    {
      files: [
        'testem.js',
        'ember-cli-build.js',
        'config/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    },
    {
      files: ['tests/**/*.js'],
      env: {
        embertest: true
      },
      globals: {
        'server': true
      },
      rules: {
        'prefer-arrow-callback': 'off'
      }
    }
  ]
};
