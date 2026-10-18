import BackToTop from "../components/backToTop"
import { LearnHeader, ResourceCard, SectionHeading, SourceList } from "../components/learnPage"

const TOOLS = [
    {
        href: "https://www.freelang.net/online/aromanian.php",
        title: "Freelang: Aromanian-English Online Dictionary",
        tag: "Online & app",
        description: "A free bilingual dictionary you can browse online or download for PC and Android, with a personal word-list feature to save vocabulary as you learn.",
    },
    {
        href: "https://farsharotu.org/an-english-aromanian-macedo-romanian-dictionary/",
        title: "An English-Aromanian (Macedo-Romanian) Dictionary",
        tag: "PDF",
        description: "A more extensive, searchable PDF dictionary compiled by Emil Vrabie and published with support from the Aromanian Cultural Society Farsharotu.",
    },
    {
        href: "https://dixionline.net/",
        title: "Dixionline",
        tag: "Online",
        description: "An online Aromanian dictionary for quick word lookups.",
    },
    {
        href: "https://kaikki.org/dictionary/Aromanian/index.html",
        title: "Kaikki",
        tag: "Wiktionary data",
        description: "A structured, machine-generated Aromanian dictionary sourced from Wiktionary, useful for browsing entries in bulk.",
    },
    {
        href: "https://arotranslate.com/",
        title: "AroTranslate",
        tag: "Translator",
        description: "The first neural machine translator for Aromanian, developed by a Romanian high schooler, Alexandru-Iulius Jerpelea, and a University of Bucharest researcher, Sergiu Nisioi.",
        note: "This tool is experimental. Aromanian is not a fully standardised language, so translation quality can be inconsistent and leans toward the variety spoken in Romania.",
    },
]

const SOURCES = [
    { label: "Wikipedia: Nicolae Ianovici", url: "https://en.wikipedia.org/wiki/Nicolae_Ianovici" },
    { label: "Aromanian Cultural Society Farsharotu: Our Language & History" },
    { label: "ERIC: The First English-Aromanian (Vlach) Dictionary: Profile and Samples, 1988" },
    { label: "Wikipedia: Aromanian Missal", url: "https://en.wikipedia.org/wiki/Aromanian_Missal" },
    { label: "Wikipedia: Aromanian language", url: "https://en.wikipedia.org/wiki/Aromanian_language" },
]

function Cite({ children }) {
    return <cite className="text-sm not-italic text-yellow-700">({children})</cite>
}

export default function Dictionaries() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
            <LearnHeader label="Look it up" title="Dictionaries & Translations">
                Dictionaries and translation tools for Aromanian, and the story of how the language came to be written down
                alongside others.
            </LearnHeader>

            <main>
                <section aria-labelledby="tools" className="mx-auto max-w-5xl px-5 py-16">
                    <SectionHeading id="tools">Dictionaries and tools</SectionHeading>
                    <p className="mt-4 text-base text-yellow-950">Free resources for looking up and translating Aromanian words.</p>

                    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {TOOLS.map((tool) => (
                            <li key={tool.title}>
                                <ResourceCard {...tool} />
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="border-y border-yellow-600/30 bg-orange-100/50">
                    <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-2">
                        <section aria-labelledby="history-dictionaries">
                            <SectionHeading id="history-dictionaries" eyebrow="A short history">Dictionaries</SectionHeading>

                            <p className="mt-5 text-base text-yellow-950 md:text-lg">
                                Aromanian&apos;s written history begins later than most Balkan languages, and formal dictionaries
                                followed even later. One of the earliest known efforts came from the Aromanian linguist Nicolae
                                Ianovici, a figure of the early Aromanian national movement in Vienna and Budapest, who compiled a
                                dictionary covering five languages, including Aromanian. <Cite>Wikipedia, Nicolae Ianovici</Cite>
                            </p>
                            <p className="mt-5 text-base text-yellow-950 md:text-lg">
                                It would take until the 20th century for a truly comprehensive dictionary to emerge, when Tache
                                Papahagi published what is still considered the most complete dictionary of the Aromanian
                                language, later updated and eventually digitised for modern use. <Cite>Aromanian Cultural Society Farsharotu, Our Language &amp; History</Cite>
                            </p>
                            <p className="mt-5 text-base text-yellow-950 md:text-lg">
                                English-language access came later still. Early Aromanian dictionaries were built around Romanian,
                                Greek, or French, the languages Aromanian communities were already in closest contact with. It
                                wasn&apos;t until the late 20th century that dedicated English-Aromanian dictionaries began to
                                appear, making the language accessible to English-speaking researchers and learners for the
                                first time. <Cite>ERIC, The First English-Aromanian (Vlach) Dictionary: Profile and Samples, 1988</Cite>
                            </p>
                        </section>

                        <section aria-labelledby="history-translations">
                            <SectionHeading id="history-translations" eyebrow="A short history">Translations</SectionHeading>

                            <p className="mt-5 text-base text-yellow-950 md:text-lg">
                                Translating other texts into Aromanian has a much longer history than dictionary-building, and it
                                began with religion rather than reference works.
                            </p>
                            <p className="mt-5 text-base text-yellow-950 md:text-lg">
                                One of the earliest surviving Aromanian texts, the Aromanian Missal, is essentially a translation
                                project, containing sermons and other religious texts rendered into Aromanian for the communities
                                of Moscopole, once a prosperous Aromanian city. <Cite>Wikipedia, Aromanian Missal</Cite> That
                                tradition of religious translation has continued into the present, with the Gospel of Luke among
                                the biblical texts since translated into the language.
                            </p>
                            <p className="mt-5 text-base text-yellow-950 md:text-lg">
                                More recently, translation has expanded into literature and international documents, including a
                                full Aromanian translation of Antoine de Saint-Exupéry&apos;s <i>The Little Prince</i>, and a
                                rendering of Article 1 of the Universal Declaration of Human Rights by the Aromanian writer and
                                translator Dina Cuvata. <Cite>Wikipedia, Aromanian language</Cite>
                            </p>
                        </section>
                    </div>
                </div>

                <div className="mx-auto max-w-5xl px-5 py-16">
                    <SourceList sources={SOURCES} />
                </div>
            </main>

            <BackToTop />
        </div>
    )
}
