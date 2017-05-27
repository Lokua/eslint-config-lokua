module.exports = {
  extends: [
    `eslint:recommended`
  ],
  plugins: [
    `react`
  ],
  parser: `babel-eslint`,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    quotes: [2, `backtick`],
    semi: [2, `never`],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2
  }
}
