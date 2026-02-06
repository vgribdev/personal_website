import Link from 'next/link'
import { Social } from '../components/Social'
import { Logo } from '../components/svg/Logo'
import { Omio } from '../components/svg/Omio'
import { Pipedrive } from '../components/svg/Pipedrive'
import { Stech } from '../components/svg/Stech'
import { Elty } from '../components/svg/Elty'

const Line = () => {
    return <div className="h-0.5 rounded-[1px] bg-black" />
}

export default function Home() {
    return (
        <main className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-4 text-lg">
            <div className="relative flex min-h-full w-full flex-col items-center justify-center">
                <header className="absolute top-4 grid h-8 w-full grid-cols-[64px_auto_1fr] items-center gap-3 md:top-16">
                    <Line />
                    <div className="animate-slideDown flex">
                        <Logo fill="text-black" />
                    </div>
                    <Line />
                </header>

                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="w-full text-6xl font-bold">
                        Hi, I&apos;m Valentin Grib!
                    </h1>
                    <p className="w-ful mt-8 text-xl uppercase">
                        A Full-stack developer&nbsp;
                        <br className="md:hidden"></br>
                        based in Italy
                    </p>
                </div>
                <div className="mt-8 flex flex-col gap-4 md:flex-row">
                    <Link
                        href={'https://www.elty.it'}
                        className="group flex items-center justify-center rounded-md border border-solid border-gray-200 p-4 hover:border-teal-400"
                    >
                        <Elty className="h-6 duration-300 group-hover:scale-110 md:h-8"></Elty>
                    </Link>
                    <Link
                        href={'https://www.omio.com'}
                        className="group flex items-center justify-center rounded-md border border-solid border-gray-200 p-4 hover:border-teal-400"
                    >
                        <Omio className="h-6 duration-300 group-hover:scale-110 md:h-8"></Omio>
                    </Link>
                    <Link
                        href={'https://www.pipedrive.com'}
                        className="group flex items-center justify-center rounded-md border border-solid border-gray-200 p-4 hover:border-teal-400"
                    >
                        <Pipedrive className="h-6 duration-300 group-hover:scale-110 md:h-8"></Pipedrive>
                    </Link>
                    <Link
                        href={'https://www.stech.co.uk/'}
                        className="group flex items-center justify-center rounded-md border border-solid border-gray-200 p-4 hover:border-teal-400"
                    >
                        <Stech className="h-6 duration-300 group-hover:scale-110 md:h-8"></Stech>
                    </Link>
                </div>

                <footer className="absolute bottom-4 grid h-8 w-full grid-cols-[1fr_auto_64px] items-center gap-3 md:bottom-16">
                    <Line />
                    <Social />
                    <Line />
                </footer>
            </div>
        </main>
    )
}
