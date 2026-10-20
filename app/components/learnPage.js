import Image from "next/image"
import Link from "next/link"
import { Ornament, EmbroideryBand } from "./ornament"
import { LEARN_HEADER_IMAGE, LEARN_HEADER_CREDIT, HeaderImageCredit } from "./headerImages"

// Shared pieces for the pages under "Learn Aromanian" (alphabet, dictionaries, quizzes).

export const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

export function LearnHeader({ label, labelLang, title, children }) {
    return (
        <>
            <header className="relative overflow-hidden bg-rose-950">
                <Image
                    src={LEARN_HEADER_IMAGE}
                    alt=""
                    fill
                    priority
                    unoptimized
                    className="object-cover opacity-25 blur-xs"
                    sizes="100vw"
                />
                <div aria-hidden className="absolute inset-0 bg-linear-to-b from-rose-950/70 via-rose-950/40 to-rose-950" />
                <div className="relative mx-auto max-w-5xl px-5 pt-8 pb-16 text-center">
                    <Link href="/learn" className="group flex w-fit items-center gap-1 text-sm text-gold hover:text-orange-50 transition-colors">
                        <span aria-hidden className="mx-1 h-2 w-2 -rotate-45 border-t-2 border-l-2 border-current transition-transform group-hover:-translate-x-1" />
                        Learn Aromanian
                    </Link>
                    <p lang={labelLang} className="mt-10 font-serif text-lg italic text-gold md:text-xl">{label}</p>
                    {/* w-fit makes the ornament exactly as wide as the title */}
                    <div className="mx-auto w-fit">
                        <h1 className="mt-2 font-serif text-4xl font-semibold text-yellow-600 sm:text-5xl md:text-6xl">{title}</h1>
                        <Ornament light stretch className="mt-4" />
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic text-orange-50 md:text-2xl">{children}</p>
                </div>
                <HeaderImageCredit credit={LEARN_HEADER_CREDIT} />
            </header>

            <EmbroideryBand />
        </>
    )
}

// A section heading in the serif font with the diamond ornament under it, as wide as the heading.
// `eyebrow` is an optional small italic line above it.
export function SectionHeading({ id, eyebrow, children, className = "" }) {
    return (
        <div className={`w-fit ${className}`}>
            {eyebrow && <p className="font-serif text-lg italic text-yellow-700">{eyebrow}</p>}
            <h2 id={id} className="font-serif text-3xl font-semibold text-rose-950 md:text-4xl">{children}</h2>
            <Ornament stretch className="mt-3" />
        </div>
    )
}

// A card linking to an outside resource. `tag` is a short label such as "PDF"; `note` is a warning shown under the description.
export function ResourceCard({ href, title, description, tag, note }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-sm border border-rose-950/30 bg-white p-6 outline-1 outline-offset-4 outline-gold/0 transition hover:border-gold hover:outline-gold"
        >
            {tag && <span className="mb-2 font-serif text-base italic text-yellow-700">{tag}</span>}
            <span className="font-serif text-2xl font-semibold text-rose-950">{title}</span>
            <span className="mt-2 flex-1 text-base text-yellow-950">{description}</span>
            {note && <span className="mt-4 rounded-sm border-l-4 border-gold bg-orange-50 p-3 text-sm text-yellow-950">{note}</span>}
            <span className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold group-hover:text-rose-950 transition-colors">
                Visit
                <span aria-hidden className="h-2 w-2 rotate-135 border-t-2 border-l-2 border-current transition-transform group-hover:translate-x-1" />
            </span>
        </a>
    )
}

// Each source is { label, url? }; sources without a url are listed as plain text.
export function SourceList({ sources }) {
    return (
        <section aria-labelledby="sources">
            <SectionHeading id="sources">Sources</SectionHeading>
            <ul className="mt-6 flex flex-col gap-3 text-base text-yellow-950">
                {sources.map((source) => (
                    <li key={source.label}>
                        {source.url ? (
                            <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline decoration-yellow-600 hover:text-rose-950 hover:decoration-rose-950 transition-colors">
                                {source.label}
                            </a>
                        ) : source.label}
                    </li>
                ))}
            </ul>
        </section>
    )
}
