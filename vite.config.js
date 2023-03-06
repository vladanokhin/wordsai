import { defineConfig } from 'vite';
import {viteStaticCopy} from "vite-plugin-static-copy";
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
    logLevel: "error",
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/'),
            '@src': path.resolve(__dirname, 'resources/js/src/'),
            '@img': path.resolve(__dirname, 'resources/images/'),
        }
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'resources/images/',
                    dest: '../assets/'
                }
            ]
        }),
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
