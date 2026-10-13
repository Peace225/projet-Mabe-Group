// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://excellenciamabe.org',
      dynamicRoutes: [
        '/',
        '/about',
        '/contact',
        '/poles/ngia-digital',
        '/poles/rupac',
        '/poles/ngia-food',
        '/poles/maison-excellencia',
      ],
      changefreq: 'weekly',
      priority: 0.8,
      customRoutes: {
        '/': { priority: 1.0, changefreq: 'daily' },
      },
    }),
  ],
})