/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pat-pic-000-000-001.s3.amazonaws.com',
                port: '', // Leave empty if not needed
                pathname: '/**', // Allow all paths
            },
        ],
  },
};

export default nextConfig;
