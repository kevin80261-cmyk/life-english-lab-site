import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 正式網域確定後改這裡
export default defineConfig({
  site: 'https://life-english-lab.pages.dev',
  integrations: [sitemap()],
});
