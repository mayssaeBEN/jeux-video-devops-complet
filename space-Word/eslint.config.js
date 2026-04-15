module.exports = [
  {
    files: ['*/.js'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
]; 