import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: '0.0.0.0',
    allowedHosts: [
      'b626b9216b6845f3981aff80fa93f55b.vfs.cloud9.us-east-2.amazonaws.com'
    ],
  },
});