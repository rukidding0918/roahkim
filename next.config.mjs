import path from 'path';
import { fileURLToPath } from 'url';

// __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/images/**',
      },
    ],
    unoptimized: true,
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  publicRuntimeConfig: {
    staticFolder: path.join(__dirname, 'src/public'),
  },
  output: 'export',
  distDir: '../dist',
};

export default nextConfig;
