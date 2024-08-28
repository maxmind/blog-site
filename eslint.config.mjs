// import { fixupConfigRules } from '@eslint/compat';
// import filenames from "eslint-plugin-filenames";
// import security from 'eslint-plugin-security';
// import simpleImportSort from "eslint-plugin-simple-import-sort";
// import sortKeysFix from 'eslint-plugin-sort-keys-fix';
// import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import eslint from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

// array-bracket-newline
// array-element-newline
// comma-dangle
// consistent-return
// dot-notation
// eol-last
// init-declarations
// max-len
// max-params
// no-dupe-class-members
// no-empty-function
// no-invalid-this
// no-loop-func
// no-loss-of-precision
// no-magic-numbers
// no-restricted-imports
// no-trailing-spaces
// no-unused-expressions
// no-useless-constructor
// no-var
// object-curly-newline
// object-curly-spacing
// object-property-newline
// prefer-const
// prefer-destructuring
// prefer-rest-params
// prefer-spread
// quote-props
// quotes
// semi

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
  languageOptions: {
    parser: tseslint.parser,
  },
});

export default tseslint.config(
  // security.rules,
  ...tseslint.configs.recommended,
  prettier,
  {
    ignores: [
      '**/*.md',
      '**/.cache',
      '**/node_modules',
      '**/public',
    ],
  },
  // ...fixupConfigRules(
    // compat.extends(
  //     'plugin:import/errors',
  //     'plugin:import/warnings',
      // 'plugin:security/recommended-legacy',
    // ),
  // ),
  {
    plugins: {},
    // filenames,
    // security: fixupPluginRules(security),
    // "simple-import-sort": simpleImportSort,
    // 'typescript-sort-keys': typescriptSortKeys,
    // 'sort-keys-fix': sortKeysFix,

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        __BASE_PATH__: true,
        __PATH_PREFIX__: true,
        graphql: true,
      },

      parser: tseslint.parser,
      ecmaVersion: 6,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          modules: true,
        },

        requireConfigFile: false,
      },
    },

    settings: {
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
      // 'filenames/match-exported': [1, 'pascal'],

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

      // 'simple-import-sort/imports': [
      //   'warn',
      //   {
      //     groups: [['^\\u0000'], ['^@?\\w'], ['^'], ['^\\.'], ['\\.scss$']],
      //   },
      // ],

      // 'sort-keys': ['warn'],
      // 'sort-keys-fix/sort-keys-fix': 'warn',
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
      // 'filenames/match-regex': [1, '^[a-z0-9-]+$'],
      'max-len': [
        0,
      ],
    },
  },
  ...compat.extends().map((config) => ({
    ...config,
    files: [
      '**/*.ts',
    ],
  })),
  {
    files: [
      '**/*.ts',
    ],

    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: [
          'tsconfig.json',
        ],
      },
    },

    rules: {
      '@typescript-eslint/await-thenable': 'error',

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

      // 'typescript-sort-keys/interface': 1,
      // 'typescript-sort-keys/string-enum': 1,
    },
  },
);
