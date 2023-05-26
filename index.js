module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      configFile: `${__dirname}/babel.config.js`,
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  rules: {
    'no-inner-declarations': ['off'],
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: false,
      },
    ],
  },
}
