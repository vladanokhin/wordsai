import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/'),
            '@src': path.resolve(__dirname, 'resources/js/src/'),
            '@img': path.resolve(__dirname, 'resources/images/'),
            '~animate-sass': path.resolve(__dirname, 'node_modules/animate-sass/'),
            '~loaders.css': path.resolve(__dirname, 'node_modules/loaders.css/'),
            '~pe7-icon': path.resolve(__dirname, 'node_modules/pe7-icon/')
        }
    },
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
