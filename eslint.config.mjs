import pluginJs from '@eslint/js';

import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    {
        files: [ '**/*.{js,mjs,cjs,ts,jsx,tsx}' ],
        languageOptions: {
            parser: '@typescript-eslint/parser',
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
    },
    {
        ignores: [ '**/build/**' ],
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect' // Automatically detects the React version
            }
        },
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
        
            // 🟢 Syntax Optimization
            'quotes': [ 'error', 'single', { 'avoidEscape': true } ],
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-arrow-callback': 'error',
            'arrow-body-style': [ 'error', 'as-needed' ],
            'semi': [ 'error', 'always' ],
            'object-curly-spacing': [ 'error', 'always' ],
            'array-bracket-spacing': [ 'error', 'always' ],
            'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxEOF': 1, 'maxBOF': 0 } ],
            // 🟠 Code Quality Enhancements
            'eqeqeq': [ 'error', 'always' ],
            'no-console': [ 'warn', { 'allow': [ 'warn', 'error' ] } ],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [ 'warn' ],
 
            // 🔴 React-Specific Rules
            'react/react-in-jsx-scope': 'off', // Disable unnecessary import rule
            'react/jsx-key': 'error', // Enforce keys in JSX elements
            'react/function-component-definition': [ 'error', {
                'namedComponents': 'arrow-function',
                'unnamedComponents': 'arrow-function'
            } ],
            'react/jsx-filename-extension': [ 2, { extensions: [ '.js', '.jsx', '.tsx' ] } ], // Allow JSX syntax in .tsx files
            'react/jsx-indent': [ 2, 4 ], // Indent JSX tags with 4 spaces
            'indent': [ 2, 4 ], // Indent all code with 4 spaces
            'react/prop-types': 'off', // Turn off prop-types as we're using TypeScript
            'react/no-unescaped-entities': 'warn', // Warn about unescaped characters in JSX (e.g., " or ')
            'react/jsx-no-target-blank': 'warn', // Warn about links with target="_blank" without rel="noopener noreferrer"
 
            // ✅ React Hooks Rules
            'react-hooks/rules-of-hooks': 'error', // Enforces rules of hooks
            'react-hooks/exhaustive-deps': 'warn' // Warns about missing dependencies in useEffect
        },
    }
];