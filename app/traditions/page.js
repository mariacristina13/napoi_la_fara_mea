import Image from "next/image"
import Link from "next/link"
import { TRADITIONS_HEADER_IMAGE, TRADITIONS_HEADER_IMAGE_STYLE } from "../components/headerImages"
import { Ornament, EmbroideryBand } from "../components/ornament"

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V"]

// Traditions without a page yet have no href and show as "coming soon".
const TRADITIONS = [
    {
        href: "/birth",
        title: "Birth",
        description: "Beliefs and rituals that protected mother and child, from conception to baptism and the forty-day confinement.",
    },
    {
        href: "/wedding",
        title: "Wedding",
        description: "From childhood matchmaking and the betrothal dialogue to the wedding flag and a multi-day celebration.",
    },
    {
        href: "/death",
        title: "Death",
        description: "Funeral and mourning customs of the Aromanian people.",
    },
    {
        href: "/food",
        title: "Food",
        description: "Pita, peppers and sheep's cheese, and the breads and cakes baked for every celebration of the year.",
    },
    {
        title: "Costumes",
        description: "Traditional Aromanian dress and what it signified.",
    },
]

function TraditionTile({ tradition, number }) {
    const content = (
        <>
            <span className="font-serif text-3xl italic text-gold group-hover:text-rose-950 transition-colors">
                {ROMAN_NUMERALS[number - 1]}
            </span>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-rose-950">{tradition.title}</h2>
            <p className="mt-2 flex-1 text-base text-yellow-950">{tradition.description}</p>
            {tradition.href ? (
                <span className="mt-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold group-hover:text-rose-950 transition-colors">
                    Explore
                    <span aria-hidden className="h-2 w-2 rotate-135 border-t-2 border-l-2 border-current transition-transform group-hover:translate-x-1" />
                </span>
            ) : (
                <span className="mt-5 font-serif text-base italic text-yellow-700">Coming soon</span>
            )}
        </>
    )

    if (!tradition.href) {
        return <div className="flex h-full flex-col rounded-sm border border-dashed border-rose-950/30 bg-white/50 p-6">{content}</div>
    }

    return (
        <Link
            href={tradition.href}
            className="group flex h-full flex-col rounded-sm border border-rose-950/30 bg-white p-6 outline-1 outline-offset-4 outline-gold/0 transition hover:border-gold hover:outline-gold"
        >
            {content}
        </Link>
    )
}

export default function Traditions() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
            <header className="relative overflow-hidden bg-rose-950">
                <Image
                    src={TRADITIONS_HEADER_IMAGE}
                    alt=""
                    fill
                    priority
                    unoptimized
                    className={TRADITIONS_HEADER_IMAGE_STYLE}
                    sizes="100vw"
                />
                <div aria-hidden className="absolute inset-0 bg-linear-to-b from-rose-950/70 via-rose-950/40 to-rose-950" />
                <div className="relative mx-auto max-w-5xl px-5 pt-8 pb-16 text-center">
                    <Link href="/" className="group flex w-fit items-center gap-1 text-sm text-gold hover:text-orange-50 transition-colors">
                        <span aria-hidden className="mx-1 h-2 w-2 -rotate-45 border-t-2 border-l-2 border-current transition-transform group-hover:-translate-x-1" />
                        Home
                    </Link>
                    <p className="mt-10 font-serif text-lg italic text-gold md:text-xl">Customs and beliefs</p>
                    {/* w-fit makes the ornament exactly as wide as the title */}
                    <div className="mx-auto w-fit">
                        <h1 className="mt-2 font-serif text-5xl font-semibold text-yellow-600 sm:text-6xl">Traditions of the Aromanian People</h1>
                        <Ornament light stretch className="mt-4" />
                    </div>
                    <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-orange-50 md:text-2xl">
                        The customs that marked every stage of Aromanian life, from birth and marriage to death.
                    </p>
                </div>
            </header>

            <EmbroideryBand />

            <main className="pb-20">
                <ol className="mx-auto mt-16 grid max-w-5xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
                    {TRADITIONS.map((tradition, i) => (
                        <li key={tradition.title}>
                            <TraditionTile tradition={tradition} number={i + 1} />
                        </li>
                    ))}
                </ol>
            </main>
        </div>
    )
}
