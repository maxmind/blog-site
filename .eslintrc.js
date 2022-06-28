module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:security/recommended',
    'prettier', // needs to be last to prevent eslint and prettier conflicts
  ],
  globals: {
    __BASE_PATH__: true,
    __PATH_PREFIX__: true,
    graphql: true,
  },
  ignorePatterns: [
    '**/*.md',
    '.cache',
    'node_modules',
    'public',
    '*.json.json',
  ],
  overrides: [
    {
      extends: [
        'plugin:json/recommended',
      ],
      files: [
        '**/*.json',
      ],
      rules: {
        'comma-dangle': [
          'warn',
          'never',
        ],
        'quote-props': [
          'warn',
          'always',
        ],
        quotes: [
          'warn',
          'double',
        ],
        semi: [
          'warn',
          'never',
        ],
      },
    },
    {
      files: [
        'content/**',
      ],
      rules: {
        'filenames/match-exported': [
          0,
        ],
        'filenames/match-regex': [
          1,
          '^[a-z0-9-]+$',
        ],
        'max-len': [
          0,
        ],
      },
    },
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      files: [
        '**/*.ts',
      ],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            custom: {
              match: true,
              regex: '^I[A-Z]',
            },
            format: [
              'PascalCase',
            ],
            selector: 'interface',
          },
        ],
        'typescript-sort-keys/interface': 1,
        'typescript-sort-keys/string-enum': 1,
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': [
            '.ts',
          ],
        },
      },
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
    ecmaVersion: 6,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'filenames',
    'json',
    'security',
    'simple-import-sort',
    'sort-keys-fix',
    'typescript-sort-keys',
  ],
  root: true,
  rules: {
    'array-bracket-newline': [
      'warn',
      {
        minItems: 1,
        multiline: true,
      },
    ],
    'array-element-newline': [
      'warn',
      'always',
    ],
    'comma-dangle': [
      'warn',
      'always-multiline',
    ],
    'eol-last': [
      'warn',
      'always',
    ],
    'filenames/match-exported': [
      1,
      'pascal',
    ],
    'max-len': [
      'warn',
      {
        code: 80,
      },
    ],
    'no-trailing-spaces': 'warn',
    'object-curly-newline': [
      'warn',
      {
        ExportDeclaration: 'never',
        ImportDeclaration: {
          multiline: true,
        },
        ObjectExpression: {
          minProperties: 1,
          multiline: true,
        },
        ObjectPattern: {
          multiline: true,
        },
      },
    ],
    'object-curly-spacing': [
      'warn',
      'always',
      {
        objectsInObjects: false,
      },
    ],
    'object-property-newline': 'warn',
    'quote-props': [
      'warn',
      'as-needed',
    ],
    quotes: [
      'warn',
      'single',
    ],
    semi: [
      1,
      'always',
    ],
    'simple-import-sort/imports': [
      'warn',
      {
        // eslint-disable-next-line max-len
        // https://github.com/lydell/eslint-plugin-simple-import-sort#custom-grouping
        groups: [
          [
            '^\\u0000',
          ],
          [
            '^@?\\w',
          ],
          [
            '^',
          ],
          [
            '^\\.',
          ],
          [
            '\\.scss$',
          ],
        ],
      },
    ],
    'sort-keys': [
      'warn',
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
      ],
    },
    polyfills: [
      'CustomEvent',
      'fetch',
      'IntersectionObserver',
      'Promise.all',
      'Promise.race',
      'Promise.resolve',
      'URLSearchParams',
    ],
  },
};
