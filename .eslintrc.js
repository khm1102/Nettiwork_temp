module.exports = {
  root: true,
  extends: [
    "@react-native",
  ],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": true }],
    "quotes": ["off"],
  },
};
