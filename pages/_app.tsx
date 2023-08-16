import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../reset.css'
import { classicTuesday } from '../themes'
import Head from 'next/head'
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Fira Sans', sans-serif;
  }
`

export default function App({ Component, pageProps }) {
    const theme = classicTuesday

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
