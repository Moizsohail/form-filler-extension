module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      console.log(webpackConfig);
      return {
        ...webpackConfig,
        target: "web",
        entry: {
          main: [
            env === "development" &&
              require.resolve("react-dev-utils/webpackHotDevClient"),
            paths.appIndexJs,
          ].filter(Boolean),
          content: "./src/chrome/content.ts",
        },
        output: {
          ...webpackConfig.output,
          filename: "static/js/[name].js",
          sourceMapFilename: "static/jsmaps/[name].js.map",
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        },
      };
    },
  },
};
