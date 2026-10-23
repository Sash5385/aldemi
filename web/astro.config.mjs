// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aldemi.com.ua',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({ i18n: { defaultLocale: 'uk', locales: { uk: 'uk-UA', en: 'en-US' } } }),
  ],
  vite: { plugins: [tailwindcss()] },
});
