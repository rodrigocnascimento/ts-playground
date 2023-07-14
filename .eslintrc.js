module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: "xo",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      extends: ["xo-typescript"],
      files: ["*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // Extends: ['eslint:recommended'],
  rules: {
    indent: ["error", 2],
    "object-curly-spacing": ["error", "always"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    // "no-console": "warn",
    "no-unused-vars": "warn",
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "prefer-const": "error",
    "object-shorthand": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "no-return-await": "error",
    // "no-shadow": "error", why god, why?
    "no-use-before-define": "off",
  },
};
