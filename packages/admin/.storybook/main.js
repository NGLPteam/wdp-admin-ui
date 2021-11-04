const path = require("path");

module.exports = {
  stories: ["../@(components|theme)/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-themes",
    "storybook-addon-next-router",
    "storybook-react-i18next",
    "@storybook/addon-storysource",
    "storybook-addon-designs",
    "storybook-addon-grid/preset",
    "aria-live-storybook-addon",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen",
  },

  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "../../node_modules",
    ];
    config.resolve.alias["@/components"] = path.resolve(
      __dirname,
      "../components"
    );
    config.resolve.alias["@/theme"] = path.resolve(__dirname, "../theme");
    return config;
  },
  //
  // webpackFinal: async (config) => {
  //   config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
  //
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     "@/components": path.resolve(__dirname, "../components"),
  //     "@/theme": path.resolve(__dirname, "../theme"),
  //   };
  //
  //   return config;
  // },
};
