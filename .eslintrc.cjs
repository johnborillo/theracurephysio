module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  "node": true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': ['warn', 'never'], // added this line
    'indent': ['warn', 'tab', { 'SwitchCase': 1 }], // added this line
    'quotes': ['warn', 'single'], // added this line
    'no-else-return': ['error', { 'allowElseIf': false }], // added this line
    'no-shadow': ['error'], // added this line
    'react-hooks/exhaustive-deps': [0], // added this line
    'space-before-function-paren': [1], // added this line
    'no-unused-vars': [1], // added this line
  },
}