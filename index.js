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
    node: true
  },
  rules: {
    quotes: [2, `backtick`],
    semi: [2, `never`]
  }
}
