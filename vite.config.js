import { sveltekit } from '@sveltejs/kit/vite';
import { plugin as md, Mode } from 'vite-plugin-markdown';
import hljs from 'highlight.js';
import hljs_svelte from 'highlightjs-svelte';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(
    fileURLToPath(
        import.meta.url)
); // jshint ignore:line
hljs_svelte(hljs)
const mdPlugin = md({
        mode: Mode.HTML,
        markdownIt: {
            typographer: true,
            highlight: function(str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(str, { language: lang }).value
                    } catch {
                        console.log(`error highlighting for ${lang}`)
                    }
                }

                return '' // use external default escaping
            },
        },
    })
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), mdPlugin],
  server: {
    fs: {
      // throws an error without this when importing Fira font
      allow: ['..']
    },
    proxy: {},
    port: 5174,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  },
  resolve: {
      alias: {
          $actions: resolve(__dirname, './src/lib/actions'),
          $components: resolve(__dirname, './src/lib/components'),
          $section: resolve(__dirname, './src/lib/components/section'),
          $shared: resolve(__dirname, './src/lib/components/shared'),
          $data: resolve(__dirname, './src/lib/data'),
          $models: resolve(__dirname, './src/lib/models'),
          $screens: resolve(__dirname, './src/lib/screens'),
          $services: resolve(__dirname, './src/lib/services'),
          $stores: resolve(__dirname, './src/lib/stores'),
          $utils: resolve(__dirname, './src/lib/utils'),
      },
  },
  define: {
    '__SERVER_VERSION__': JSON.stringify(process.env.npm_package_version),
  }
};

export default config;
