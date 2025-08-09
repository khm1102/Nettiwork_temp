module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [
          ".ts",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "@nettiwork/client-modules": "./@nettiwork/client-modules",
          "@nettiwork/common": "./@nettiwork/common",
          "@components": "./src/components",
          "@navigations": "./src/navigations",
          "@screens": "./src/screens",
          "@hooks": "./src/hooks",
          "@utils": "./src/utils",
        },
      },
    ],
    "react-native-reanimated/plugin",
    "@babel/plugin-transform-export-namespace-from",
  ],
};
