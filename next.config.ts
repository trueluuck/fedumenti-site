import type { NextConfig } from "next";

const baseConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  turbopack: {},
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" }
    ]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false
  },
  experimental: {
    optimizePackageImports: ["lucide-react"]
  },
  async redirects() {
    return [
      { source: "/lp/google-360", destination: "/google-360", permanent: true },
      { source: "/lp/financie-startup", destination: "/linxar/hub", permanent: true },
      { source: "/about", destination: "/sobre", permanent: true },
      { source: "/contact", destination: "/contato", permanent: true },
      { source: "/services", destination: "/", permanent: false },
      { source: "/cursos", destination: "/", permanent: false },
      { source: "/depoimentos", destination: "/", permanent: false },
      { source: "/empresas", destination: "/", permanent: false },
      { source: "/indicacoes", destination: "/", permanent: false },
      { source: "/pesquisa", destination: "/", permanent: false },
      { source: "/lp/:slug*", destination: "/", permanent: false },
    ];
  },
  async headers() {
    return [
      { source: "/assets/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      {
        source: "/:path*",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" }
        ]
      }
    ];
  }
};

export default baseConfig;
