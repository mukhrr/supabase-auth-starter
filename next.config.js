module.exports = {
  compiler: {
    removeConsole: {
      exclude: ['error', 'info']
    }
  },
  trailingSlash: false,
  images: {
    deviceSizes: [390, 435, 768, 1024, 1280]
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@supabase/supabase-js'],
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP']
  }
}
