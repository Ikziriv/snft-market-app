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
        ssr: true,
        prerender: {
            crawl: true,
            enabled: true,
            onError: 'fail',
            pages: ['*'],
        },
        methodOverride: {
            allowed: ['PUT', 'PATCH', 'DELETE'],
        },

        vite: () => ({
            resolve: {
                alias: {
                    $stores: resolve(__dirname, './src/libs/stores'),
                    $screens: resolve(__dirname, './src/libs/screens'),
                    $components: resolve(__dirname, './src/libs/components'),
                    $page: resolve(__dirname, './src/libs/page'),
                    $shared: resolve(__dirname, './src/libs/components/shared'),
                    $models: resolve(__dirname, './src/libs/models'),
                    $data: resolve(__dirname, './src/libs/data'),
                    $utils: resolve(__dirname, './src/libs/utils'),
                },
            },
            plugins: [mdPlugin],
        }),
    }
};

export default config;