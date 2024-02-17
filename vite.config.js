import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig(() => {
  return {
    server: {
      host: "localhost",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    define: {
      "process.env": {},
    },
    build: {
      outDir: "build",
    },
    plugins: [react(), nodePolyfills()],
  };
});
