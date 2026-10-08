export default {
    trailingComma: 'none',
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.astro',
            options: { parser: 'astro' }
        }
    ],
    tailwindStylesheet: './src/styles/global.css'
}
