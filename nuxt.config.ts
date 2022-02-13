import { defineNuxtConfig } from 'nuxt3'
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    ssr: false, // dev模式下开启报错 src.replace is not a function；Build模式正常
    vite: {
        plugins: [
            // AutoImport({
            //     resolvers: [NaiveUiResolver()],
            // }),
            Components({
                resolvers: [NaiveUiResolver()],
            }),
        ],
        // @ts-expect-error: Missing ssr key
        ssr: {
            noExternal: ['moment', 'compute-scroll-into-view', 'naive-ui'],
        },
    }
})
