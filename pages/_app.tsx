import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../reset.css'
import { classicTuesday } from '../themes'
import Head from 'next/head'
import Layout from '../layout/layout'
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
                <title>Valentin Grib portfolio</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta
                    name="description"
                    content="Hi I'm Valentin Grib a web developer based in Italy. I like programming, math, socializing and sports."
                ></meta>
            </Head>
            <Layout>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Layout>
        </>
    )
}
