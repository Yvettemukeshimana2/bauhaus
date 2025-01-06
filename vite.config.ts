  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";

  export default defineConfig({
    plugins: [react()],
    css: {
      postcss: "./postcss.config.js",
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },
    },
    // server: {
    //   proxy: {
    //     "/item": {
    //       target: "https://muheservices.vercel.app", // Your backend API URL
    //       changeOrigin: true, // Adjust the origin header for requests
    //       rewrite: (path) => path.replace(/^\/item/, ""), // Optional: Adjust path if needed
    //     },
    //   },
    // },
  });

