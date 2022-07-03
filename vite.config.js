import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import DefineOptions from 'unplugin-vue-define-options/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel(['resources/css/app.css', 'resources/js/app.js']),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        DefineOptions(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
