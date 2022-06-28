import { defineNuxtPlugin } from '#app';
import { directive, name } from './directive';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive(name, directive);
});
