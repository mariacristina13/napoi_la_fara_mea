import Image from "next/image"
import Link from "next/link"
import BackToTop from "./backToTop"
import { Ornament, EmbroideryBand } from "./ornament"
import { TRADITIONS_HEADER_IMAGE, TRADITIONS_HEADER_IMAGE_STYLE, TRADITIONS_HEADER_CREDIT, HeaderImageCredit } from "./headerImages"

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]

export const NICOLAU_2001 = {
    title: "Aromânii. Credințe și obiceiuri",
    author: "Irina Nicolau",
    year: 2001,
    url: "https://www.proiectavdela.ro/pdf/irina_nicolau_aromanii_credinte_si_obiceiuri.pdf",
}

// Aromanian words and phrases, marked with the Aromanian language code.
export function Term({ children }) {
    return <i lang="rup">{children}</i>
}

function Citation({ source, pages }) {
    return (
        <cite className="block text-sm not-italic text-yellow-700">
            {source.author}, {source.year}, p. {pages}
        </cite>
    )
}

// A section's paragraphs can also hold subheadings and dialogues:
//   { pages, text }                     a paragraph (pages is optional)
//   { subheading }                      a smaller heading inside the section
//   { pages, title, dialogue: [...] }   a conversation; each line is { speaker, original, translation } or { direction }
//   { pages, title, verse: { original: [...], translation: [...] } }   lines of a song or lament with their translation
function Block({ block, source }) {
    if (block.subheading) {
        return <h3 className="mt-8 mb-4 font-serif text-xl italic text-yellow-700 md:text-2xl">{block.subheading}</h3>
    }

    if (block.verse) {
        return (
            <figure className="mb-5 rounded-sm border border-rose-950/20 border-l-4 border-l-gold bg-white p-5 sm:p-6">
                {block.title && <h3 className="mb-4 font-serif text-xl italic text-yellow-700 md:text-2xl">{block.title}</h3>}
                <div className="grid gap-4 sm:grid-cols-2">
                    <p lang="rup" className="font-serif text-lg italic text-rose-950">
                        {block.verse.original.map((line, i) => <span key={i} className="block">{line}</span>)}
                    </p>
                    <p className="text-base text-yellow-800 md:text-lg">
                        {block.verse.translation.map((line, i) => <span key={i} className="block">{line}</span>)}
                    </p>
                </div>
                {block.pages && <figcaption className="mt-4"><Citation source={source} pages={block.pages} /></figcaption>}
            </figure>
        )
    }

    if (block.dialogue) {
        return (
            <figure className="mb-5 rounded-sm border border-rose-950/20 border-l-4 border-l-gold bg-white p-5 sm:p-6">
                {block.title && <h3 className="mb-4 font-serif text-xl italic text-yellow-700 md:text-2xl">{block.title}</h3>}
                <ol className="flex flex-col gap-4">
                    {block.dialogue.map((line, i) => line.direction ? (
                        <li key={i} className="text-sm italic text-yellow-700 md:text-base">({line.direction})</li>
                    ) : (
                        <li key={i}>
                            <p className="font-serif text-base font-semibold text-rose-950">{line.speaker}</p>
                            <p className="mt-1 text-base text-yellow-950 md:text-lg">
                                <q lang="rup" className="italic">{line.original}</q>
                                <span className="block text-yellow-800">{line.translation}</span>
                            </p>
                        </li>
                    ))}
                </ol>
                {block.pages && <figcaption className="mt-4"><Citation source={source} pages={block.pages} /></figcaption>}
            </figure>
        )
    }

    return (
        <p className="mb-5 text-base text-yellow-950 md:text-lg">
            {block.text}
            {block.pages && <Citation source={source} pages={block.pages} />}
        </p>
    )
}

// The dark banner at the top of every tradition page, with the embroidery band under it.
// `back` is the link at the top left; `image` and `imageStyle` set the faded background picture.
export function TraditionHeader({
    title,
    intro,
    label = "Customs and beliefs",
    back = { href: "/traditions", label: "All traditions" },
    image = TRADITIONS_HEADER_IMAGE,
    imageStyle = TRADITIONS_HEADER_IMAGE_STYLE,
    imageCredit = TRADITIONS_HEADER_CREDIT,
}) {
    return (
        <>
            <header className="relative w-full overflow-hidden bg-rose-950">
                <Image
                    src={image}
                    alt=""
                    fill
                    priority
                    unoptimized
                    className={imageStyle}
                    sizes="100vw"
                />
                <div aria-hidden className="absolute inset-0 bg-linear-to-b from-rose-950/70 via-rose-950/40 to-rose-950" />
                <div className="relative mx-auto max-w-5xl px-5 pt-8 pb-16 text-center">
                    <Link href={back.href} className="group flex w-fit items-center gap-1 text-sm text-gold hover:text-orange-50 transition-colors">
                        <span aria-hidden className="mx-1 h-2 w-2 -rotate-45 border-t-2 border-l-2 border-current transition-transform group-hover:-translate-x-1" />
                        {back.label}
                    </Link>
                    <p className="mt-10 font-serif text-lg italic text-gold md:text-xl">{label}</p>
                    {/* w-fit makes the ornament exactly as wide as the title */}
                    <div className="mx-auto w-fit">
                        <h1 className="mt-2 font-serif text-4xl font-semibold text-yellow-600 sm:text-5xl md:text-6xl">{title}</h1>
                        <Ornament light stretch className="mt-4" />
                    </div>
                    {intro && <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic text-orange-50 md:text-2xl">{intro}</p>}
                </div>
                <HeaderImageCredit credit={imageCredit} />
            </header>

            <EmbroideryBand />
        </>
    )
}

export default function TraditionPage({ title, intro, sections, source }) {
    return (
        <div className="flex flex-col flex-1 items-center min-h-screen bg-orange-50 font-sans">
            <TraditionHeader title={title} intro={intro} />

            {sections.length === 0 ? (
                <main className="w-full max-w-5xl px-5 py-16 text-center font-serif text-2xl italic text-yellow-950">
                    This page is coming soon.
                </main>
            ) : (
                <div className="w-full max-w-5xl px-5 py-14 lg:flex lg:items-start lg:gap-10">
                    <aside className="mb-12 lg:mb-0 lg:sticky lg:top-6 lg:w-56 lg:shrink-0">
                        <nav aria-label="On this page" className="rounded-sm border border-rose-950/20 bg-white p-5">
                            <div className="mb-4 w-fit">
                                <h2 className="font-serif text-xl italic text-rose-950">On this page</h2>
                                <Ornament stretch className="-mx-3 mt-2" />
                            </div>
                            <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                                {sections.map((section, i) => (
                                    <li key={section.id}>
                                        <a href={`#${section.id}`} className="text-gold hover:text-rose-950 transition-colors">
                                            <span className="font-serif italic">{ROMAN_NUMERALS[i]}.</span> {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </aside>

                    <main className="lg:flex-1 lg:min-w-0">
                        <ol className="border-l-2 border-yellow-600/50">
                            {sections.map((section) => (
                                <li key={section.id} className="relative pb-12 pl-6 sm:pl-8">
                                    <span aria-hidden className="absolute -left-1.75 top-2.5 h-3 w-3 rotate-45 bg-gold ring-4 ring-orange-50" />
                                    <section id={section.id} className="scroll-mt-6">
                                        <p className="font-serif text-lg italic text-yellow-700">{section.stage}</p>
                                        <h2 className="mt-1 mb-5 font-serif text-3xl font-semibold text-rose-950 md:text-4xl">{section.title}</h2>

                                        {section.paragraphs.map((block, i) => (
                                            <Block key={i} block={block} source={source} />
                                        ))}
                                    </section>
                                </li>
                            ))}
                        </ol>

                        <section aria-labelledby="sources" className="pt-4">
                            <h2 id="sources" className="mb-3 font-serif text-3xl font-semibold text-rose-950">Sources</h2>
                            <ul className="text-base text-yellow-950 md:text-lg">
                                <li>
                                    {source.author}, <a href={source.url} target="_blank" rel="noopener noreferrer" className="italic underline decoration-yellow-600 hover:text-rose-950 hover:decoration-rose-950 transition-colors">{source.title}</a>, {source.year}.
                                </li>
                            </ul>
                        </section>
                    </main>
                </div>
            )}

            <BackToTop />
        </div>
    )
}
