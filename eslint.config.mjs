import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import filenames from "eslint-plugin-filenames";
import security from "eslint-plugin-security";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import typescriptSortKeys from "eslint-plugin-typescript-sort-keys";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/*.md", "**/.cache", "**/node_modules", "**/public"],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:compat/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:security/recommended-legacy",
    "prettier",
)), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        filenames,
        security: fixupPluginRules(security),
        "simple-import-sort": simpleImportSort,
        "sort-keys-fix": sortKeysFix,
        "typescript-sort-keys": typescriptSortKeys,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            __BASE_PATH__: true,
            __PATH_PREFIX__: true,
            graphql: true,
        },

        parser: babelParser,
        ecmaVersion: 6,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                modules: true,
            },

            requireConfigFile: false,
        },
    },

    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },

        polyfills: [
            "CustomEvent",
            "fetch",
            "IntersectionObserver",
            "Promise.all",
            "Promise.race",
            "Promise.resolve",
            "URLSearchParams",
        ],
    },

    rules: {
        "array-bracket-newline": ["warn", {
            minItems: 1,
            multiline: true,
        }],

        "array-element-newline": ["warn", "always"],
        "comma-dangle": ["warn", "always-multiline"],
        "eol-last": ["warn", "always"],
        "filenames/match-exported": [1, "pascal"],

        "max-len": ["warn", {
            code: 80,
        }],

        "no-trailing-spaces": "warn",

        "object-curly-newline": ["warn", {
            ExportDeclaration: "never",

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
        }],

        "object-curly-spacing": ["warn", "always", {
            objectsInObjects: false,
        }],

        "object-property-newline": "warn",
        "quote-props": ["warn", "as-needed"],
        quotes: ["warn", "single"],
        semi: [1, "always"],

        "simple-import-sort/imports": ["warn", {
            groups: [["^\\u0000"], ["^@?\\w"], ["^"], ["^\\."], ["\\.scss$"]],
        }],

        "sort-keys": ["warn"],
        "sort-keys-fix/sort-keys-fix": "warn",
    },
}, {
    files: ["content/**"],

    rules: {
        "filenames/match-exported": [0],
        "filenames/match-regex": [1, "^[a-z0-9-]+$"],
        "max-len": [0],
    },
}, ...compat.extends(
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
).map(config => ({
    ...config,
    files: ["**/*.ts"],
})), {
    files: ["**/*.ts"],

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: ["tsconfig.json"],
        },
    },

    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
    },

    rules: {
        "@typescript-eslint/await-thenable": "error",

        "@typescript-eslint/naming-convention": ["error", {
            custom: {
                match: true,
                regex: "^I[A-Z]",
            },

            format: ["PascalCase"],
            selector: "interface",
        }],

        "typescript-sort-keys/interface": 1,
        "typescript-sort-keys/string-enum": 1,
    },
}];