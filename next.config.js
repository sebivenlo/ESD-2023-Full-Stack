/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for hot reloading inside a docker container
  webpackDevMiddleware:
    process.env.NODE_ENV !== "production"
      ? (
          /** @type {{ watchOptions: { poll: number; aggregateTimeout: number; }; }} */ config
        ) => {
          config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
          };
          return config;
        }
      : undefined,
};

module.exports = nextConfig;
