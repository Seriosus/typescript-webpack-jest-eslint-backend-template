module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: [
    "import",
    "import-newlines"
  ],
  ignorePatterns: ['**/*.js'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    "no-multi-spaces": "error",
    "arrow-spacing": "error",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "key-spacing": [
      "error"
    ],
    "arrow-parens": [
      "error",
      "always"
    ],
    "no-trailing-spaces": "error",
    "object-curly-newline": [
      "error",
      {
        "ImportDeclaration": {
          "multiline": true,
          "minProperties": 3
        },
        "ExportDeclaration": {
          "multiline": true,
          "minProperties": 3
        }
      }
    ],
    "import-newlines/enforce": [
      "error",
      {
        "items": 2,
        "max-len": 100,
        "semi": false
      }
    ],
    "no-useless-constructor": "off",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1
      }
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "quote-props": [
      "error",
      "consistent-as-needed"
    ],
    "no-alert": "warn",
    "no-console": "warn",
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "import/prefer-default-export": "off",
    "no-useless-concat": "error",
    "object-shorthand": [
      "error",
      "always",
      {
        "avoidExplicitReturnArrows": true
      }
    ],
    "prefer-template": "error",
    "function-paren-newline": [
      "error",
      "multiline-arguments"
    ],
    "prefer-destructuring": [
      "error",
      {
        "array": false,
        "object": true
      }
    ],
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "@typescript-eslint/type-annotation-spacing": [
      "error",
      {
        "before": false,
        "after": true,
        "overrides": {
          "arrow": {
            "before": true,
            "after": true
          },
          "colon": {
            "before": false,
            "after": true
          }
        }
      }
    ]
  },
};
