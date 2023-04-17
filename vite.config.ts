import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  server: {
    open: true,
    port: 3000,
  },
  css: {
    modules: {
      generateScopedName: "[folder]_[local]__[hash:base64:5]",
    },
  },
});
