import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
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
    /** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true,
            preserve: ['ld+json', 'module'],
            typescript: true,
        })
    ],

    kit: {
        adapter: adapter(),
        prerender: {
            crawl: true,
            enabled: true,
            onError: 'fail',
            entries: ['*'],
        },
        methodOverride: {
            allowed: ['PUT', 'PATCH', 'DELETE'],
        },

        vite: () => ({
            resolve: {
                alias: {
                    $libs: resolve(__dirname, './src/libs'),
                    $actions: resolve(__dirname, './src/libs/actions'),
                    $components: resolve(__dirname, './src/libs/components'),
                    $section: resolve(__dirname, './src/libs/components/section'),
                    $shared: resolve(__dirname, './src/libs/components/shared'),
                    $data: resolve(__dirname, './src/libs/data'),
                    $models: resolve(__dirname, './src/libs/models'),
                    $screens: resolve(__dirname, './src/libs/screens'),
                    $services: resolve(__dirname, './src/libs/services'),
                    $stores: resolve(__dirname, './src/libs/stores'),
                    $utils: resolve(__dirname, './src/libs/utils'),
                },
            },
            plugins: [mdPlugin],
        }),
    }
};

export default config;