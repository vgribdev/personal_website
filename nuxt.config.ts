import { Configuration } from '@nuxt/types'

const config: Configuration = {
  // Define your configuration with auto-completion & type checking
     mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Valentin Grib',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Portfolio of Valentin Grib' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: ['static/reset.min.css'],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],
    /*
    ** Nuxt.js modules
    */
    modules: [],

    buildModules: ['@nuxt/typescript-build'],
}
export default config
