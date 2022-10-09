/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['localhost', 'images.yogiyo.co.kr'],
  },
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  trailingSlash: true,
  /*
  if you need proxy, then try this
  async rewrites() {
    return process.env.ENV === 'development'
      ? [
        {
          source: '/api/:path*',
          destination: 'https://url/:path*',
        },
      ]
      : [];
  },
   */
};
