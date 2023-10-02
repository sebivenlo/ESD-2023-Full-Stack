/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
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

export default config;
