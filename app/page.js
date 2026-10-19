import Image from "next/image"
import Link from "next/link"
import EmblaCarousel from "./components/carousel/EmblaCarousel"
import { Ornament, EmbroideryBand } from "./components/ornament"

const OPTIONS = { dragFree: true, loop: true }
// Gallery pictures, in the order they appear. Each has a credit shown under the gallery.
// `width` and `height` are the picture's real size in pixels, so the gallery can show it in its original proportions.
const SLIDES = [
    {
        src: "/87e2ed9681d02db8fddebc1442e17dfb.jpg",
        width: 400,
        height: 558,
        alt: "Black-and-white studio portrait of a family in traditional dress: a woman standing, a man in a white fustanella seated, and a small girl beside them.",
        caption: "Family portrait in traditional dress",
        credit: {
            author: "Unknown photographer",
            via: { label: "Pinterest", url: "https://mx.pinterest.com/pin/792492865724744397/" },
        },
    },
    {
        src: "/NL32_1_4F.jpg",
        width: 532,
        height: 382,
        alt: "Dancers in traditional costume performing a round dance in front of a large crowd on a hillside.",
        caption: "Dancers at a summer gathering",
        credit: {
            author: "George Moran",
            note: "from his article “Preserving Aromanian (Vlach)”, 2013",
            via: { label: "Aromanian Cultural Society Farsharotu", url: "https://farsharotu.org/preserving-aromanian-vlach/" },
        },
    },
    {
        src: "/476505570_1183452070453769_860371191307747378_n.jpg",
        width: 1367,
        height: 2048,
        alt: "An Aromanian wedding flag: a white cloth with red ribbon crosses and small bells, on a wooden pole whose cross-shaped top holds three red apples and a bunch of red carnations.",
        caption: "Wedding flag (flambura) decorated with apples",
        credit: {
            author: "Unknown photographer",
            via: { label: "Facebook", url: "https://www.facebook.com/photo.php?fbid=460183472780636&set=pb.100063669604201.-2207520000&type=3" },
        },
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/df/Vlachsche_Hirten_-_Schweiger_Lerchenfeld_Amand_%28freiherr_Von%29_-_1887.jpg",
        width: 800,
        height: 586,
        alt: "Engraving of Vlach shepherds with their flock, from 1887.",
        caption: "Vlach shepherds, engraving, 1887",
        credit: {
            author: "Amand von Schweiger-Lerchenfeld",
            authorUrl: "https://www.wikidata.org/wiki/Q87576",
            source: "http://eng.travelogues.gr/collection.php?view=73",
            license: "Public domain",
            via: { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/w/index.php?curid=48220170" },
        },
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Vlach_Shepherd.png",
        width: 239,
        height: 404,
        alt: "Early 1900s photograph of a Vlach shepherd in traditional clothes.",
        caption: "Vlach shepherd, early 1900s",
        credit: {
            author: "Unknown author",
            source: "https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Fustanella.html",
            note: "Archive: Manaki Brothers",
            license: "Public domain",
            via: { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/w/index.php?curid=17505784" },
        },
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Transhumance_ways_of_the_Vlachs.jpeg/1280px-Transhumance_ways_of_the_Vlachs.jpeg",
        width: 1280,
        height: 1231,
        alt: "Map of the Balkans showing the routes the Vlachs travelled with their flocks between summer and winter pastures.",
        caption: "The transhumance routes of the Vlachs",
        credit: {
            author: "Julieta39",
            authorUrl: "https://commons.wikimedia.org/wiki/User:Julieta39",
            note: "Own work, based on the sources listed on the file's talk page",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            via: { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/w/index.php?curid=47941547" },
        },
    },
    {
        src: "/Aromanian-Vlach.jpeg",
        width: 736,
        height: 981,
        alt: "A folk dance group in red and white Aromanian costumes posing in front of a stone building.",
        caption: "Folk dance group in Aromanian costume",
        credit: {
            author: "Unknown photographer",
            via: { label: "Pinterest", url: "https://mx.pinterest.com/pin/907756868643326804/" },
        },
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Femmes_valaques_rev%C3%AAtues_du_costume_national_-_Van_Den_Brule_Alfred_-_1907.jpg",
        width: 800,
        height: 651,
        alt: "1907 photograph of Vlach women wearing their national costume.",
        caption: "Vlach women in national costume, 1907",
        credit: {
            author: "Alfred Van Den Brule",
            authorUrl: "https://www.wikidata.org/wiki/Q48832770",
            source: "http://eng.travelogues.gr/travelogue.php?view=72&creator=1028869&tag=8852",
            license: "Public domain",
            via: { label: "Wikimedia Commons", url: "https://commons.wikimedia.org/w/index.php?curid=66473094" },
        },
    },
]

// Sections without a page yet have no href and show as "coming soon".
// Each picture is public domain, from Wikimedia Commons. `fit` sets how it sits in its frame (see IMAGE_FIT),
// and `zoom` enlarges or shrinks it (Tailwind scale and origin classes).
const IMAGE_FIT = {
    cover: "aspect-4/3 object-cover",                    // fills a 4:3 frame, cropping the edges if needed
    contain: "aspect-4/3 bg-orange-100 object-contain",  // whole picture inside a 4:3 frame, on a parchment background
    natural: "h-auto",                                   // whole picture in its own proportions; the frame fits the picture
}
const DISCOVER = [
    {
        href: "/learn",
        label: "The language",
        title: "Learn Aromanian",
        description: "Discover the history of the language, its alphabet, dictionaries, and quizzes to practise what you learn.",
        image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Codex_Dimonie.jpg",
            width: 700,
            height: 322,
            fit: "contain",
            alt: "A yellowed manuscript page of Aromanian text handwritten in Greek letters, under a heading in capitals.",
            caption: "A page of the Codex Dimonie, an 18th-century Aromanian manuscript written in Greek letters",
            link: "https://commons.wikimedia.org/wiki/File:Codex_Dimonie.jpg",
        },
    },
    {
        href: "/history",
        label: "The past",
        title: "History",
        description: "The story of the Aromanian people across the Balkans.",
        image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Voskopoja_ne_vitin_1742.jpg",
            width: 993,
            height: 768,
            alt: "Engraving of the town of Moscopole (Voskopojë) in 1742, with its houses and churches spread across a hillside.",
            // Shown in its own proportions, uncropped, instead of the usual 4:3 frame.
            fit: "natural",
            caption: "Moscopole (Voskopojë) in 1742, after an engraving",
            link: "https://commons.wikimedia.org/wiki/File:Voskopoja_ne_vitin_1742.jpg",
        },
    },
    {
        href: "/traditions",
        label: "Customs and beliefs",
        title: "Traditions",
        description: "The customs that marked every stage of Aromanian life, from birth and marriage to death.",
        image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Vlasi_vo_Egejska_Makedonija.jpg",
            width: 1309,
            height: 935,
            alt: "An old photograph of an Aromanian family in traditional costume in front of thatched shepherd huts.",
            caption: "Aromanians in traditional costume in Greek Macedonia, 1940s, State Archives of North Macedonia",
            link: "https://commons.wikimedia.org/wiki/File:Vlasi_vo_Egejska_Makedonija.jpg",
        },
    },
    {
        href: "/personalities",
        label: "Notable Aromanians",
        title: "Personalities",
        description: "Painters and patriarchs, doctors and footballers: people of Aromanian descent who left their mark on the Balkans and beyond.",
        image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Milton_Manaki_filming.png",
            width: 350,
            height: 254,
            alt: "Milton Manaki standing behind his film camera on a tripod in a grassy valley.",
            caption: "Milton Manaki, pioneer of Balkan film, filming near Bitola with his Bioscope camera",
            link: "https://commons.wikimedia.org/wiki/File:Milton_Manaki_filming.png",
        },
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
                                <figure className={i % 2 === 1 ? "md:order-2" : ""}>
                                    <div className="relative isolate">
                                        <div className="border border-rose-950/30 bg-white p-2.5">
                                            <div className="overflow-hidden">
                                                <Image
                                                    src={item.image.src}
                                                    alt={item.image.alt}
                                                    width={item.image.width}
                                                    height={item.image.height}
                                                    className={`w-full ${IMAGE_FIT[item.image.fit ?? "cover"]} ${item.image.zoom ?? ""} ${item.href ? "sepia-25" : "grayscale"}`}
                                                    // Load straight from Wikimedia, which rate-limits the Next.js image optimiser.
                                                    unoptimized
                                                />
                                            </div>
                                        </div>
                                        <span aria-hidden className={`absolute -bottom-4 h-full w-full border-2 border-gold -z-10 ${i % 2 === 1 ? "-left-4" : "left-4"}`} />
                                    </div>
                                    <figcaption className="mt-7 font-serif text-sm italic text-yellow-700">
                                        {item.image.caption}. Public domain, via{" "}
                                        <a href={item.image.link} target="_blank" rel="noopener noreferrer" className="underline decoration-gold hover:text-rose-950">Wikimedia Commons</a>.
                                    </figcaption>
                                </figure>

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

                    <details className="group mx-auto mt-12 max-w-6xl px-5">
                        <summary className="w-fit cursor-pointer font-serif text-lg italic text-yellow-700 hover:text-rose-950 transition-colors">
                            Image credits
                        </summary>
                        <ol className="mt-4 flex flex-col gap-3 text-sm text-yellow-950">
                            {SLIDES.map((slide, index) => (
                                <li key={`${index}-${slide.src}`}>
                                    <span className="font-serif text-base italic text-rose-950">{slide.caption}</span>
                                    {slide.credit ? (
                                        <>
                                            {" "}by{" "}
                                            {slide.credit.authorUrl ? (
                                                <a href={slide.credit.authorUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-gold hover:text-rose-950">{slide.credit.author}</a>
                                            ) : slide.credit.author}
                                            {slide.credit.note && <>, {slide.credit.note}</>}
                                            {slide.credit.source && <>, <a href={slide.credit.source} target="_blank" rel="noopener noreferrer" className="underline decoration-gold hover:text-rose-950">source</a></>}
                                            {slide.credit.license && (
                                                <>
                                                    {", "}
                                                    {slide.credit.licenseUrl ? (
                                                        <a href={slide.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-gold hover:text-rose-950">{slide.credit.license}</a>
                                                    ) : slide.credit.license}
                                                </>
                                            )}
                                            {", via "}
                                            <a href={slide.credit.via.url} target="_blank" rel="noopener noreferrer" className="underline decoration-gold hover:text-rose-950">{slide.credit.via.label}</a>
                                        </>
                                    ) : (
                                        <> (source to be added)</>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </details>
                </section>
            </main>
        </div>
    )
}
