module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
      mocha: true
    },
    extends: [
      'eslint:recommended',
      'plugin:cypress/recommended',
    ],
    plugins: [
      'cypress'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-mixed-spaces-and-tabs': 'error',
      'cypress/no-unnecessary-waiting': 0,
      'no-tabs': ['error', { allowIndentationTabs: false }],
      'indent': ['error', 2],
      'quotes': ['warn', 'single'],
      'semi': ['error', 'never'],
    }
  }
  