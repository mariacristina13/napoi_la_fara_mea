import Link from "next/link"
import { TraditionHeader } from "../components/traditionPage"
import { Ornament } from "../components/ornament"

export default function About() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
            <TraditionHeader
                back={{ href: "/", label: "Home" }}
                label="Behind the project"
                title="About the Developer"
                intro="Who made Nãpoi la Fara Mea, and why."
            />

            <main className="mx-auto w-full max-w-3xl px-5 py-20 text-center">
                <div className="mx-auto w-fit">
                    <p className="font-serif text-4xl italic text-rose-950 md:text-5xl">Coming soon</p>
                    <Ornament stretch className="mt-4" />
                </div>
                <p className="mx-auto mt-6 max-w-xl text-base text-yellow-950 md:text-lg">
                    This page is still being written. In the meantime, you can explore the rest of the site.
                </p>
                <Link
                    href="/"
                    className="group mt-8 inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-wide text-rose-950 hover:border-rose-950 transition-colors"
                >
                    Back to the home page
                    <span aria-hidden className="h-2 w-2 rotate-135 border-t-2 border-l-2 border-current transition-transform group-hover:translate-x-1" />
                </Link>
            </main>
        </div>
    )
}
