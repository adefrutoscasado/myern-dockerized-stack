
const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
    'extends': [
        'eslint:recommended', 
        'react'
    ],
    'rules': {
        'no-var': ERROR,
        'comma-dangle': [WARN, 'only-multiline'],
        'no-use-before-define': ERROR,
        'semi': [WARN, 'never'],
        'object-curly-spacing': OFF,
        'quotes': [WARN, 'single', { 'allowTemplateLiterals': true }],
        'func-names': [ERROR, 'never'],
        'prefer-arrow-callback': OFF,
        'prefer-template': WARN,
        "indent": [ERROR, 4, {
            "ignoredNodes": ["TemplateLiteral", "SwitchCase"]
        }],
        'no-trailing-spaces': ERROR,
        'no-magic-numbers': WARN,
        //'react/jsx-one-expression-per-line': OFF,
        //'react/jsx-max-props-per-line': [WARN, { 'maximum': 2}], // Eslint autofix breaks the identation
        //'max-len': [WARN, { 'ignoreTrailingComments': true, 'ignoreComments': true }],
        'space-in-parens': WARN,
        'arrow-spacing': WARN,
        'array-callback-return': [WARN, { allowImplicit: true }],
        'no-unneeded-ternary': [WARN, { defaultAssignment: false }],
        'react/jsx-boolean-value': WARN,
        "react-hooks/rules-of-hooks": OFF,
        "react-hooks/exhaustive-deps": OFF
    }
}
