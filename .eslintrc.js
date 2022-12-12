module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/comma-dangle": ["error", "never"],
    "@typescript-eslint/space-before-blocks": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    "import/prefer-default-export": "off",
    "no-restricted-exports": "off",
    "no-param-reassign": "off",
    "react/require-default-props": "off",
    "react/jsx-one-expression-per-line": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off"
  },
  extends: [
    "eslint-config-airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ]
};