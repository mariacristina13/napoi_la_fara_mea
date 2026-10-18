import { LearnHeader, SectionHeading, SourceList, ROMAN_NUMERALS } from "../components/learnPage"

const PLATFORM_URL = "https://armaneashti.online/"

const LEVELS = [
    {
        title: "English-language track",
        description: "Structured similarly to Duolingo, for vocabulary and grammar practice.",
    },
    {
        title: "In-language track",
        description: "For learners who already speak some Aromanian.",
    },
    {
        title: "Document archive",
        description: "Materials for self-study and advanced learners.",
    },
]

const SOURCES = [
    { label: "RISE UP Project: How to Use Digital Tools to Support Minoritised Languages" },
]

export default function Quizzes() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
            <LearnHeader label="Practice" title="Quizzes & Practice">
                Structured practice materials for Aromanian are rare, which makes the few that exist especially valuable.
            </LearnHeader>

            <main>
                <section aria-labelledby="platform" className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-2 md:items-center">
                    <div>
                        <SectionHeading id="platform" eyebrow="Featured platform"><span lang="rup">Anveatsã Armãneashti</span></SectionHeading>
                        <p className="mt-5 text-base text-yellow-950 md:text-lg">
                            One of the most complete practice resources is <i lang="rup">Anveatsã Armãneashti</i>, an e-learning
                            platform created in 2015–2016 by Elena Saricu Todica and Florentina. It marked the first time
                            digital tools for learning and teaching Aromanian were made available online.
                        </p>
                        <p className="mt-5 text-base text-yellow-950 md:text-lg">
                            It offers vocabulary, grammar, and self-study materials for learners at different levels.
                        </p>

                        <a
                            href={PLATFORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-8 inline-flex items-center gap-3 rounded-sm border-2 border-gold bg-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-rose-950 hover:bg-yellow-500 transition-colors"
                        >
                            Start practising
                            <span aria-hidden className="h-2 w-2 rotate-135 border-t-2 border-l-2 border-current transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    <div className="rounded-sm bg-rose-950 p-6 outline-1 outline-offset-4 outline-gold sm:p-8">
                        <h3 className="font-serif text-2xl italic text-gold">Three levels</h3>
                        <ol className="mt-6 flex flex-col gap-6">
                            {LEVELS.map((level, i) => (
                                <li key={level.title} className="flex gap-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold font-serif text-lg italic text-gold">
                                        {ROMAN_NUMERALS[i]}
                                    </span>
                                    <div>
                                        <p className="font-serif text-xl font-semibold text-orange-50">{level.title}</p>
                                        <p className="mt-1 text-base text-orange-50/80">{level.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <div className="mx-auto max-w-5xl border-t border-yellow-600/30 px-5 py-16">
                    <SourceList sources={SOURCES} />
                </div>
            </main>
        </div>
    )
}
