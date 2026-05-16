import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site: https://habibahdian.github.io/Portfolioio/
export default defineConfig({
  base: "/Portfolioio/",
  plugins: [react()],
});
