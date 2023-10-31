/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                header: '64px auto 1fr;',
                footer: '1fr auto 64px'
            },
            keyframes: {
                slideUp: {
                    '0%': {
                        transform: 'translateY(100%)',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: 1
                    }
                },
                slideDown: {
                    '0%': {
                        transform: 'translateY(-100%)',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: 1
                    }
                }
            }
        }
    },
    plugins: []
}
