const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({
  swcMinify: false,
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
});
