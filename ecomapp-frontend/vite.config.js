import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: '/ecom2_app/', // Adjust the base path as needed
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss('./src/components/appstyles/tailwind.config.js'),
        // Add other postcss plugins if needed
      ],
    },
  },
});
