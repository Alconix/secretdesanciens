module.exports = function override(config) {
  config.module.rules.push({
    test: /\.html$/,
    use: [
      {
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
    ],
  });

  return config;
};
