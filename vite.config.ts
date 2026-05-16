import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site: https://habibahdian.github.io/Portofolio/
export default defineConfig({
  base: "/Portofolio/",
  plugins: [react()],
});
