import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  extends: ['./node_modules/@docus/docs-theme'],
  github: {
    owner: 'nuxt-community',
    repo: 'color-mode-module',
    branch: 'main'
  },
  theme: {},
  content: {
    navigation: {
      fields: ['exact']
    }
  },
  modules: ['@nuxthq/admin', '@docus/github', 'vue-plausible'],
  plausible: {
    domain: 'color-mode.nuxtjs.org'
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#d6ffee',
              100: '#acffdd',
              200: '#83ffcc',
              300: '#30ffaa',
              400: '#00dc82',
              500: '#00bd6f',
              600: '#009d5d',
              700: '#007e4a',
              800: '#005e38',
              900: '#003f25'
            }
          }
        }
      }
    }
  }
})
