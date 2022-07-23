import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === "production" ? "/project_fortranslators" : "/",
//   outputDir: "docs",
// };
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "",
  root: "",
  build: {
    base: "/project_fortranslators",
    outDir: "docs",
  },
});
