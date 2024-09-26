module.exports = {
    languageOptions: {
        parserOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
        },
    },
    ignores: ['/coverage/**'],
    rules: {
        'no-unused-vars': ['error', { argsIgnorePattern: '^(err|req|res|next)$' }],
        'no-mixed-requires': ['error', { allowCall: true }],
        quotes: ['error', 'single'],
        'no-trailing-spaces': 'error',
        indent: 'error',
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'keyword-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
        'no-mixed-spaces-and-tabs': 'error',
        'comma-spacing': ['error', { before: false, after: true }],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'one-var': ['error', { initialized: 'never' }],
        'no-var': 'error',
    },
};
