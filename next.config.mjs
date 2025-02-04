import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'phpstack-1406565-5230671.cloudwaysapps.com',
          },
          {
            protocol: 'https',
            hostname: 'admin.ahmedalmaghribi.kw',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
          }
        ],
      },
      productionBrowserSourceMaps: true,
      // basePath: '/kw'
};

export default withNextIntl(nextConfig);
