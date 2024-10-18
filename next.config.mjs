/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    config.resolve.fallback = {
      encoding: false, // Ignoring 'encoding' package
      "pino-pretty": false,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
