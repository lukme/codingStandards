module.exports = {
  root: true,
  extends: 'airbnb',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      'node': {
        'paths': ['src'],
        'extensions': ['.js', '.jsx', '.ts', '.tsx'], // workaround for 'Unable to resolve path to module' error in imports
      },
    },
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'import/order': [ // add grouping imports by source, add newline between groups
      'error',
      {
        'newlines-between': 'always',
        'groups': [
          'builtin',
          'external',
          'internal',
        ],
      },
    ],
    'react/jsx-filename-extension': [2, {
      'extensions': ['.js', '.jsx', '.ts', '.tsx'],
    }], // workaround for jsx in tsx files
    'quote-props': 'off', // 'Unnecessarily quoted property' problem where it's necessary
    'import/extensions': [ // workaround for requiring unnecessary extensions in imports
      'error',
      'ignorePackages',
      {
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    'operator-linebreak': 'off', // rule conflicting with prettier
  },
};
