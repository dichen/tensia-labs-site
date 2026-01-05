// @ts-check
import { defineConfig } from 'astro/config';
import tailwandcss from "@tailwindcss/vite"
// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwandcss()],
    },
});
