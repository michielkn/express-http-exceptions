/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        "comma-dangle": ['error', 'always'],
        'indent': ['error', 4,],
        'no-multiple-empty-lines': ['error',],
        'quotes': ['error', 'single',],
        'object-curly-spacing': ['error', 'always',],
        'semi': ['error', 'always',],
    }
};