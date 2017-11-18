module.exports = {
  extends: ['eslint:recommended', 'react-app', 'prettier'],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    'no-use-before-define': 0,
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    semi: [2, 'never'],
    'prettier/prettier': 1
  }
}
