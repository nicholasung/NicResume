/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Disable the Image Optimization API
  },
  ...(process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS && {
    basePath: "/NicResume", // Ensure this matches your repository name
    assetPrefix: "/NicResume/", // Ensure assets are correctly prefixed
  }),
};

export default nextConfig;