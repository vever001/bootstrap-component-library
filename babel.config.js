module.exports = (api) => {
  if (api.env("test")) {
    return {
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "usage",
            corejs: 3,
          },
        ],
        "@babel/preset-react",
      ],
      plugins: ["@babel/plugin-transform-runtime"],
      sourceType: "unambiguous",
    };
  }
  return {
    plugins: [
      ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["@babel/plugin-proposal-private-methods", { loose: true }],
    ],
  };
};
