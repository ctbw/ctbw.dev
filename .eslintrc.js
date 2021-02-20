module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 100,
        endOfLine: 'auto',
        tabWidth: 2,
      },
    ],
    'import/prefer-default-export': 0,
    'jsx-a11y/href-no-hash': 0,
    'no-console': 0,
    'max-len': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-boolean-value': 0,
    'function-paren-newline': 0,
    'import/no-named-as-default': 0,
    'no-lonely-if': 0,
    'react/forbid-prop-types': 0,
    'no-restricted-syntax': 0,
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-param-reassign': 0,
    'class-methods-use-this': 0,
    'jsx-a11y/label-has-for': 0,
    'no-eval': 0,
    'react/no-did-update-set-state': 0,
    'no-case-declarations': 0,
    'linebreak-style': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'no-nested-ternary': 0,

    // Typescript Rules
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-use-before-define': 1,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-use-before-define': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};
