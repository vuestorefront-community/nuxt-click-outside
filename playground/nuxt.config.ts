import { defineNuxtConfig } from 'nuxt';
import NuxtClickOutside from '@vuestorefront-community/nuxt-click-outside';

export default defineNuxtConfig({
  modules: [NuxtClickOutside],
  clickOutside: {
    isActive: true,
    detectIFrame: true,
    capture: false,
  },
});
