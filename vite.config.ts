import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Router - changes rarely
            "vendor-router": ["react-router-dom"],
            // Animation - largest dep, separate cache
            "vendor-motion": ["framer-motion"],
            // UI lib
            "vendor-ui": ["@radix-ui/react-tooltip", "@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
          },
        },
      },
      // Slightly larger warning threshold - framer-motion is inherently heavy
      chunkSizeWarningLimit: 600,
    },
  };
});