import { defineConfig } from 'vitest/config';

export default defineConfig({
  cacheDir: '.vitest',
  test: {
    watch: false,
    cache: false,
    environment: 'node',
  },
});
