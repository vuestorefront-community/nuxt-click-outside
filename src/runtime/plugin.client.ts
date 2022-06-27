import { defineNuxtPlugin } from '#app';
import VClickOutside from './directive';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VClickOutside);
});
