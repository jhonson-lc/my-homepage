const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({
  swcMinify: false,
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
      });
    }
    return config;
  },
});
