/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'fr-FR', 'en-GB'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
