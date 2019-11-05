module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['jest', 'json'],
  rules: {
    'no-continue': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
