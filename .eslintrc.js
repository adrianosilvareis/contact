module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-restricted-imports': ['error', {
      patterns: ['./*', '../*'],
    }],
    'import/extensions': ['error', 'never', {
      json: 'ignorePackages',
    }],
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: ['builtin', 'external', 'internal', 'unknown'],
      pathGroups: [
        { pattern: '@/**', group: 'internal' },
        { pattern: '#/**', group: 'unknown' },
      ],
    }],
    'import/no-unresolved': ['off'],
    'no-useless-constructor': ['off'],
    'import/prefer-default-export': ['off'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-use-before-define': ['off'],
    'class-methods-use-this': ['off'],
    'no-param-reassign': ['off'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    'no-empty-function': ['error', { allow: ['constructors'] }],
  },
};
