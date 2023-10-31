import { Metadata } from 'next'
import './global.css'
import { GeistSans } from 'geist/font'

export const metadata: Metadata = {
    title: 'Valentin Grib Portfolio',
    description:
        "Hi I'm Valentin Grib a web developer based in Italy. I like programming, math, socializing and sports."
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={GeistSans.className}>
            <body>{children}</body>
        </html>
    )
}
