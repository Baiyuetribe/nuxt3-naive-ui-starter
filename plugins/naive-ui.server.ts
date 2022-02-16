import { setup } from '@css-render/vue3-ssr';
import { defineNuxtPlugin } from '#app';

// I'm not sure whether the plugin is called twice in each refreshing
// Maybe it's expected. If you have more information about it, please comment in the issue

export default defineNuxtPlugin((nuxtApp) => {
    const { collect } = setup(nuxtApp.vueApp);
    nuxtApp.ssrContext!.renderMeta = () => {
        return {
            headTags: collect(),    // 用于在head头部插入style标签，无css条件下会有白屏
        };
    };
});
