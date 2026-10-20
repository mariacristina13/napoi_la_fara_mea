import Image from "next/image"
import Link from "next/link"
import BackToTop from "../components/backToTop"
import { SectionHeading } from "../components/learnPage"
import { TraditionHeader } from "../components/traditionPage"
import { Ornament } from "../components/ornament"
import { PERSONALITIES_HEADER_IMAGE, PERSONALITIES_HEADER_CREDIT } from "../components/headerImages"

const SOURCES = {
    globalVoices: {
        label: "Global Voices, “Artist celebrates 120 years of Aromanian National Day by publishing 120 portraits of eminent Aromanians”, 26 May 2025",
        url: "https://globalvoices.org/2025/05/26/artist-celebrates-120-years-of-aromanian-national-day-by-publishing-120-portraits-of-eminent-aromanians/",
        license: "CC BY 3.0",
        licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    },
    wikipedia: {
        label: "Wikipedia, “Aromanians” (Notable people)",
        url: "https://en.wikipedia.org/wiki/Aromanians#Notable_people",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    wikipediaList: {
        label: "Wikipedia, “List of Aromanians”",
        url: "https://en.wikipedia.org/wiki/List_of_Aromanians",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
}

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

// Portraits for the gallery, all from Wikimedia Commons: public domain or Creative Commons (credited below the gallery).
// `width` and `height` are the picture's size, so each one keeps its own proportions in its frame.
const PORTRAITS = [
    {
        name: "Nicolae Dumba",
        years: "1830–1900",
        role: "Industrialist and patron of the arts",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Angeli%E2%80%93Nicolaus_Dumba%2C_1900.jpg/960px-Angeli%E2%80%93Nicolaus_Dumba%2C_1900.jpg",
        width: 600, height: 810,
        alt: "Oil portrait of Nicolae Dumba, an older man with a grey beard in a dark suit, standing.",
        credit: { author: "Heinrich von Angeli, 1900", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:Angeli%E2%80%93Nicolaus_Dumba,_1900.jpg" },
    },
    {
        name: "George Averoff",
        years: "1815–1899",
        role: "Merchant and benefactor",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/93/George_Averoff.jpg",
        width: 600, height: 719,
        alt: "Oval portrait of George Averoff, an older man with white hair and a white moustache, in a dark suit and bow tie.",
        credit: { author: "Unknown author", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:George_Averoff.jpg" },
    },
    {
        name: "Simon Sinas",
        years: "1810–1876",
        role: "Banker and benefactor",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Simon_Sina_by_Nadar.png/960px-Simon_Sina_by_Nadar.png",
        width: 600, height: 978,
        alt: "Photograph of Simon Sinas standing in a dark frock coat, one hand resting on a small table.",
        credit: { author: "Félix Nadar", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:Simon_Sina_by_Nadar.png" },
    },
    {
        name: "Rigas Feraios",
        years: "1757–1798",
        role: "Writer and revolutionary",
        src: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Rigas_Feraios_01.jpg",
        width: 600, height: 720,
        alt: "Painted portrait of Rigas Feraios with dark hair and a moustache, in a blue coat over a white shirt.",
        credit: { author: "Andreas Kriezis, Benaki Museum", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:Rigas_Feraios_01.jpg" },
    },
    {
        name: "Draga Ljočić",
        years: "1855–1926",
        role: "The first Serbian woman doctor",
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Draga_Ljocic.jpg",
        width: 600, height: 959,
        alt: "Black-and-white portrait of Draga Ljočić as a young woman with short dark hair and a dark jacket.",
        credit: { author: "Unknown author, about 1885", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:Draga_Ljocic.jpg" },
    },
    {
        name: "Ion Luca Caragiale",
        years: "1852–1912",
        role: "Playwright and writer",
        src: "https://upload.wikimedia.org/wikipedia/commons/8/86/Ion_Luca_Caragiale_-_Foto02.jpg",
        width: 600, height: 776,
        alt: "Photograph of Ion Luca Caragiale wearing a fur hat, round glasses and a large moustache.",
        credit: { author: "Unknown author", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:Ion_Luca_Caragiale_-_Foto02.jpg" },
    },
    {
        name: "The Manaki brothers",
        years: "Janaki 1878–1954 · Milton 1882–1964",
        role: "Pioneers of Balkan photography and film",
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Manaki_Brothers.jpg",
        width: 600, height: 901,
        alt: "Old photograph of the two Manaki brothers standing side by side in suits and hats.",
        credit: { author: "Manaki brothers collection", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:Manaki_Brothers.jpg" },
    },
    {
        name: "Koča Popović",
        years: "1908–1992",
        role: "General and diplomat",
        src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Ko%C4%8Da-Popovic.png",
        width: 600, height: 828,
        alt: "Black-and-white photograph of Koča Popović in military uniform with medals, 1948.",
        credit: { author: "Unknown author, 1948", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:Ko%C4%8Da-Popovic.png" },
    },
    {
        name: "Patriarch Cyril of Bulgaria",
        years: "1901–1971",
        role: "First Patriarch of the restored Bulgarian Patriarchate",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/BASA-1318K-1-5972-12-Cyril_of_Bulgaria.jpg/960px-BASA-1318K-1-5972-12-Cyril_of_Bulgaria.jpg",
        width: 600, height: 808,
        alt: "Photograph of Patriarch Cyril in a white headdress and dark robes, wearing a pectoral cross.",
        credit: { author: "Bulgarian Archives State Agency", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", page: "https://commons.wikimedia.org/wiki/File:BASA-1318K-1-5972-12-Cyril_of_Bulgaria.jpg" },
    },
    {
        name: "Yiannis Boutaris",
        years: "1942–2024",
        role: "Winemaker and mayor of Thessaloniki",
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Yiannis_Boutaris_Drasi.jpg",
        width: 600, height: 903,
        alt: "Close-up photograph of Yiannis Boutaris, a grey-haired man with glasses.",
        credit: { author: "Drassi", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", page: "https://commons.wikimedia.org/wiki/File:Yiannis_Boutaris_Drasi.jpg" },
    },
    {
        name: "Toše Proeski",
        years: "1981–2007",
        role: "Singer",
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Toseproeskiskopje.jpg",
        width: 600, height: 400,
        alt: "Toše Proeski on stage with his arms spread wide at his last concert in Skopje, 2007.",
        credit: { author: "Kristijan006", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", page: "https://commons.wikimedia.org/wiki/File:Toseproeskiskopje.jpg" },
    },
    {
        name: "Simona Halep",
        years: "born 1991",
        role: "World No. 1 tennis player",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/94/Simona_Halep_at_Sports_Festival_2026_%28cropped%29.jpg",
        width: 600, height: 758,
        alt: "Photograph of Simona Halep smiling, holding a tennis racket.",
        credit: { author: "Nuță Lucian", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", page: "https://commons.wikimedia.org/wiki/File:Simona_Halep_at_Sports_Festival_2026_(cropped).jpg" },
    },
    {
        name: "Gheorghe Hagi",
        years: "born 1965",
        role: "Footballer and coach",
        src: "https://upload.wikimedia.org/wikipedia/commons/4/49/Lansarea_candidaturii_Gabrielei_Szabo_pentru_Camera_Deputatilor%2C_Voluntari_-_04.05_%2848%29_%2814270956179%29_%28cropped%29.jpg",
        width: 847, height: 1074,
        alt: "Photograph of Gheorghe Hagi at a public event in 2014.",
        credit: { author: "Partidul Social Democrat, 2014", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", page: "https://commons.wikimedia.org/wiki/File:Lansarea_candidaturii_Gabrielei_Szabo_pentru_Camera_Deputatilor,_Voluntari_-_04.05_(48)_(14270956179)_(cropped).jpg" },
    },
    {
        name: "Elie Carafoli",
        years: "1901–1983",
        role: "Engineer, aircraft designer and pioneer of aerodynamics",
        src: "https://upload.wikimedia.org/wikipedia/commons/b/be/Elie_Carafoli.jpg",
        width: 312, height: 441,
        alt: "Black-and-white portrait photograph of Elie Carafoli, a balding man in a dark suit and striped tie.",
        credit: { author: "Unknown author", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:Elie_Carafoli.jpg" },
    },
    {
        name: "Branislav Nušić",
        years: "1864–1938",
        role: "Playwright and satirist",
        src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Branislav_Nu%C5%A1i%C4%87_%28cropped%29.jpg",
        width: 617, height: 817,
        alt: "Photograph of Branislav Nušić, 1900.",
        credit: { author: "Milan Jovanović, 1900", license: "Public domain", page: "https://commons.wikimedia.org/wiki/File:Branislav_Nu%C5%A1i%C4%87_(cropped).jpg" },
    },
]

// The order the portraits hang in. The gallery fills each column from top to bottom, and the portraits have
// different heights, so these orders were worked out to make every column end at the same height.
// Wide screens have 3 columns (5 portraits each); tablets and phones use the second order (2 columns of 8 and 7).
// If you add or remove a portrait, it needs adding to (or removing from) both lists.
const ORDER_THREE_COLUMNS = [
    "Nicolae Dumba", "Branislav Nušić", "Elie Carafoli", "Gheorghe Hagi", "Simona Halep",
    "Simon Sinas", "Draga Ljočić", "Koča Popović", "Patriarch Cyril of Bulgaria", "Toše Proeski",
    "Rigas Feraios", "George Averoff", "Ion Luca Caragiale", "The Manaki brothers", "Yiannis Boutaris",
]
const ORDER_TWO_COLUMNS = [
    "Nicolae Dumba", "Rigas Feraios", "George Averoff", "Ion Luca Caragiale", "Branislav Nušić", "Koča Popović", "Toše Proeski", "Simona Halep",
    "Simon Sinas", "Draga Ljočić", "The Manaki brothers", "Elie Carafoli", "Patriarch Cyril of Bulgaria", "Yiannis Boutaris", "Gheorghe Hagi",
]
const byName = (name) => PORTRAITS.find((portrait) => portrait.name === name)

// The ten people profiled by Global Voices, rewritten in our own words.
// Corrected from the article: Toše Proeski died in 2007 (not 2027), Simona Halep was born in 1991 (not 1981),
// and Draga Ljočić's war with Bulgaria was in 1885 (not 1855–1886).
const PROFILES = [
    {
        name: "Konstantin “Koča” Popović",
        years: "1908–1992",
        born: "Belgrade, Serbia",
        field: "Military and diplomacy",
        text: "A surrealist poet and communist who fought in the Spanish Civil War, then commanded the First Proletarian Division of the Yugoslav Partisans. He became Chief of the General Staff of the Yugoslav army and later a diplomat, credited with the idea behind the Non-Aligned Movement.",
    },
    {
        name: "Nicolae Dumba",
        years: "1830–1900",
        born: "Vienna, Austria",
        field: "Industry and the arts",
        text: "An industrialist, liberal politician and great patron of the arts, and a friend of Gustav Klimt, Richard Wagner and Johann Strauss II. Global Voices credits him with commissioning The Blue Danube, and he helped finance the Musikverein, the concert hall of Vienna's famous New Year's Concert.",
    },
    {
        name: "Draga Ljočić",
        years: "1855–1926",
        born: "Šabac, Serbia",
        field: "Medicine",
        text: "The first Serbian woman doctor. She studied medicine in Zürich and served as a medical assistant and lieutenant in the wars against the Ottoman Empire, the 1885 war with Bulgaria, the Balkan Wars and the First World War, all while fighting the discrimination she faced as a woman in medicine.",
    },
    {
        name: "Nikola Martin",
        years: "1903–1973",
        born: "Kruševo, North Macedonia",
        field: "Painting",
        text: "One of Yugoslavia's best-known painters, trained in Skopje, Bucharest and Paris, and a co-founder of the National Gallery of Macedonia. He left 62 of his works to his hometown, where they hang today in the gallery that bears his name.",
    },
    {
        name: "Yiannis Boutaris",
        years: "1942–2024",
        born: "Thessaloniki, Greece",
        field: "Wine and politics",
        text: "A winemaker and progressive politician, mayor of Thessaloniki from 2011 to 2019. Both his parents were Aromanian, from Kruševo and Moscopole. He co-founded the environmental organisation Arcturos, and in 2012 the City Mayors Foundation named him its mayor of the month.",
    },
    {
        name: "George Averoff",
        years: "1815–1899",
        born: "Metsovo, Greece",
        field: "Philanthropy",
        text: "A merchant who made his fortune in Alexandria and gave much of it away: he funded schools in Egypt and Greece, paid for the restoration of the Panathenaic Stadium so that Athens could host the first modern Olympic Games in 1896, and helped found the National Technical University of Athens.",
    },
    {
        name: "Florica Bagdasar",
        years: "1901–1978",
        born: "Bitola, North Macedonia",
        field: "Medicine and politics",
        text: "A neuropsychiatrist and Romania's first woman minister, serving as minister of health from 1946 to 1948. After studying at Harvard, she and her husband brought modern neurosurgery to Romania, and she founded a centre for children's mental health in Bucharest. Her career later suffered under the Stalinist purges.",
    },
    {
        name: "Patriarch Cyril of Bulgaria",
        years: "1901–1971",
        born: "Sofia, Bulgaria",
        field: "Religion",
        text: "Born Costa Paciu into a family from the Aromanian towns of Grabova and Moscopole, he became the first Patriarch of the restored Bulgarian Patriarchate in 1953. During the Second World War he helped prevent the deportation of Bulgaria's Jews, and he is honoured by Yad Vashem as Righteous Among the Nations.",
    },
    {
        name: "Toše Proeski",
        years: "1981–2007",
        born: "Prilep, North Macedonia",
        field: "Music",
        text: "One of the biggest pop stars of the Balkans, from the Aromanian families Proia and Nalbanti. A UNICEF goodwill ambassador, he gave a final fundraising concert in Skopje for over 25,000 people before dying in a car accident in Croatia at the age of 26. He was named an honorary citizen of Macedonia.",
    },
    {
        name: "Simona Halep",
        years: "born 1991",
        born: "Constanța, Romania",
        field: "Sport",
        text: "A tennis player who was ranked world No. 1 in women's singles in 2017 and 2018. She won the French Open in 2018 and Wimbledon in 2019, before retiring from the sport.",
    },
]

// A selection from Wikipedia's list of notable Aromanians, grouped by field.
const MORE_PEOPLE = [
    {
        field: "Arts and literature",
        people: [
            ["Ion Luca Caragiale", "playwright and writer"],
            ["Toma Caragiu", "actor"],
            ["Constantin Noica", "philosopher"],
            ["Branislav Nušić", "playwright and satirist"],
            ["Jovan Sterija Popović", "playwright and poet"],
            ["Jovan Jovanović Zmaj", "poet"],
            ["Herbert von Karajan", "conductor"],
            ["Nuși Tulliu", "poet and prose writer"],
        ],
    },
    {
        field: "Philanthropy and commerce",
        people: [
            ["Simon Sinas", "banker and benefactor"],
            ["Evangelos Zappas", "philanthropist and businessman"],
            ["Michael Tositsas", "benefactor"],
            ["Emanoil Gojdu", "lawyer"],
        ],
    },
    {
        field: "Politics and the military",
        people: [
            ["Rigas Feraios", "writer and revolutionary"],
            ["Ioannis Kolettis", "Prime Minister of Greece"],
            ["János Damjanich", "general and national hero of Hungary"],
            ["Pitu Guli", "revolutionary"],
            ["Michael Dukakis", "Governor of Massachusetts"],
        ],
    },
    {
        field: "Science and scholarship",
        people: [
            ["Elie Carafoli", "engineer and aircraft designer"],
            ["Neagu Djuvara", "historian"],
            ["Jovan Karamata", "mathematician"],
            ["Mina Minovici", "forensic scientist"],
            ["Pericle Papahagi", "historian and folklorist"],
        ],
    },
    {
        field: "Sport",
        people: [
            ["Gheorghe Hagi", "footballer and coach"],
            ["Ianis Hagi", "footballer"],
            ["Dominique Moceanu", "gymnast"],
        ],
    },
]

// People from Wikipedia's list who already appear elsewhere on this site.
const ALREADY_MET = [
    { name: "Nektarios Terpos", role: "monk whose 1731 inscription is the oldest known Aromanian text", href: "/learn", page: "Learn Aromanian" },
    { name: "The Manaki brothers", role: "pioneering photographers and filmmakers", href: "/#gallery", page: "the Gallery" },
]

// One painting on the gallery wall: a soft picture light, a gilded double frame with a cream mat, and a museum label.
function Portrait({ portrait }) {
    return (
        <figure className="mb-12 break-inside-avoid">
            <div className="relative">
                <span aria-hidden className="absolute -top-6 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-yellow-200/25 blur-2xl" />
                <div className="relative border-8 border-double border-yellow-600 bg-yellow-900 p-1.5 shadow-2xl shadow-black/60 ring-1 ring-yellow-950">
                    <div className="border border-yellow-700/60 bg-orange-50 p-3">
                        <Image
                            src={portrait.src}
                            alt={portrait.alt}
                            width={portrait.width}
                            height={portrait.height}
                            className="h-auto w-full"
                            // Load straight from Wikimedia: it rate-limits the Next.js image optimiser when many pictures load at once.
                            unoptimized
                        />
                    </div>
                </div>
            </div>
            <figcaption className="mx-auto mt-5 w-fit max-w-[90%] rounded-sm border border-yellow-700/50 bg-orange-50 px-4 py-2 text-center shadow-md shadow-black/40">
                <span className="block font-serif text-lg font-semibold text-rose-950">{portrait.name}</span>
                <span className="block font-serif text-sm italic text-yellow-700">{portrait.years}</span>
                <span className="block text-xs text-yellow-950">{portrait.role}</span>
            </figcaption>
        </figure>
    )
}

function SourceLink({ source }) {
    return (
        <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline decoration-yellow-600 hover:text-rose-950 hover:decoration-rose-950 transition-colors">
            {source.label}
        </a>
    )
}

export default function Personalities() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
            <TraditionHeader
                back={{ href: "/", label: "Home" }}
                label="Notable Aromanians"
                title="Aromanian Personalities"
                intro="Painters and patriarchs, doctors and footballers: people of Aromanian descent who left their mark on the Balkans and beyond."
                image={PERSONALITIES_HEADER_IMAGE}
                imageCredit={PERSONALITIES_HEADER_CREDIT}
                imageStyle="object-cover opacity-40 sepia-50 blur-xs"
            />

            <main>
                <section aria-labelledby="national-day" className="mx-auto max-w-3xl px-5 pt-16 text-center">
                    <SectionHeading id="national-day" className="mx-auto">Aromanian National Day</SectionHeading>
                    <p className="mt-6 text-base text-yellow-950 md:text-lg">
                        Every 23 May, Aromanians celebrate their National Day, marking the day in 1905 when the Ottoman Empire
                        recognised them as a separate community. It is an official holiday in North Macedonia, and in Romania it is
                        celebrated on 10 May. For the 120th anniversary in 2025, the North Macedonian artist Zoran Cardula drew 120
                        portraits of famous people of Aromanian origin.
                    </p>
                    <p className="mt-5 text-base text-yellow-950 md:text-lg">
                        As Cardula pointed out, they were also Macedonians, Albanians, Serbs, Greeks, Romanians, Bulgarians, Austrians,
                        Americans and more, and each of them is part of the history of the country they lived in.
                    </p>
                    <cite className="mt-3 block text-sm not-italic text-yellow-700">Global Voices, 2025</cite>
                </section>

                <section aria-labelledby="portrait-gallery" className="mt-16 bg-rose-950">
                    <div className="mx-auto max-w-6xl px-5 py-20">
                        <div className="mx-auto w-fit text-center">
                            <h2 id="portrait-gallery" className="font-serif text-4xl font-semibold text-yellow-600 md:text-5xl">The Portrait Gallery</h2>
                            <Ornament light stretch className="mt-4" />
                        </div>
                        <p className="mx-auto mt-6 max-w-2xl text-center font-serif text-lg italic text-orange-50/80">
                            Fifteen faces from three centuries of Aromanian history.
                        </p>

                        {/* Wide screens: 3 columns. The hidden layout's pictures aren't downloaded. */}
                        <div className="mt-16 hidden columns-3 gap-10 lg:block">
                            {ORDER_THREE_COLUMNS.map((name) => (
                                <Portrait key={name} portrait={byName(name)} />
                            ))}
                        </div>
                        {/* Tablets: 2 columns; phones: 1 column. */}
                        <div className="mt-16 columns-1 gap-10 sm:columns-2 lg:hidden">
                            {ORDER_TWO_COLUMNS.map((name) => (
                                <Portrait key={name} portrait={byName(name)} />
                            ))}
                        </div>

                        <cite className="mt-8 block text-sm not-italic text-orange-50/70">
                            Names, dates and roles: Global Voices, 2025; Wikipedia, &ldquo;List of Aromanians&rdquo;
                        </cite>

                        <details className="mt-6 text-orange-50/80">
                            <summary className="w-fit cursor-pointer font-serif text-lg italic text-gold hover:text-orange-50 transition-colors">
                                Picture credits
                            </summary>
                            <ul className="mt-4 flex flex-col gap-2 text-sm">
                                {PORTRAITS.map((portrait) => (
                                    <li key={portrait.name}>
                                        <span className="font-serif text-base italic text-orange-50">{portrait.name}</span>: {portrait.credit.author},{" "}
                                        {portrait.credit.licenseUrl ? (
                                            <a href={portrait.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-gold hover:text-gold">{portrait.credit.license}</a>
                                        ) : portrait.credit.license}
                                        , via{" "}
                                        <a href={portrait.credit.page} target="_blank" rel="noopener noreferrer" className="underline decoration-gold hover:text-gold">Wikimedia Commons</a>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </div>
                </section>

                <section aria-labelledby="ten-lives" className="mx-auto max-w-5xl px-5 py-16">
                    <SectionHeading id="ten-lives" eyebrow="From Cardula's gallery">Ten remarkable lives</SectionHeading>

                    <ol className="mt-10 grid gap-6 sm:grid-cols-2">
                        {PROFILES.map((person, i) => (
                            <li key={person.name} className="flex flex-col rounded-sm border border-rose-950/30 bg-white p-6">
                                <div className="flex items-baseline justify-between gap-4">
                                    <span className="font-serif text-2xl italic text-gold">{ROMAN_NUMERALS[i]}</span>
                                    <span className="text-right font-serif text-base italic text-yellow-700">{person.field}</span>
                                </div>
                                <h3 className="mt-1 font-serif text-2xl font-semibold text-rose-950">{person.name}</h3>
                                <p className="text-sm text-yellow-700">{person.years} &middot; born in {person.born}</p>
                                <p className="mt-4 flex-1 text-base text-yellow-950">{person.text}</p>
                            </li>
                        ))}
                    </ol>
                    <cite className="mt-4 block text-sm not-italic text-yellow-700">Global Voices, 2025</cite>
                </section>

                <section aria-labelledby="more-people" className="border-y border-yellow-600/30 bg-orange-100/50">
                    <div className="mx-auto max-w-5xl px-5 py-16">
                        <SectionHeading id="more-people">More notable Aromanians</SectionHeading>
                        <p className="mt-6 max-w-3xl text-base text-yellow-950 md:text-lg">
                            A selection from a much longer list. As Wikipedia notes, many of these claims of Aromanian descent are
                            disputed, or shared with ancestry from other peoples.
                        </p>

                        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {MORE_PEOPLE.map((group) => (
                                <div key={group.field}>
                                    <h3 className="font-serif text-2xl font-semibold text-rose-950">{group.field}</h3>
                                    <ul className="mt-4 flex flex-col gap-2">
                                        {group.people.map(([name, role]) => (
                                            <li key={name} className="flex gap-3 text-base text-yellow-950">
                                                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                                                <span><span className="font-serif text-lg text-rose-950">{name}</span>, {role}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div className="rounded-sm border-4 border-double border-rose-950/30 bg-white p-6">
                                <h3 className="font-serif text-2xl italic text-yellow-700">Names you have already met</h3>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {ALREADY_MET.map((person) => (
                                        <li key={person.name} className="text-base text-yellow-950">
                                            <span className="font-serif text-lg text-rose-950">{person.name}</span>, {person.role}.{" "}
                                            <Link href={person.href} className="whitespace-nowrap text-sm font-bold uppercase tracking-wide text-gold hover:text-rose-950 transition-colors">
                                                See {person.page}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <cite className="mt-6 block text-sm not-italic text-yellow-700">Wikipedia, &ldquo;Aromanians&rdquo; and &ldquo;List of Aromanians&rdquo;</cite>
                    </div>
                </section>

                <section aria-labelledby="sources" className="mx-auto max-w-5xl px-5 py-16">
                    <SectionHeading id="sources">Sources</SectionHeading>
                    <ul className="mt-6 flex flex-col gap-3 text-base text-yellow-950">
                        {Object.values(SOURCES).map((source) => (
                            <li key={source.url}>
                                <SourceLink source={source} />, text licensed under{" "}
                                <a href={source.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-yellow-600 hover:text-rose-950">{source.license}</a>.
                            </li>
                        ))}
                        <li>
                            Banner photograph: Milton Manaki filming near Bitola, by the Manaki brothers, public domain, via{" "}
                            <a href="https://commons.wikimedia.org/wiki/File:Milton_Manaki_filming.png" target="_blank" rel="noopener noreferrer" className="underline decoration-yellow-600 hover:text-rose-950">Wikimedia Commons</a>.
                        </li>
                    </ul>
                    <p className="mt-6 text-sm text-yellow-700">
                        Zoran Cardula&apos;s portraits are his own work and are not reproduced here; you can see a selection in the Global Voices article.
                    </p>
                </section>
            </main>

            <BackToTop />
        </div>
    )
}
