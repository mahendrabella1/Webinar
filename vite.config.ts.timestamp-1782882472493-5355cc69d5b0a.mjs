// vite.config.ts
import { defineConfig, splitVendorChunkPlugin } from "file:///C:/Users/WELCOME/OneDrive/Desktop/New%20folder%20(2)/Webinar/node_modules/.pnpm/vite@5.4.21_terser@5.48.0/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/WELCOME/OneDrive/Desktop/New%20folder%20(2)/Webinar/node_modules/.pnpm/@vitejs+plugin-react@4.7.0_vite@5.4.21_terser@5.48.0_/node_modules/@vitejs/plugin-react/dist/index.js";
import compression from "file:///C:/Users/WELCOME/OneDrive/Desktop/New%20folder%20(2)/Webinar/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.21_terser@5.48.0_/node_modules/vite-plugin-compression/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    // Gzip compression
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false
    }),
    // Brotli compression
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
      deleteOriginFile: false
    })
  ],
  build: {
    target: "es2015",
    minify: "terser",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"]
      }
    },
    rollupOptions: {
      output: {
        // Fine-grained manual chunks for optimal caching
        manualChunks(id) {
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "react-core";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "lucide";
          }
          if (id.includes("node_modules/@supabase")) {
            return "supabase";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        // Consistent hashed filenames for long-term caching
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxXRUxDT01FXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcTmV3IGZvbGRlciAoMilcXFxcV2ViaW5hclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcV0VMQ09NRVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXE5ldyBmb2xkZXIgKDIpXFxcXFdlYmluYXJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1dFTENPTUUvT25lRHJpdmUvRGVza3RvcC9OZXclMjBmb2xkZXIlMjAoMikvV2ViaW5hci92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgc3BsaXRWZW5kb3JDaHVua1BsdWdpbiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBzcGxpdFZlbmRvckNodW5rUGx1Z2luKCksXG5cbiAgICAvLyBHemlwIGNvbXByZXNzaW9uXG4gICAgY29tcHJlc3Npb24oe1xuICAgICAgYWxnb3JpdGhtOiAnZ3ppcCcsXG4gICAgICBleHQ6ICcuZ3onLFxuICAgICAgdGhyZXNob2xkOiAxMDI0LFxuICAgICAgZGVsZXRlT3JpZ2luRmlsZTogZmFsc2UsXG4gICAgfSksXG5cbiAgICAvLyBCcm90bGkgY29tcHJlc3Npb25cbiAgICBjb21wcmVzc2lvbih7XG4gICAgICBhbGdvcml0aG06ICdicm90bGlDb21wcmVzcycsXG4gICAgICBleHQ6ICcuYnInLFxuICAgICAgdGhyZXNob2xkOiAxMDI0LFxuICAgICAgZGVsZXRlT3JpZ2luRmlsZTogZmFsc2UsXG4gICAgfSksXG4gIF0sXG5cbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlczIwMTUnLFxuICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogNjAwLFxuXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgICBwdXJlX2Z1bmNzOiBbJ2NvbnNvbGUubG9nJywgJ2NvbnNvbGUuaW5mbyddLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIEZpbmUtZ3JhaW5lZCBtYW51YWwgY2h1bmtzIGZvciBvcHRpbWFsIGNhY2hpbmdcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgLy8gUmVhY3QgY29yZVxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL3JlYWN0LycpIHx8IGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvcmVhY3QtZG9tLycpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlYWN0LWNvcmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBGcmFtZXIgTW90aW9uIChsYXJnZSBcdTIwMTQgaXNvbGF0ZSBpdClcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnZnJhbWVyLW1vdGlvbic7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEx1Y2lkZSBpY29uc1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2x1Y2lkZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFN1cGFiYXNlXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvQHN1cGFiYXNlJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3VwYWJhc2UnO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBFdmVyeXRoaW5nIGVsc2UgaW4gbm9kZV9tb2R1bGVzIGdvZXMgdG8gYSBnZW5lcmFsIHZlbmRvciBjaHVua1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yJztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQ29uc2lzdGVudCBoYXNoZWQgZmlsZW5hbWVzIGZvciBsb25nLXRlcm0gY2FjaGluZ1xuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRXLFNBQVMsY0FBYyw4QkFBOEI7QUFDamEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBR3hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLHVCQUF1QjtBQUFBO0FBQUEsSUFHdkIsWUFBWTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLE1BQ0wsV0FBVztBQUFBLE1BQ1gsa0JBQWtCO0FBQUEsSUFDcEIsQ0FBQztBQUFBO0FBQUEsSUFHRCxZQUFZO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxLQUFLO0FBQUEsTUFDTCxXQUFXO0FBQUEsTUFDWCxrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsdUJBQXVCO0FBQUEsSUFFdkIsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLFFBQ2YsWUFBWSxDQUFDLGVBQWUsY0FBYztBQUFBLE1BQzVDO0FBQUEsSUFDRjtBQUFBLElBRUEsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBO0FBQUEsUUFFTixhQUFhLElBQUk7QUFFZixjQUFJLEdBQUcsU0FBUyxxQkFBcUIsS0FBSyxHQUFHLFNBQVMseUJBQXlCLEdBQUc7QUFDaEYsbUJBQU87QUFBQSxVQUNUO0FBRUEsY0FBSSxHQUFHLFNBQVMsNEJBQTRCLEdBQUc7QUFDN0MsbUJBQU87QUFBQSxVQUNUO0FBRUEsY0FBSSxHQUFHLFNBQVMsMkJBQTJCLEdBQUc7QUFDNUMsbUJBQU87QUFBQSxVQUNUO0FBRUEsY0FBSSxHQUFHLFNBQVMsd0JBQXdCLEdBQUc7QUFDekMsbUJBQU87QUFBQSxVQUNUO0FBRUEsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQTtBQUFBLFFBR0EsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
