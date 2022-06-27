import { resolve } from 'pathe';
import { fileURLToPath } from 'node:url';
import { defineNuxtModule, addPlugin } from '@nuxt/kit';

export default defineNuxtModule<{}>({
  meta: {
    name: 'nuxt-click-outside',
    configKey: 'clickOutside',
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('runtime', import.meta.url));

    addPlugin(resolve(runtimeDir, 'plugin.client'));
  },
});
