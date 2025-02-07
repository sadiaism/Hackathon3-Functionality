/** @type {import('next').NextConfig} */

module.exports = {
    experimental: {
      appDir: true
    }
  }
  

const nextConfig = {
  images:{
      remotePatterns:[
          {
              hostname:"cdn.sanity.io",
          }
      ]

  }
};

export default nextConfig;

