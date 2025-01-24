const config = require("@wdp/eslint");

module.exports = [
  ...config,
  {
    rules: {
      // Hooks can be called from getLayout in pages router which triggers this rule
      "react-hooks/rules-of-hooks": ["off"],
      // Required until links are refactored and legacyBehavior removed from next Links
      "jsx-a11y/anchor-is-valid": ["off"],
    },
  },
];
