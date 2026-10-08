import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    fonts: [
        {
            name: 'Mona Sans',
            cssVariable: '--font-mona-sans',
            provider: fontProviders.google(),
            weights: [400, 700]
        }
    ],
    vite: {
        plugins: [tailwindcss()]
    }
})
