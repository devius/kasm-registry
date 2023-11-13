/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Serveradmin.ge',
    description: 'Serveradmin,ge Kasm Repository.',
    icon: '/img/logo.svg',
    listUrl: 'https://kasm-registry.serveradmin.ge/',
    contactUrl: 'https://serveradmin.ge/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
