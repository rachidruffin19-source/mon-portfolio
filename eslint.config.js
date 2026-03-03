import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: [
      'node_modules',
      'dist',
      '.astro',
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',
      '**/*.ts',
      '**/*.tsx',
      '**/*.astro',
    ],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        OffscreenCanvas: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'eqeqeq': ['warn', 'always'],
      'quotes': ['warn', 'single', { avoidEscape: true }],
      'semi': ['warn', 'always'],
      'no-empty': 'warn',
    },
  },
];
