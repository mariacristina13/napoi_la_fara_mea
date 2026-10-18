import Image from "next/image"
import Link from "next/link"
import { LEARN_HEADER_IMAGE } from "../components/headerImages"
import { Ornament, EmbroideryBand } from "../components/ornament"

const RESOURCES = [
    {
        href: "/alphabet",
        title: "Alphabet",
        description: "The letters and sounds of the Aromanian alphabet, and how its spelling came to be standardised.",
    },
    {
        href: "/dictionaries",
        title: "Dictionaries & Translations",
        description: "Dictionaries and translation tools for looking up Aromanian words.",
    },
    {
        href: "/quizzes",
        title: "Quizzes & Practice",
        description: "Quizzes and practice sheets to test what you have learned.",
    },
]

const FACTS = [
    { value: "10th c.", label: "Common Romanian splits into northern and southern varieties" },
    { value: "1731", label: "Oldest known written Aromanian text" },
    { value: "Endangered", label: "Classified by UNESCO's 2010 Atlas of the World's Languages in Danger" },
]

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V"]

const SISTER_LANGUAGES = ["Romanian", "Aromanian", "Megleno-Romanian", "Istro-Romanian"]

const WIKIPEDIA = {
    title: "Aromanian language",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Aromanian_language",
}

export default function Learn() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
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
                    <Link href="/" className="group flex w-fit items-center gap-1 text-sm text-gold hover:text-orange-50 transition-colors">
                        <span aria-hidden className="mx-1 h-2 w-2 -rotate-45 border-t-2 border-l-2 border-current transition-transform group-hover:-translate-x-1" />
                        Home
                    </Link>
                    <p lang="rup" className="mt-10 font-serif text-lg italic text-gold md:text-xl">Limba armãneascã</p>
                    {/* w-fit makes the ornament exactly as wide as the title */}
                    <div className="mx-auto w-fit">
                        <h1 className="mt-2 font-serif text-5xl font-semibold text-yellow-600 sm:text-6xl">Learn Aromanian</h1>
                        <Ornament light stretch className="mt-4" />
                    </div>
                    <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-orange-50 md:text-2xl">
                        A collection of resources, dictionaries, quizzes and practice sheets.
                    </p>
                </div>
            </header>

            <EmbroideryBand />

            <main>
                <ol className="mx-auto mt-16 grid max-w-5xl gap-6 px-5 md:grid-cols-3">
                    {RESOURCES.map((resource, i) => (
                        <li key={resource.href}>
                            <Link
                                href={resource.href}
                                className="group flex h-full flex-col rounded-sm border border-rose-950/30 bg-white p-6 outline-1 outline-offset-4 outline-gold/0 transition hover:border-gold hover:outline-gold"
                            >
                                <span className="font-serif text-3xl italic text-gold group-hover:text-rose-950 transition-colors">
                                    {ROMAN_NUMERALS[i]}
                                </span>
                                <h2 className="mt-2 font-serif text-2xl font-semibold text-rose-950">{resource.title}</h2>
                                <p className="mt-2 flex-1 text-base text-yellow-950">{resource.description}</p>
                                <span className="mt-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold group-hover:text-rose-950 transition-colors">
                                    Start
                                    <span aria-hidden className="h-2 w-2 rotate-135 border-t-2 border-l-2 border-current transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ol>

                <section aria-label="The language at a glance" className="mx-auto mt-16 max-w-5xl px-5">
                    <dl className="grid divide-y divide-yellow-600/30 border-y border-yellow-600/30 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        {FACTS.map((fact) => (
                            <div key={fact.value} className="flex flex-col-reverse justify-end gap-1 px-4 py-6 text-center">
                                <dt className="text-sm text-yellow-950">{fact.label}</dt>
                                <dd className="font-serif text-4xl font-semibold text-yellow-600">{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                <section aria-labelledby="history" className="mx-auto mt-16 grid max-w-5xl gap-10 px-5 md:grid-cols-[1fr_2fr]">
                    <div>
                        {/* Fixed line breaks so w-fit (and the ornament) match the longest line, not the whole column */}
                        <div className="w-fit">
                            <h2 id="history" className="font-serif text-3xl font-semibold text-rose-950 md:text-4xl">History of the<br />Aromanian<br />Language</h2>
                            <Ornament stretch className="mt-4" />
                        </div>

                        <figure className="mt-8" aria-label="The Eastern Romance language family">
                            <p className="mx-auto w-fit rounded-sm bg-rose-950 px-4 py-2 font-serif text-base text-orange-50">Common Romanian</p>
                            <span aria-hidden className="mx-auto block h-5 w-0.5 bg-gold" />
                            <ul className="grid grid-cols-2 gap-2 border-t-2 border-gold pt-4">
                                {SISTER_LANGUAGES.map((language) => (
                                    <li
                                        key={language}
                                        className={`rounded-sm px-3 py-1.5 text-center font-serif text-base ${language === "Aromanian" ? "bg-gold font-bold text-rose-950" : "border border-yellow-600/40 text-yellow-950"}`}
                                    >
                                        {language}
                                    </li>
                                ))}
                            </ul>
                            <figcaption className="mt-3 text-center font-serif text-sm italic text-yellow-700">The Eastern Romance languages</figcaption>
                        </figure>
                    </div>

                    <div>
                        <p className="mb-6 text-base text-yellow-950 md:text-lg">
                            Aromanian is an Eastern Romance language that developed from Common Romanian, alongside Romanian,
                            Istro-Romanian, and Megleno-Romanian. By the 10th century, Common Romanian had divided into northern
                            and southern varieties, after which Aromanian and Romanian developed separately.
                        </p>

                        <p className="mb-6 text-base text-yellow-950 md:text-lg">
                            Aromanian has been strongly influenced by the languages it came into contact with, particularly Greek,
                            which contributed many words and even some grammatical features. It also contains Turkish vocabulary
                            from the Ottoman presence in the Balkans, and more recently Romanian has influenced it through
                            increased contact and the availability of Romanian material online. Despite these influences,
                            Aromanian remains primarily a Romance language.
                        </p>

                        <p className="text-base text-yellow-950 md:text-lg">
                            Its written history is relatively recent: the oldest known written text dates to 1731, an inscription
                            by Nektarios Terpos at Ardenica Monastery in present-day Albania.
                        </p>
                        <cite className="mt-3 block text-sm not-italic text-yellow-700">Source: {WIKIPEDIA.publisher}, {WIKIPEDIA.title}</cite>
                    </div>
                </section>

                <section aria-labelledby="why-it-matters" className="mt-20 bg-gold">
                    <div className="mx-auto max-w-3xl px-5 py-16 text-center">
                        <h2 id="why-it-matters" className="font-serif text-2xl italic text-rose-950 md:text-3xl">Why it matters</h2>
                        <p className="mt-6 font-serif text-2xl font-semibold text-orange-50 md:text-3xl">
                            The language is spoken by an aging population, with fewer young people learning it at home, and there
                            is no country where it holds full official status.
                        </p>
                        <p className="mt-5 text-base text-orange-50/90 md:text-lg">
                            UNESCO&apos;s 2010 <i>Atlas of the World&apos;s Languages in Danger</i> classifies it as definitely
                            endangered, a real risk of the language disappearing within a generation or two.
                        </p>
                    </div>
                </section>

                <section aria-labelledby="sources" className="mx-auto max-w-5xl px-5 py-12">
                    <h2 id="sources" className="mb-3 font-serif text-2xl font-semibold text-rose-950">Sources</h2>
                    <ul className="flex flex-col gap-1 text-sm text-yellow-950 md:text-base">
                        <li>
                            {WIKIPEDIA.publisher}, <a href={WIKIPEDIA.url} target="_blank" rel="noopener noreferrer" className="italic underline decoration-yellow-600 hover:text-rose-950 hover:decoration-rose-950 transition-colors">{WIKIPEDIA.title}</a>.
                        </li>
                        <li>
                            UNESCO, <i>Atlas of the World&apos;s Languages in Danger</i>, 3rd edition, 2010.
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}
