import Link from 'next/link'
import { Social } from '../components/Social'
import { Logo } from '../components/svg/Logo'
import { Omio } from '../components/svg/Omio'
import { Pipedrive } from '../components/svg/Pipedrive'
import { Stech } from '../components/svg/Stech'

const Line = () => {
    return <div className="h-[2px] rounded-[1px] bg-black" />
}

export default function Home() {
    return (
        <main className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-4 text-lg">
            <div className="relative flex min-h-full w-full flex-col items-center justify-center">
                <header className="absolute top-16 grid h-8 w-full grid-cols-header items-center gap-3">
                    <Line />
                    <div className="flex animate-[0.6s_ease-out_0s_1_slideDown]">
                        <Logo fill="text-black" />
                    </div>
                    <Line />
                </header>

                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="w-full text-6xl font-bold">
                        Hi, I&apos;m Valentin Grib!
                    </h1>
                    <p className="w-ful mt-8 text-xl uppercase">
                        A Full-stack developer based in Italy
                    </p>
                </div>
                <div className="mt-8 flex flex-col gap-4 md:flex-row">
                    <Link
                        href={'https://www.omio.com'}
                        className="flex items-center justify-center rounded-md border border-solid border-gray-200 p-4"
                    >
                        <Omio className="h-6 md:h-8"></Omio>
                    </Link>
                    <Link
                        href={'https://www.pipedrive.com'}
                        className="flex items-center justify-center rounded-md border border-solid border-gray-200 p-4"
                    >
                        <Pipedrive className="h-6 md:h-8"></Pipedrive>
                    </Link>
                    <Link
                        href={'https://www.stech.co.uk/'}
                        className="flex items-center justify-center rounded-md border border-solid border-gray-200 p-4"
                    >
                        <Stech className="h-6 md:h-8"></Stech>
                    </Link>
                </div>

                <footer className="absolute bottom-16 grid h-8 w-full grid-cols-footer items-center gap-3">
                    <Line />
                    <Social />
                    <Line />
                </footer>
            </div>
        </main>
    )
}
