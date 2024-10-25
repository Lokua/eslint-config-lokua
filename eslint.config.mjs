import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import babelParser from '@babel/eslint-parser'
import globals from 'globals'

export default [
  js.configs.recommended,
  prettierConfig,
  prettierPlugin,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-inner-declarations': 'off',
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
  },
]
