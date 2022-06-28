import { resolve } from 'pathe';
import { fileURLToPath } from 'node:url';
import { defineNuxtModule, addPlugin } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'nuxt-click-outside',
  },
  setup(_options, nuxt) {
    nuxt.options.vue.compilerOptions.directiveTransforms =
      nuxt.options.vue.compilerOptions.directiveTransforms || {};
    nuxt.options.vue.compilerOptions.directiveTransforms['click-outside'] =
      () => ({
        props: [],
        needRuntime: true,
      });
    nuxt.options.vue.compilerOptions.directiveTransforms.clickOutside = () => ({
      props: [],
      needRuntime: true,
    });

    const runtimeDir = fileURLToPath(new URL('runtime', import.meta.url));

    addPlugin(resolve(runtimeDir, 'plugin'));
  },
});
