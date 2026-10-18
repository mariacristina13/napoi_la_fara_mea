import BackToTop from "../components/backToTop"
import { LearnHeader, ResourceCard, SectionHeading, SourceList, ROMAN_NUMERALS } from "../components/learnPage"

// The standard alphabet (Bitola, 1997, revised 1999), from Wikipedia's "Aromanian alphabet" table.
// Gh is listed separately on that page and has no letter name there.
// `use` marks letters only used in some accents ("regional") or in foreign words ("foreign").
const LETTERS = [
    { letter: "A a", name: "a", sound: "/a/" },
    { letter: "Ã ã", name: "ã", sound: "/ə/, /ɨ/" },
    { letter: "B b", name: "bã", sound: "/b/" },
    { letter: "C c", name: "cã", sound: "/k/, /tʃ/, /x/", note: "/tʃ/ before e and i" },
    { letter: "D d", name: "dã", sound: "/d/" },
    { letter: "Dh dh", name: "dhã", sound: "/ð/", use: "regional" },
    { letter: "Dz dz", name: "dzã", sound: "/dz/" },
    { letter: "E e", name: "e", sound: "/ɛ/" },
    { letter: "F f", name: "fã", sound: "/f/" },
    { letter: "G g", name: "gã", sound: "/ɡ/, /dʒ/, /ɣ/", note: "/dʒ/ before e and i" },
    { letter: "Gh gh", sound: "/ɟ/", note: "Before e and i" },
    { letter: "H h", name: "hã", sound: "/h/" },
    { letter: "I i", name: "i", sound: "/i/" },
    { letter: "J j", name: "jã", sound: "/ʒ/" },
    { letter: "K k", name: "ca", sound: "/c/", note: "Only before e or i" },
    { letter: "L l", name: "lã", sound: "/l/" },
    { letter: "Lj lj", name: "ljã", sound: "/ʎ/" },
    { letter: "M m", name: "mã", sound: "/m/" },
    { letter: "N n", name: "nã", sound: "/n/" },
    { letter: "Nj nj", name: "njã", sound: "/ɲ/" },
    { letter: "O o", name: "o", sound: "/o/" },
    { letter: "P p", name: "pã", sound: "/p/" },
    { letter: "Q q", name: "kiu", sound: "/k/", use: "foreign" },
    { letter: "R r", name: "rã", sound: "/r/" },
    { letter: "Rr rr", name: "rrã", sound: "/r/", use: "regional" },
    { letter: "S s", name: "sã", sound: "/s/" },
    { letter: "Sh sh", name: "shã", sound: "/ʃ/" },
    { letter: "T t", name: "tã", sound: "/t/" },
    { letter: "Th th", name: "thã", sound: "/θ/", use: "regional" },
    { letter: "Ts ts", name: "tsã", sound: "/ts/" },
    { letter: "U u", name: "u", sound: "/u/, /ʷ/" },
    { letter: "V v", name: "vã", sound: "/v/" },
    { letter: "W w", name: "dublã vã", sound: "/w/", use: "foreign" },
    { letter: "X x", name: "csã / gzã", sound: "/ks/, /ɡz/" },
    { letter: "Y y", name: "i greacã", sound: "/j/, /ɣ/", note: "/j/ before e and i" },
    { letter: "Z z", name: "zã", sound: "/z/" },
]

const USE_LABELS = {
    regional: "Some accents only",
    foreign: "Foreign words only",
}

const HISTORY = [
    {
        period: "Before the 19th century",
        title: "Greek and Cyrillic scripts",
        text: "The earliest known Aromanian writing dates back to manuscripts from the 9th century, and for much of its history the language was written using Greek and Cyrillic scripts before shifting toward Latin-based systems.",
    },
    {
        period: "Early 19th century",
        title: "The first Latin alphabet",
        text: "The first true Aromanian writing system using the Latin alphabet was introduced by the grammarian Mihail G. Boiagi, who relied on digraphs like \"sh\" and \"nj\" instead of diacritical marks to represent sounds the Latin alphabet couldn't capture on its own.",
    },
    {
        period: "19th and 20th centuries",
        title: "No standard spelling",
        text: "Because a standard spelling system didn't exist for most of Aromanian's written history, different writers represented the same distinctive sounds, like the \"dh\", \"gh\" and \"th\" borrowed from Greek, in inconsistent ways for decades.",
    },
    {
        period: "1997 – 1999",
        title: "The Bitola standard",
        text: "The alphabet used today was proposed in 1997 at the Symposium for Standardisation of the Aromanian Writing System in Bitola, North Macedonia, revised in 1999, and has since been adopted by most Aromanian writers across North Macedonia, Serbia, Albania, Bulgaria, and Romania.",
    },
]

const SOURCES = [
    { label: "Wikipedia: Aromanian alphabet", url: "https://en.wikipedia.org/wiki/Aromanian_alphabet" },
    { label: "Wikipedia: Mihail G. Boiagi", url: "https://en.wikipedia.org/wiki/Mihail_G._Boiagi" },
    { label: "Aromanian Cultural Society Farsharotu: On the Standardization of the Aromanian System of Writing", url: "https://farsharotu.org/on-the-standardization-of-the-aromanian-system-of-writing/" },
]

function LetterTile({ letter, name, sound, note, use }) {
    const isDigraph = letter.split(" ")[0].length > 1

    return (
        <li className={`flex flex-col rounded-sm border p-4 text-center ${isDigraph ? "border-rose-950 bg-rose-950 text-orange-50" : "border-rose-950/20 bg-white text-rose-950"} ${use ? "opacity-70" : ""}`}>
            <span lang="rup" className={`font-serif text-4xl font-semibold ${isDigraph ? "text-gold" : "text-rose-950"}`}>{letter}</span>
            {name && <span lang="rup" className="mt-1 font-serif text-base italic">{name}</span>}
            <span className={`mt-1 text-sm ${isDigraph ? "text-orange-50/70" : "text-yellow-700"}`}>{sound}</span>
            {note && <span className={`mt-2 text-xs ${isDigraph ? "text-orange-50/70" : "text-yellow-950"}`}>{note}</span>}
            {use && <span className="mt-2 font-serif text-sm italic text-yellow-600">{USE_LABELS[use]}</span>}
        </li>
    )
}

export default function Alphabet() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
            <LearnHeader label="Alfabetu armãnescu" labelLang="rup" title="The Aromanian Alphabet">
                The Aromanian alphabet is a variant of the Latin script, but it hasn&apos;t always been written that way.
                Today&apos;s standard has {LETTERS.length} letters and digraphs.
            </LearnHeader>

            <main>
                <section aria-labelledby="letters" className="mx-auto max-w-5xl px-5 py-16">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <SectionHeading id="letters">The letters</SectionHeading>
                            <p className="mt-4 text-base text-yellow-950">Each letter with its name and how it is pronounced.</p>
                        </div>
                        <ul aria-label="Key" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-yellow-950">
                            <li className="flex items-center gap-2"><span aria-hidden className="h-4 w-4 rounded-sm border border-rose-950/30 bg-white" />Single letter</li>
                            <li className="flex items-center gap-2"><span aria-hidden className="h-4 w-4 rounded-sm bg-rose-950" />Digraph (two letters, one sound)</li>
                            <li className="flex items-center gap-2"><span aria-hidden className="h-4 w-4 rounded-sm border border-rose-950/30 bg-white opacity-50" />Rarely used</li>
                        </ul>
                    </div>

                    <ol className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                        {LETTERS.map((letter) => (
                            <LetterTile key={letter.letter} {...letter} />
                        ))}
                    </ol>
                </section>

                <section aria-labelledby="history" className="border-y border-yellow-600/30 bg-orange-100/50">
                    <div className="mx-auto max-w-5xl px-5 py-16">
                        <SectionHeading id="history">How the alphabet came to be</SectionHeading>

                        <ol className="mt-10 grid gap-10 md:grid-cols-4 md:gap-6">
                            {HISTORY.map((step, i) => (
                                <li key={step.title} className="relative border-l-2 border-gold pl-5 md:border-l-0 md:border-t-2 md:pl-0 md:pt-6">
                                    <span aria-hidden className="absolute -left-1.75 top-0.5 h-3 w-3 rotate-45 bg-gold ring-4 ring-orange-100 md:-top-1.75 md:left-0" />
                                    <p className="font-serif text-base italic text-yellow-700">{step.period}</p>
                                    <h3 className="mt-1 font-serif text-2xl font-semibold text-rose-950">
                                        <span className="italic">{ROMAN_NUMERALS[i]}.</span> {step.title}
                                    </h3>
                                    <p className="mt-3 text-base text-yellow-950">{step.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-2">
                    <section aria-labelledby="useful-links">
                        <SectionHeading id="useful-links">Useful links</SectionHeading>
                        <div className="mt-6 flex flex-col gap-6">
                            <ResourceCard
                                href="https://www.omniglot.com/writing/aromanian.htm"
                                title="Omniglot: Aromanian"
                                description="An overview of the Aromanian alphabet and pronunciation system. It also works as a hub, linking to several dictionaries, Aromanian music videos and native speakers using the language."
                            />
                            <ResourceCard
                                href="https://farsharotu.org/on-the-standardization-of-the-aromanian-system-of-writing/"
                                title="On the Standardization of the Aromanian System of Writing"
                                tag="Article"
                                description="Tiberius Cunia's account of how today's alphabet came about, from the many older ways of writing Aromanian to the 1997 Bitola symposium. Published by the Aromanian Cultural Society Farsharotu."
                            />
                        </div>
                    </section>

                    <SourceList sources={SOURCES} />
                </div>
            </main>

            <BackToTop />
        </div>
    )
}
