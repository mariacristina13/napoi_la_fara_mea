import Link from "next/link"

export default function Dictionaries() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-orange-50 font-sans">
            <header>
                <div className="flex flex-col items-center justify-start pt-5 gap-2 text-center">
                    <h1 className="text-base font-bold text-yellow-600 md:text-4xl sm:text-2xl">Dictionaries & Translations</h1>
                </div>
            </header>

            <main className="w-full max-w-3xl p-5 py-8">
                <div>
                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        Dictionaries
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Aromanian's written history begins later than most Balkan languages, and formal dictionaries followed even later still. One of the earliest known efforts came from Aromanian linguist Nicolae Ianovici, a figure of the early Aromanian national movement in Vienna and Budapest, who compiled a dictionary covering five languages, including Aromanian (<cite className="text-yellow-600">Wikipedia, Nicolae Ianovici</cite>). It would take until the 20th century for a truly comprehensive dictionary to emerge, when Tache Papahagi published what is still considered the most complete dictionary of the Aromanian language, later updated and eventually digitized for modern use (<cite className="text-yellow-600">Aromanian Cultural Society Farsharotu, Our Language & History</cite>).
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        English-language access to Aromanian came later still. Early Aromanian dictionaries were built around Romanian, Greek, or French, the languages Aromanian communities were already in closest contact with, rather than English. It wasn't until the late 20th century that dedicated English-Aromanian dictionaries began to appear, aiming to make the language accessible to English-speaking researchers and learners for the first time (<cite className="text-yellow-600">ERIC, The First English-Aromanian (Vlach) Dictionary: Profile and Samples, 1988</cite>).
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        Translations
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Translating other texts into Aromanian has a much longer history than dictionary-building itself, and it began with religion rather than reference works.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        One of the earliest surviving Aromanian texts, the Aromanian Missal, is essentially a translation project, containing sermons and other religious texts rendered into Aromanian for communities in Moscopole, once a prosperous Aromanian city (<cite className="text-yellow-600">Wikipedia, Aromanian Missal</cite>). That tradition of religious translation has continued into the present, with the Gospel of Luke among the biblical texts that have since been translated into the language.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        More recently, translation efforts have expanded into literature and international documents, including a full Aromanian translation of Antoine de Saint-Exupéry's The Little Prince, and a rendering of Article 1 of the Universal Declaration of Human Rights by Aromanian writer and translator Dina Cuvata (<cite className="text-yellow-600">Wikipedia, Aromanian Language</cite>).
                    </p>
                </div>


                <div>
                    <h3 className="m-2 pb-5 text-yellow-600 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        Useful links:
                    </h3>

                    <Link href="https://www.freelang.net/online/aromanian.php" className="m-5 text-sm font-bold text-rose-950 md:text-xl sm: m-3 text-lg">
                        Freelang: Aromanian-English Online Dictionary
                    </Link>

                    <p className="text-yellow-950 pb-5 text-xs m-5 md:text-lg sm:m-3 text-base">
                        A free bilingual dictionary you can browse online or download for PC and Android, with a personal word-list feature to save vocabulary as you learn.
                    </p>

                    <Link href="https://farsharotu.org/an-english-aromanian-macedo-romanian-dictionary/" className="m-5 text-sm font-bold text-rose-950 md:text-xl sm: m-3 text-lg">
                        An English-Aromanian (Macedo-Romanian) Dictionary
                    </Link>

                    <p className="text-yellow-950 pb-5 text-xs m-5 md:text-lg sm:m-3 text-base">
                        A more extensive, searchable PDF dictionary compiled by Emil Vrabie and published with support from the Aromanian Cultural Society Farsharotu.
                    </p>

                    <Link href="https://dixionline.net/" className="m-5 text-sm font-bold text-rose-950 md:text-xl sm: m-3 text-lg">
                        Dixionline
                    </Link>

                    <p className="text-yellow-950 pb-5 text-xs m-5 md:text-lg sm:m-3 text-base">
                        An online Aromanian dictionary for quick word lookups.
                    </p>

                    <Link href="https://kaikki.org/dictionary/Aromanian/index.html" className="m-5 text-sm font-bold text-rose-950 md:text-xl sm: m-3 text-lg">
                        Kaikki
                    </Link>

                    <p className="text-yellow-950 pb-5 text-xs m-5 md:text-lg sm:m-3 text-base">
                        A structured, machine-generated Aromanian dictionary sourced from Wiktionary, useful for browsing entries in bulk.
                    </p>

                    <Link href="https://farsharotu.org/an-english-aromanian-macedo-romanian-dictionary/" className="m-5 text-sm font-bold text-rose-950 md:text-xl sm: m-3 text-lg">
                        ArOTranslate 
                    </Link>

                    <p className="text-yellow-950 pb-5 text-xs m-5 md:text-lg sm:m-3 text-base">
                        The first neural machine translator for Aromanian, developed by a Romanian high schooler, Alexandru-Iulius Jerpelea, and a University of Bucharest researcher, Sergiu Nisioi. <span className="text-xs block italic text-lime-600">Disclaimer: This tool is experimental, Aromainian in not a standardized language, meaning translation quality can be inconsistent and leans toward the Romanian spoken variety.</span>
                    </p>
                </div>

            </main>
        </div>
    )
}