// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
      },
    ],
  },
};

// export default withNextIntl(nextConfig);
export default nextConfig;
