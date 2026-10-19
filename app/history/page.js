import Link from "next/link"
import { TraditionHeader } from "../components/traditionPage"
import { Ornament } from "../components/ornament"

// Moscopole (Voskopojë) in 1742, after an engraving. Public domain, via Wikimedia Commons.
const HISTORY_HEADER_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/7/78/Voskopoja_ne_vitin_1742.jpg"

// Other pages to point visitors to while this one is being written.
const MEANWHILE = [
    { href: "/learn", label: "Learn Aromanian", text: "The history of the language and its alphabet" },
    { href: "/traditions", label: "Traditions", text: "Customs from birth and marriage to death" },
    { href: "/personalities", label: "Personalities", text: "Aromanians who left their mark on the Balkans" },
]

export default function History() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
            <TraditionHeader
                back={{ href: "/", label: "Home" }}
                label="The past"
                title="History"
                intro="The story of the Aromanian people across the Balkans."
                image={HISTORY_HEADER_IMAGE}
                imageStyle="object-cover opacity-30 sepia-50 blur-xs"
            />

            <main className="mx-auto w-full max-w-3xl px-5 py-20 text-center">
                <div className="mx-auto w-fit">
                    <p className="font-serif text-4xl italic text-rose-950 md:text-5xl">Coming soon</p>
                    <Ornament stretch className="mt-4" />
                </div>
                <p className="mx-auto mt-6 max-w-xl text-base text-yellow-950 md:text-lg">
                    This page is still being written. In the meantime, you can explore:
                </p>

                <ul className="mt-10 grid gap-6 text-left sm:grid-cols-3">
                    {MEANWHILE.map((page) => (
                        <li key={page.href}>
                            <Link
                                href={page.href}
                                className="group flex h-full flex-col rounded-sm border border-rose-950/30 bg-white p-5 outline-1 outline-offset-4 outline-gold/0 transition hover:border-gold hover:outline-gold"
                            >
                                <span className="font-serif text-xl font-semibold text-rose-950">{page.label}</span>
                                <span className="mt-2 flex-1 text-sm text-yellow-950">{page.text}</span>
                                <span className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gold group-hover:text-rose-950 transition-colors">
                                    Explore
                                    <span aria-hidden className="h-1.5 w-1.5 rotate-135 border-t-2 border-l-2 border-current transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}
