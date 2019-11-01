/* eslint-disable no-param-reassign */
module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };

    return config;
  },
};
