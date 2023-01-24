import { defineConfig } from 'astro/config';

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.matterhornart.com',

  integrations: [robotsTxt()]
});