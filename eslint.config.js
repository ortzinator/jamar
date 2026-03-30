import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import pluginCypress from 'eslint-plugin-cypress';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import prettierConfig from 'eslint-config-prettier';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
    {
        ignores: ['node_modules', 'public', 'vendor'],
    },

    js.configs.recommended,

    ...compat.extends('airbnb-base'),

    ...pluginVue.configs['flat/recommended'],

    {
        files: ['cypress/**/*.js'],
        ...pluginCypress.configs.recommended,
    },

    pluginPrettier,
    prettierConfig,

    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                _: 'readonly',
                route: 'readonly',
                axios: 'readonly',
                confirm: 'readonly',
            },
        },
        rules: {
            'vue/html-self-closing': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/component-name-in-template-casing': [
                'error',
                'PascalCase',
                {
                    registeredComponentsOnly: false,
                    ignores: [],
                },
            ],
            'import/no-unresolved': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-shadow': 'off',
            'no-return-assign': 'off',
            'prettier/prettier': 'error',
            'prefer-destructuring': ['error', { object: true, array: false }],
        },
    },
];