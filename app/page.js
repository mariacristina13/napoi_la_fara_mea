import Image from "next/image"
import Link from "next/link"
import EmblaCarousel from "./components/carousel/EmblaCarousel"
import { Ornament, EmbroideryBand } from "./components/ornament"

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

// Sections without a page yet have no href and show as "coming soon".
const DISCOVER = [
    {
        href: "/learn",
        label: "The language",
        title: "Learn Aromanian",
        description: "Discover the history of the language, its alphabet, dictionaries, and quizzes to practise what you learn.",
    },
    {
        label: "The past",
        title: "History",
        description: "The story of the Aromanian people across the Balkans.",
    },
    {
        href: "/traditions",
        label: "Customs and beliefs",
        title: "Traditions",
        description: "The customs that marked every stage of Aromanian life, from birth and marriage to death.",
    },
]

export default function Home() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
            <header className="relative flex min-h-[85vh] items-end overflow-hidden bg-rose-950">
                <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
                    <source src="/head_video.mp4" type="video/mp4" />
                </video>
                <div aria-hidden className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/10" />

                <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 md:pb-24">
                    <p className="font-serif text-lg italic text-gold md:text-xl">Journey back to Aromanian heritage</p>
                    {/* w-fit makes the ornament exactly as wide as the title */}
                    <div className="w-fit">
                        <h1 className="mt-2 max-w-2xl font-serif text-5xl font-semibold leading-tight text-yellow-600 sm:text-6xl md:text-7xl">
                            Nãpoi la Fara Mea
                        </h1>
                        <Ornament light stretch className="mt-4" />
                    </div>
                    <p className="mt-6 max-w-lg font-serif text-xl italic text-orange-50 md:text-2xl">
                        Come along on a journey that will take you through decades of history.
                    </p>
                </div>

                <Link
                    href="https://www.youtube.com/watch?v=WL_WINNT6hE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-5 bottom-5 font-serif text-sm italic text-orange-50/60 hover:text-rose-950 transition-colors"
                >
                    Video source
                </Link>
            </header>

            <EmbroideryBand />

            <main>
                <section aria-labelledby="discover" className="mx-auto max-w-6xl px-5 py-24">
                    <h2 id="discover" className="text-sm font-bold uppercase tracking-widest text-gold">Discover</h2>
                    <div className="w-fit">
                        <p className="mt-3 max-w-2xl font-serif text-4xl text-rose-950 md:text-5xl">
                            The language, the history and the customs of the Aromanian people, in one place.
                        </p>
                        <Ornament stretch className="mt-6" />
                    </div>

                    <ol className="mt-16 flex flex-col gap-20">
                        {DISCOVER.map((item, i) => (
                            <li key={item.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                                <div className={`relative isolate ${i % 2 === 1 ? "md:order-2" : ""}`}>
                                    <div className="border border-rose-950/30 bg-white p-2.5">
                                        <Image
                                            src="/learn.jpg"
                                            alt=""
                                            width={600}
                                            height={450}
                                            className={`aspect-4/3 w-full object-cover ${item.href ? "sepia-25" : "grayscale"}`}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                    <span aria-hidden className={`absolute -bottom-4 h-full w-full border-2 border-gold -z-10 ${i % 2 === 1 ? "-left-4" : "left-4"}`} />
                                </div>

                                <div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-yellow-600">{item.label}</p>
                                    <h3 className="mt-2 font-serif text-4xl font-semibold text-rose-950 md:text-5xl">{item.title}</h3>
                                    <p className="mt-4 text-base text-yellow-950 md:text-lg">{item.description}</p>
                                    {item.href ? (
                                        <Link href={item.href} className="group mt-6 inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-wide text-rose-950 hover:border-rose-950 transition-colors">
                                            Explore {item.title}
                                            <span aria-hidden className="h-2 w-2 rotate-135 border-t-2 border-l-2 border-current transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    ) : (
                                        <p className="mt-6 text-sm font-bold uppercase tracking-wide text-yellow-700">Coming soon</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                <section aria-labelledby="gallery" className="border-t border-yellow-600/30 bg-orange-100/50 py-24">
                    <div className="mx-auto mb-12 max-w-6xl px-5">
                        <h2 id="gallery" className="text-sm font-bold uppercase tracking-widest text-gold">Gallery</h2>
                        <div className="w-fit">
                            <p className="mt-3 font-serif text-4xl text-rose-950 md:text-5xl">Moments from Aromanian life</p>
                            <Ornament stretch className="mt-6" />
                        </div>
                    </div>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </section>
            </main>
        </div>
    )
}
