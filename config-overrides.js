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

  config.module.rules.push({
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 25000,
        },
      },
    ],
  });

  return config;
};
