import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

module.exports = {
  resolve: {
    fallback: {
      global: require.resolve("global"), // Polyfill global
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      process: require.resolve("process/browser"),
    },
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
};
