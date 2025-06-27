import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Base URL for GitHub Pages - user/org pages use root
  base: "/",

  // Build configuration
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: "terser",
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ["lit"],
        },
      },
    },
  },

  // Public directory for static assets
  publicDir: "public",

  // Development server configuration
  server: {
    port: 3000,
    open: true,
    host: true,
  },

  // Preview server configuration
  preview: {
    port: 8000,
    open: true,
    host: true,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ["lit"],
  },

  // Asset handling
  assetsInclude: [
    "**/*.mp4",
    "**/*.webm",
    "**/*.ogg",
    "**/*.mp3",
    "**/*.wav",
    "**/*.flac",
    "**/*.aac",
  ],

  // Plugin configuration
  plugins: [],

  // CSS configuration
  css: {
    devSourcemap: true,
  },

  // Path resolution
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@/components": resolve(__dirname, "src/components"),
    },
  },
});
