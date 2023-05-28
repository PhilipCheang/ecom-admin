/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'philip-next-ecommerce.s3.amazonaws.com',
      'philip-next-ecommerce.s3.us-east-2.amazonaws.com'
    ],
  },
};

module.exports = nextConfig;

