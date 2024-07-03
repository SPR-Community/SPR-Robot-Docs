import { defineConfig } from 'vitepress'
import { shared } from './shared'
// import { en } from './en.mjs'
import { zh } from './zh.mjs'

export default defineConfig({
  ...shared,
  base: '/SPR-Robot-Docs/',
  locales: {
    root: { label: '简体中文', ...zh },
    // en: { label: 'English', ...en },
  }
})