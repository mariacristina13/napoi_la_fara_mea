import Link from "next/link"
import BackToTop from "../components/backToTop"
import { SectionHeading } from "../components/learnPage"
import { TraditionHeader } from "../components/traditionPage"
import { PERSONALITIES_HEADER_IMAGE } from "../components/headerImages"

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
