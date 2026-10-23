"use client"
import Link from "next/link"
import { Map, MapControls, MapMarker, MarkerContent, MarkerPopup } from "@/app/components/ui/map"
import { TraditionHeader } from "../components/traditionPage"
import { SectionHeading } from "../components/learnPage"
import { Ornament } from "../components/ornament"
import BackToTop from "../components/backToTop"
import { HISTORY_HEADER_IMAGE, HISTORY_HEADER_CREDIT } from "../components/headerImages"


// Marker colour for each country (also used in the legend under the map).
const COUNTRIES = [
    { name: "Greece", colour: "bg-sky-700" },
    { name: "Albania", colour: "bg-rose-700" },
    { name: "North Macedonia", colour: "bg-amber-500" },
    { name: "Romania", colour: "bg-emerald-700" },
    { name: "Bulgaria", colour: "bg-violet-700" },
]
const colourOf = (country) => COUNTRIES.find((c) => c.name === country).colour

// Aromanian settlements. Coordinates are from Wikipedia. `aromanian` is the Aromanian name, where one is given;
// `didYouKnow` and `link` connect the place to other pages on this site; `sources` are keys of SOURCES.
const PLACES = [
    // Greece
    {
        name: "Metsovo", aromanian: "Aminciu", country: "Greece", lng: 21.1839, lat: 39.7703,
        sources: ["wiki-settlements", "farsharotu", "bluebird", "wiki-people"],
        text: "The largest and most vibrant year-round Aromanian town, in the Pindus mountains.",
        didYouKnow: "The great benefactors George Averoff and Michael Tositsas were both born here.",
        link: { href: "/personalities", label: "See George Averoff in the Portrait Gallery" },
    },
    {
        name: "Samarina", country: "Greece", lng: 21.0667, lat: 40.1,
        sources: ["wiki-settlements", "farsharotu", "bluebird", "wiki-samarina"],
        text: "One of the highest villages in Greece, famous for its major annual Aromanian festival.",
        didYouKnow: "It is a classic summer village of the Pindus shepherds, described by Wace and Thompson in The Nomads of the Balkans (1914).",
    },
    {
        name: "Nymfaio", aromanian: "Nevesca", country: "Greece", lng: 21.5, lat: 40.65,
        sources: ["wiki-settlements", "farsharotu", "bluebird"],
        text: "A historically prosperous merchant town established by Aromanian traders.",
    },
    {
        name: "Avdella", country: "Greece", lng: 21.1333, lat: 40.0167,
        sources: ["wiki-settlements", "farsharotu", "bluebird", "wiki-people"],
        text: "One of the major traditional highland Vlach settlements in the Pindus range.",
        didYouKnow: "The Manaki brothers, pioneers of Balkan photography and film, were born here.",
        link: { href: "/personalities", label: "See the Manaki brothers in the Portrait Gallery" },
    },
    {
        name: "Perivoli", country: "Greece", lng: 21.1167, lat: 39.9833,
        sources: ["wiki-settlements", "farsharotu", "bluebird"],
        text: "One of the major traditional highland Vlach settlements in the Pindus range.",
    },
    {
        name: "Larissa", country: "Greece", lng: 22.4167, lat: 39.6417,
        sources: ["wiki-settlements", "farsharotu", "bluebird"],
        text: "A major urban hub in Thessaly, where significant numbers of largely assimilated Aromanians live.",
    },
    {
        name: "Volos", country: "Greece", lng: 22.9333, lat: 39.3667,
        sources: ["wiki-settlements", "farsharotu", "bluebird"],
        text: "A major urban hub in Thessaly, where significant numbers of largely assimilated Aromanians live.",
    },
    {
        name: "Veria", country: "Greece", lng: 22.2, lat: 40.5167,
        sources: ["wiki-settlements", "wiki-people"],
        text: "A town in Greek Macedonia with an Aromanian community.",
        didYouKnow: "The engineer and aircraft designer Elie Carafoli, a pioneer of aerodynamics, was born here.",
        link: { href: "/personalities", label: "See Elie Carafoli in the Portrait Gallery" },
    },

    // Albania
    {
        name: "Voskopojë", aromanian: "Moscopole", country: "Albania", lng: 20.5903, lat: 40.6333,
        sources: ["wiki-settlements", "wiki-aromanians", "wiki-albania", "columbia", "diaconescu", "wiki-people"],
        text: "The most famous historic Aromanian cultural, economic and printing centre, destroyed in the 18th century.",
        didYouKnow: "Its printing press and New Academy made it a centre of learning; the scholar Theodore Kavalliotis taught there.",
    },
    {
        name: "Fier", country: "Albania", lng: 19.5572, lat: 40.725,
        sources: ["wiki-settlements", "wiki-aromanians", "wiki-albania", "columbia"],
        text: "Has a distinct Aromanian quarter, historically known as Ferãcã.",
    },
    {
        name: "Korçë", aromanian: "Curceau", country: "Albania", lng: 20.7667, lat: 40.6167,
        sources: ["wiki-settlements", "wiki-aromanians", "wiki-albania", "columbia"],
        text: "A significant south-eastern centre with a large historic and modern Aromanian population.",
    },
    {
        name: "Grabovë e Sipërme", aromanian: "Grabova", country: "Albania", lng: 20.4086, lat: 40.7953,
        sources: ["wiki-settlements", "wiki-aromanians", "wiki-albania", "columbia", "wiki-people"],
        text: "An isolated, historic highland settlement in the Gramos mountains.",
        didYouKnow: "The family of Patriarch Cyril of Bulgaria came from Grabova and Moscopole.",
        link: { href: "/personalities", label: "See Patriarch Cyril in the Portrait Gallery" },
    },
    {
        name: "Tirana", country: "Albania", lng: 19.8181, lat: 41.3283,
        sources: ["wiki-settlements", "wiki-aromanians", "wiki-albania", "columbia"],
        text: "A modern city with a substantial Aromanian community, the result of 20th-century migrations.",
    },
    {
        name: "Elbasan", country: "Albania", lng: 20.0806, lat: 41.1111,
        sources: ["wiki-settlements", "wiki-aromanians", "wiki-albania", "columbia"],
        text: "A modern city with a substantial Aromanian community, the result of 20th-century migrations.",
    },

    // North Macedonia
    {
        name: "Kruševo", aromanian: "Crușova", country: "North Macedonia", lng: 21.2483, lat: 41.37,
        sources: ["wiki-settlements", "wiki-macedonia", "columbia", "diaconescu", "wiki-people"],
        text: "The political and cultural centre of the Aromanians in North Macedonia, where Aromanian is a co-official language.",
        didYouKnow: "In 1903 it was at the heart of the Ilinden Uprising. The painter Nikola Martin was born here, and the singer Toše Proeski grew up here.",
        link: { href: "/personalities", label: "Read about Nikola Martin and Toše Proeski" },
    },
    {
        name: "Bitola", aromanian: "Monastir", country: "North Macedonia", lng: 21.3347, lat: 41.0319,
        sources: ["wiki-settlements", "wiki-macedonia", "columbia", "eminescu", "wiki-people"],
        text: "A historic diplomatic city with a prominent, long-standing Aromanian community.",
        didYouKnow: "The Manaki brothers had their photography studio here, and a Romanian high school taught Aromanian pupils.",
        link: { href: "/personalities", label: "See the Manaki brothers in the Portrait Gallery" },
    },
    {
        name: "Štip", country: "North Macedonia", lng: 22.1936, lat: 41.7375,
        sources: ["wiki-settlements", "wiki-macedonia", "columbia"],
        text: "Home to a significant share of the country's recognised Aromanian minority.",
    },
    {
        name: "Skopje", country: "North Macedonia", lng: 21.4317, lat: 41.9961,
        sources: ["wiki-settlements", "wiki-macedonia", "columbia"],
        text: "The capital, home to a significant share of the country's recognised Aromanian minority.",
    },

    // Romania
    {
        name: "Constanța", country: "Romania", lng: 28.6333, lat: 44.1667,
        sources: ["wiki-settlements", "wiki-people"],
        text: "This port city in Dobruja and the area around it became the main destination for thousands of Aromanians who left the southern Balkans in the early 20th century.",
        didYouKnow: "The tennis player Simona Halep, was born here.",
        link: { href: "/personalities", label: "See Simona Halep in the Portrait Gallery" },
    },

    {
        name: "Tulcea", country: "Romania", lng: 28.8036, lat: 45.1775,
        sources: ["diaconescu", "marcu", "aspecte"],
        text: "A port town on the Danube, at the edge of the Danube Delta in northern Dobruja. Many Aromanian families moved to this region after 1940, when Romania gave Southern Dobruja to Bulgaria and the settlers of the 1920s had to leave their new homes.",
        didYouKnow: "Aromanian communities still live in the villages around Tulcea, such as Cataloi, and Aromanian folk songs were recorded in the county in 1978 for a Romanian folklore archive.",
    },

    {
        name: "Bucharest", aromanian: "Bucureshti", country: "Romania", lng: 26.1025, lat: 44.4325,
        sources: ["diaconescu", "wiki-society"],
        text: "The Romanian capital, where many Aromanians have moved over the years, from merchants and students in the 19th century to families from Dobruja and the Balkans in the 20th.",
        didYouKnow: "The Macedo-Romanian Cultural Society, founded here in 1879, still has its headquarters in Bucharest. It started most of the early Aromanian newspapers.",
    },

    // Bulgaria
    {
        name: "Peshtera", country: "Bulgaria", lng: 24.3, lat: 42.0333,
        sources: ["wiki-settlements", "eminescu"],
        text: "A town in the western Rhodope mountains, where descendants of Aromanian migrants from the Gramos mountains settled.",
    },
    {
        name: "Rakitovo", country: "Bulgaria", lng: 24.0833, lat: 41.9833,
        sources: ["wiki-settlements"],
        text: "A town in the western Rhodope mountains, where descendants of Aromanian migrants from the Gramos mountains settled.",
    },
]

// The names Aromanians call themselves and are called by others.
const NAMES = [
    { name: "Armân, Arămân", note: "What Aromanians call themselves, from the Latin Romanus." },
    { name: "Vlachs", note: "The Byzantine and Greek name. In Balkan languages it came to mean “nomadic shepherd”." },
    { name: "Macedo-Romanians", note: "The name used in Romania." },
    { name: "Țințari", note: "A Slavic nickname, after the way Aromanians say ținți (“five”) for the Romanian cinci." },
    { name: "Cuțovlahi", note: "A Greek nickname meaning “lame Vlachs”, considered an insult." },
]

// The groups Aromanians divide themselves into, by where their families came from (George Marcu, 1977).
const GROUPS = [
    { name: "Grămusteni", also: "or Cipani", from: "From the Gramos mountains, most of them descendants of the famous village of Gramoste." },
    { name: "Fârșeroți", from: "From northern Greece and from Korçë, in Albania." },
    { name: "Pindeni", also: "also Verieni or Avdeliați", from: "From the villages along the Pindus mountains." },
    { name: "Bitoleni", from: "From the villages around Bitola, in North Macedonia." },
]

// Two views on Aromanian identity in Romania, both from 2005–2006.
const VIEWS = [
    {
        person: "Dumitru Piceava",
        role: "President of the Bana Armânească foundation",
        quote: "But we are not Romanians.",
        text: "The Aromanians are a nation of their own, with their own national day on 23 May. All they want is to keep their language, songs, dress, customs and traditions.",
        source: "aspecte",
    },
    {
        person: "Puiu Hasotti",
        role: "Senator for Constanța, 2005",
        quote: "Aromanians are Romanians.",
        text: "He opposed registering the Aromanians as a national minority, arguing that they should not become a minority in their “true country”, and asked instead for ways to preserve Aromanian culture in Romania.",
        source: "aspecte",
    },
]

// Matilda Caragiu-Marioteanu's “Decalogue” of twelve points, translated.
const DECALOGUE = [
    "The Aromanians (Macedo-Vlachs) and their mother tongue have existed for two thousand years.",
    "The Aromanians have always lived south of the Danube.",
    "The old common language once spoken in this area was a single language.",
    "That area was split in two when the Slavs arrived between the Danube and the Balkan mountains.",
    "The old language divided into today’s four: Romanian, Aromanian, Megleno-Romanian and Istro-Romanian.",
    "Aromanian is the Aromanians’ mother tongue and gives them their sense of identity.",
    "There are two kinds of Aromanians: those native to the Balkans and those of the diaspora.",
    "The Aromanians native to the Balkans have a different status from those of the diaspora.",
    "The Aromanians of the diaspora, in Romania or anywhere else, have a status of their own.",
    "Their name should be “Aromanian” or “Macedo-Vlach”.",
    "The Aromanians are Orthodox Christians, with an Orthodoxy different from that of the Romanians north of the Danube.",
    "The Aromanians should have a single aim: to cultivate their mother tongue and their traditions.",
]

// Latin c and g before e and i became ț and dz in Aromanian.
const WORDS = [
    { romanian: "român", aromanian: "armân", english: "Romanian / Aromanian" },
    { romanian: "cer", aromanian: "țeru", english: "sky" },
    { romanian: "ger", aromanian: "dzeru", english: "frost" },
]

const LANGUAGE_FACTS = [
    { figure: "1,628", text: "words inherited from Latin (T. Papahagi, 1964)" },
    { figure: "100+", text: "of them no longer exist in Romanian" },
    { figure: "1,000", text: "years, roughly, since the two languages were last in contact" },
]

// `source` is the key of an entry in SOURCES.
const TIMELINE = [
    {
        era: "The Middle Ages",
        events: [
            {
                date: "980 & 1020",
                title: "The first mention of the Vlachs",
                text: "Emperor Basil II mentions the Vlachs in a letter of 980 and again in a charter of 1020, which speaks of “the Vlachs of all Bulgaria”.",
                source: "caranica",
            },
            {
                date: "1066",
                title: "Summers in the mountains",
                text: "The Byzantine official Kekaumenos writes that the Vlachs keep their flocks and families in the high mountains from April to September. It is the earliest record of the seasonal migration of flocks (transhumance) that Aromanians practised until the mid-20th century.",
                source: "diaconescu",
            },
            {
                date: "1186",
                title: "The uprising of Peter and Asen",
                text: "Vlachs and Bulgarians rise against Byzantium under the brothers Peter and Asen and found the Second Bulgarian Empire.",
                source: "asen",
            },
            {
                date: "13th–14th c.",
                title: "Great Vlachia",
                text: "After the Byzantine Empire breaks up in 1204, a Vlach state forms in Thessaly, known as Great Vlachia, and fights Latins, Byzantines and Turks.",
                source: "diaconescu",
            },
        ],
    },
    {
        era: "Under Ottoman rule",
        events: [
            {
                date: "18th c.",
                title: "Moscopole at its height",
                text: "Founded in the 14th century and protected by Ottoman privileges, Moscopole builds new churches, a library, a printing press and the New Academy. By the middle of the century it is the cultural centre of the Balkans.",
                source: "diaconescu",
            },
            {
                date: "1769 & 1788",
                title: "Moscopole destroyed",
                text: "The town is looted twice. Its people leave, most of them for the Habsburg lands, and Aromanian merchant families settle as far away as Vienna.",
                source: "diaconescu",
            },
            {
                date: "18th–19th c.",
                title: "Shepherds, merchants and innkeepers",
                text: "Aromanians raise great flocks around the Pindus and run some of the busiest markets in the Balkans. Along the road from Constantinople to Vienna, almost every inn is owned or leased by an Aromanian.",
                source: "caranica",
            },
        ],
    },
    {
        era: "Nations and borders",
        events: [
            {
                date: "1864",
                title: "The first Romanian schools",
                text: "Romanian-language schools open in the Balkans, and Aromanian communities split between those who look to Romania and those who look to Greece.",
                source: "diaconescu",
            },
            {
                date: "1903",
                title: "The Ilinden Uprising",
                text: "Aromanians join the uprising against Ottoman rule. Led by Pitu Guli, they fight a Turkish army for a whole day at Kruševo.",
                source: "diaconescu",
            },
            {
                date: "23 May 1905",
                title: "Recognised by the sultan",
                text: "A decree of the sultan recognises the Vlachs as a separate community, with the right to schools and churches in their own language. The day is now celebrated as the Aromanians’ national day.",
                source: "diaconescu",
            },
            {
                date: "1913",
                title: "Divided by new borders",
                text: "After the Balkan Wars, the Treaty of Bucharest divides the Aromanians between Greece, Serbia, Bulgaria and Albania.",
                source: "diaconescu",
            },
        ],
    },
    {
        era: "The 20th century to today",
        events: [
            {
                date: "1925–1933",
                title: "A new home in Dobruja",
                text: "More than 5,000 Aromanian families move to Romania and settle in Southern Dobruja (the Cadrilater), each receiving around 10–15 hectares of land.",
                source: "diaconescu",
            },
            {
                date: "1940",
                title: "Moving north",
                text: "Romania cedes the Cadrilater to Bulgaria, and the Aromanian settlers move again, to northern Dobruja and around Bucharest.",
                source: "diaconescu",
            },
            {
                date: "1946–1989",
                title: "Closed schools and persecution",
                text: "Greece closes the last Romanian schools in 1946 and Albania bans all religion in 1967. In communist Romania, many Aromanians are imprisoned for their links to the interwar far right.",
                source: "diaconescu",
            },
            {
                date: "1997",
                title: "The Council of Europe",
                text: "The Council of Europe adopts Recommendation 1333 on Aromanian culture and language, asking states to support it.",
                source: "diaconescu",
            },
            {
                date: "Today",
                title: "A language worth keeping",
                text: "Aromanian is a co-official language in Kruševo, North Macedonia. Elsewhere, Aromanians are protected unevenly, and the language survives mostly in families, festivals and cultural societies.",
                source: "wiki-macedonia",
            },
        ],
    },
]

const SOURCES = [
    { key: "diaconescu", short: "Diaconescu, Historia", label: "Marius Diaconescu, “Cine sunt aromânii?”, Historia", url: "https://historia.ro/sectiune/general/cine-sunt-aromanii-578515.html" },
    { key: "caranica", short: "Caranica, Historia", label: "Maria Caranica, “Care este originea aromânilor? O scurtă istorie”, Historia", url: "https://historia.ro/sectiune/general/care-este-originea-aromanilor-o-scurta-istorie-566603.html" },
    { key: "marcu", short: "George Marcu, 1977", label: "George Marcu, Folclor muzical aromân, Editura Muzicală, Bucharest, 1977" },
    { key: "djuvara", short: "Djuvara (ed.), 1996", label: "Matilda Caragiu-Marioteanu, “Decalogul aromânilor”, in Neagu Djuvara (ed.), Aromânii: istorie, limbă, destin, Editura Fundației Culturale Române, Bucharest, 1996, p. 170" },
    { key: "aspecte", short: "“Aspecte istorice din viața aromânilor”", label: "“Aspecte istorice din viața aromânilor” (student paper, author unknown), quoting an email from Dumitru Piceava (2006) and a Senate speech by Puiu Hasotti (25 April 2005)", url: "http://www.scritube.com/istorie/ASPECTE-ISTORICE-DIN-VIATA-ARO2332432422.php" },
    { key: "asen", short: "Wikipedia, Uprising of Asen and Peter", label: "Wikipedia, “Uprising of Asen and Peter”", url: "https://en.wikipedia.org/wiki/Uprising_of_Asen_and_Peter" },
    { key: "farsharotu", short: "Farsharotu", label: "Aromanian Cultural Society Farsharotu, “Touring the Vlach villages of Greece”", url: "https://farsharotu.org/touring-the-vlach-villages-of-greece/" },
    { key: "bluebird", short: "Bluebird Maps", label: "Bluebird Maps, “Vlach or Aromanian settlements in south-east Europe”, 2017", url: "https://bluebirdmaps.com/2017/07/09/vlach-or-aromanian-settlements-in-south-east-europe/" },
    { key: "wiki-settlements", short: "Wikipedia, List of Aromanian settlements", label: "Wikipedia, “List of Aromanian settlements”", url: "https://en.wikipedia.org/wiki/List_of_Aromanian_settlements" },
    { key: "wiki-aromanians", short: "Wikipedia, Aromanians", label: "Wikipedia, “Aromanians”", url: "https://en.wikipedia.org/wiki/Aromanians" },
    { key: "wiki-albania", short: "Wikipedia, Aromanians in Albania", label: "Wikipedia, “Aromanians in Albania”", url: "https://en.wikipedia.org/wiki/Aromanians_in_Albania" },
    { key: "wiki-macedonia", short: "Wikipedia, Aromanians in North Macedonia", label: "Wikipedia, “Aromanians in North Macedonia”", url: "https://en.wikipedia.org/wiki/Aromanians_in_North_Macedonia" },
    { key: "wiki-society", short: "Wikipedia, Macedo-Romanian Cultural Society", label: "Wikipedia, “Macedo-Romanian Cultural Society”", url: "https://en.wikipedia.org/wiki/Macedo-Romanian_Cultural_Society" },
    { key: "columbia", short: "Columbia University", label: "Columbia University, “Aromanians”", url: "http://www.columbia.edu/cu/romanian/articles/aromani.html" },
    { key: "wiki-samarina", short: "Wikipedia, Samarina", label: "Wikipedia, “Samarina”", url: "https://en.wikipedia.org/wiki/Samarina" },
    { key: "wiki-people", short: "Wikipedia, List of Aromanians", label: "Wikipedia, “List of Aromanians”, and the articles on the people in the “Did you know?” notes", url: "https://en.wikipedia.org/wiki/List_of_Aromanians" },
    { key: "eminescu", short: "Eminescu", label: "Mihai Eminescu, Românii Peninsulei Balcanice (newspaper articles, 1876–1882), quoting F. Kanitz" },
]

function PlacePopup({ place }) {
    return (
        <div className="w-max max-w-64 rounded-sm border border-yellow-600 bg-orange-50 p-4 font-sans shadow-xl">
            <p className="text-xs font-bold uppercase tracking-wide text-yellow-700">{place.country}</p>
            <h3 className="mt-1 font-serif text-xl font-semibold leading-tight text-rose-950">
                {place.aromanian ?? place.name}
            </h3>
            {place.aromanian && <p className="font-serif text-sm italic text-yellow-700">{place.name}</p>}
        </div>
    )
}

// Links to one or more entries in the Sources list. `sourceKey` is a key of SOURCES, or a list of keys.
function SourceTag({ sourceKey }) {
    const sources = [sourceKey].flat().map((key) => SOURCES.find((s) => s.key === key))
    return (
        <p className="mt-2 font-serif text-sm italic text-yellow-700">
            {sources.length > 1 ? "Sources" : "Source"}:{" "}
            {sources.map((source, i) => (
                <span key={source.key}>
                    {i > 0 && "; "}
                    <a href={`#source-${source.key}`} className="hover:text-rose-950 transition-colors">{source.short}</a>
                </span>
            ))}
        </p>
    )
}

function Timeline() {
    return (
        <ol className="mt-12 border-l-2 border-yellow-600/50">
            {TIMELINE.map((era) => (
                <li key={era.era} className="relative pb-6">
                    <span aria-hidden className="absolute -left-2.75 top-1 size-5 rotate-45 border-2 border-gold bg-rose-950 ring-4 ring-orange-50" />
                    <h3 className="pl-8 font-serif text-2xl font-semibold text-rose-950 sm:pl-10 md:text-3xl">{era.era}</h3>

                    <ol className="mt-8">
                        {era.events.map((event) => (
                            <li key={event.title} className="relative pb-10 pl-8 sm:flex sm:gap-6 sm:pl-10">
                                <span aria-hidden className="absolute -left-1.75 top-2 size-3 rotate-45 bg-gold ring-4 ring-orange-50" />
                                <p className="font-serif text-xl italic text-yellow-700 sm:w-40 sm:shrink-0 sm:text-2xl">{event.date}</p>
                                <div className="mt-1 sm:mt-0 sm:flex-1">
                                    <h4 className="font-serif text-xl font-semibold text-rose-950 md:text-2xl">{event.title}</h4>
                                    <p className="mt-2 text-base text-yellow-950 md:text-lg">{event.text}</p>
                                    <SourceTag sourceKey={event.source} />
                                </div>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

export default function History() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
            <TraditionHeader
                back={{ href: "/", label: "Home" }}
                label="The past"
                title="History"
                intro="The story of the Aromanian people across the Balkans."
                image={HISTORY_HEADER_IMAGE}
                imageCredit={HISTORY_HEADER_CREDIT}
                imageStyle="object-cover opacity-30 sepia-50 blur-xs"
            />

            <main>
                <section aria-labelledby="who" className="mx-auto max-w-5xl px-5 pt-16">
                    <SectionHeading id="who">Who are the Aromanians?</SectionHeading>

                    <div className="mt-8 grid gap-10 lg:grid-cols-5">
                        <div className="flex flex-col gap-5 text-base text-yellow-950 md:text-lg lg:col-span-3">
                            <p>
                                The Aromanians are a Latin-speaking people of the southern Balkans. For centuries most of them were
                                shepherds, moving their flocks between mountain villages in summer and the plains in winter, or
                                merchants and craftsmen in the towns. At the start of the 20th century they were described as the last
                                large population of nomadic, Latin-speaking shepherds in south-eastern Europe.
                            </p>
                            <p>
                                The name <em>Vlachs</em> first appears in Byzantine documents around the year 1000. Because sheep
                                herding was their main work, in Balkan languages <em>vlach</em> came to mean simply
                                &ldquo;shepherd&rdquo;.
                            </p>
                            <SourceTag sourceKey="caranica" />

                            <div className="mt-4 rounded-sm border border-rose-950/20 border-l-4 border-l-gold bg-white p-6">
                                <h3 className="font-serif text-2xl font-semibold text-rose-950">Where the family comes from</h3>
                                <p className="mt-2 text-base text-yellow-950">
                                    Aromanians also name their own groups after the region their families came from.
                                </p>
                                <dl className="mt-5 grid gap-5 sm:grid-cols-2">
                                    {GROUPS.map((group) => (
                                        <div key={group.name}>
                                            <dt className="flex items-center gap-2 font-serif text-xl font-semibold text-rose-950">
                                                <span aria-hidden className="size-2 shrink-0 rotate-45 bg-gold" />
                                                {group.name}
                                            </dt>
                                            {group.also && <dd className="font-serif text-base italic text-yellow-700">{group.also}</dd>}
                                            <dd className="mt-1 text-sm text-yellow-950">{group.from}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <SourceTag sourceKey="marcu" />
                            </div>
                        </div>

                        <aside aria-labelledby="names" className="h-fit border-8 border-double border-yellow-600 bg-white p-6 lg:col-span-2">
                            <h3 id="names" className="font-serif text-2xl font-semibold text-rose-950">One people, many names</h3>
                            <Ornament stretch start className="mt-2" />
                            <dl className="mt-5 flex flex-col gap-4">
                                {NAMES.map((n) => (
                                    <div key={n.name}>
                                        <dt className="font-serif text-lg italic text-rose-950">{n.name}</dt>
                                        <dd className="text-sm text-yellow-950">{n.note}</dd>
                                    </div>
                                ))}
                            </dl>
                            <SourceTag sourceKey={["caranica", "diaconescu", "eminescu"]} />
                        </aside>
                    </div>

                    <div className="mt-16 grid gap-10 md:grid-cols-2">
                        <div>
                            <h3 className="font-serif text-2xl font-semibold text-rose-950 md:text-3xl">The language</h3>
                            <p className="mt-4 text-base text-yellow-950 md:text-lg">
                                Aromanian and Romanian share their grammar and much of their vocabulary, but the two have developed
                                apart for about a thousand years. Romanian borrowed many words from Slavic languages, Aromanian from
                                Greek. Aromanian often adds an <em>a-</em> at the start of words, and turned Latin <em>c</em> and{" "}
                                <em>g</em> into <em>&#539;</em> and <em>dz</em>.
                            </p>

                            <table className="mt-6 w-full border-collapse text-left">
                                <thead>
                                    <tr className="border-b-2 border-double border-yellow-600 font-serif text-base italic text-yellow-700">
                                        <th scope="col" className="py-2 font-normal">Romanian</th>
                                        <th scope="col" className="py-2 font-normal">Aromanian</th>
                                        <th scope="col" className="py-2 font-normal">English</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {WORDS.map((word) => (
                                        <tr key={word.english} className="border-b border-yellow-600/30">
                                            <td lang="ro" className="py-2 font-serif text-lg text-rose-950">{word.romanian}</td>
                                            <td lang="rup" className="py-2 font-serif text-lg font-semibold text-rose-950">{word.aromanian}</td>
                                            <td className="py-2 text-base text-yellow-950">{word.english}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <SourceTag sourceKey="caranica" />
                        </div>

                        <div className="flex flex-col gap-6">
                            <ul className="grid grid-cols-3 gap-3">
                                {LANGUAGE_FACTS.map((fact) => (
                                    <li key={fact.figure} className="flex flex-col items-center rounded-sm bg-rose-950 p-4 text-center">
                                        <span className="font-serif text-3xl font-semibold text-yellow-600 md:text-4xl">{fact.figure}</span>
                                        <span className="mt-1 text-xs text-orange-50 md:text-sm">{fact.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="rounded-sm border border-rose-950/20 border-l-4 border-l-gold bg-white p-6">
                                <h3 className="font-serif text-2xl font-semibold text-rose-950">Where did they come from?</h3>
                                <p className="mt-3 text-base text-yellow-950">
                                    Historians still disagree. Most historians see the Aromanians as descendants of the romanised
                                    people who already lived south of the Danube. Most Romanian linguists believe they came from north
                                    of the Danube and share a common origin with the Romanians. In Greece they are usually described
                                    as Latin-speaking Greeks. Each country where Aromanians live tends to favour its own version.
                                </p>
                                <SourceTag sourceKey="diaconescu" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h3 className="font-serif text-2xl font-semibold text-rose-950 md:text-3xl">Aromanians or Romanians?</h3>
                        <p className="mt-4 max-w-3xl text-base text-yellow-950 md:text-lg">
                            Aromanians in Romania themselves disagree on who they are. In 2005, community representatives asked for
                            the Aromanians to be registered as a national minority, which started a public debate. Two voices from it:
                        </p>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">
                            {VIEWS.map((view) => (
                                <figure key={view.person} className="flex flex-col rounded-sm border border-rose-950/20 bg-white p-6">
                                    <blockquote className="font-serif text-3xl italic leading-tight text-rose-950">
                                        <span aria-hidden className="text-gold">&ldquo;</span>{view.quote}<span aria-hidden className="text-gold">&rdquo;</span>
                                    </blockquote>
                                    <p className="mt-4 flex-1 text-base text-yellow-950">{view.text}</p>
                                    <figcaption className="mt-5 border-t border-yellow-600/40 pt-4">
                                        <span className="block font-serif text-lg font-semibold text-rose-950">{view.person}</span>
                                        <span className="block text-sm text-yellow-700">{view.role}</span>
                                        <SourceTag sourceKey={view.source} />
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 border-8 border-double border-yellow-600 bg-rose-950 px-6 py-10 sm:px-10">
                        <p className="text-center font-serif text-lg italic text-gold">Matilda Caragiu-Marioteanu</p>
                        <div className="mx-auto w-fit text-center">
                            <h3 className="font-serif text-3xl font-semibold text-yellow-600 md:text-4xl">The Aromanian Decalogue</h3>
                            <Ornament light stretch className="mt-3" />
                        </div>
                        <p className="mx-auto mt-6 max-w-2xl text-center text-base text-orange-50 md:text-lg">
                            Twelve &ldquo;historical and present-day truths&rdquo; about the Aromanians and their language, written
                            by the leading Aromanian linguist, herself of Aromanian origin.
                        </p>
                        <ol className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
                            {DECALOGUE.map((point, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="w-8 shrink-0 text-right font-serif text-2xl italic text-gold">{i + 1}</span>
                                    <span className="text-base text-orange-50">{point}</span>
                                </li>
                            ))}
                        </ol>
                        <div className="mt-8 text-center">
                            <a href="#source-djuvara" className="font-serif text-sm italic text-gold hover:text-orange-50 transition-colors">
                                Source: Djuvara (ed.), 1996
                            </a>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="timeline" className="mx-auto max-w-5xl px-5 pt-20">
                    <SectionHeading id="timeline">A short history</SectionHeading>
                    <Timeline />
                </section>

                <section aria-labelledby="where" className="mx-auto max-w-5xl px-5 pt-10">
                    <SectionHeading id="where">Where Aromanians live</SectionHeading>
                    <p className="mt-6 max-w-3xl text-base text-yellow-950 md:text-lg">
                        Aromanian communities are spread across five countries of the southern Balkans: mountain villages in
                        the Pindus and Gramos ranges, historic merchant towns, and the cities where many families moved in the
                        20th century.
                    </p>
                    <SourceTag sourceKey={["wiki-settlements", "farsharotu", "bluebird"]} />

                    <div className="mt-10 border-8 border-double border-yellow-600 bg-yellow-900 p-1.5 shadow-xl ring-1 ring-yellow-950">
                        <div className="h-120 overflow-hidden bg-orange-50">
                            <Map center={[23.2, 41.6]} zoom={5.2} theme="light">
                                <MapControls position="top-right" showZoom showFullscreen />

                                {PLACES.map((place) => (
                                    <MapMarker key={place.name} longitude={place.lng} latitude={place.lat}>
                                        <MarkerContent>
                                            <span
                                                aria-label={place.aromanian ? `${place.aromanian} (${place.name})` : place.name}
                                                className={`block size-3.5 rotate-45 border-2 border-white shadow-md transition-transform hover:scale-125 ${colourOf(place.country)}`}
                                            />
                                        </MarkerContent>
                                        <MarkerPopup className="p-0">
                                            <PlacePopup place={place} />
                                        </MarkerPopup>
                                    </MapMarker>
                                ))}
                            </Map>
                        </div>
                    </div>

                    <ul aria-label="Map key" className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-yellow-950">
                        {COUNTRIES.map((country) => (
                            <li key={country.name} className="flex items-center gap-2">
                                <span aria-hidden className={`size-3 rotate-45 border-2 border-white shadow ${country.colour}`} />
                                {country.name}
                            </li>
                        ))}
                    </ul>
                </section>

                <section aria-labelledby="by-country" className="mx-auto max-w-5xl px-5 py-16">
                    <SectionHeading id="by-country">Settlements by country</SectionHeading>

                    <div className="mt-12 flex flex-col gap-14">
                        {COUNTRIES.map((country) => {
                            const places = PLACES.filter((place) => place.country === country.name)
                            return (
                                <div key={country.name}>
                                    <h3 className="flex items-center gap-3 border-b-2 border-double border-yellow-600 pb-3 font-serif text-3xl font-semibold text-rose-950">
                                        {country.name}
                                        <span aria-hidden className={`size-3 rotate-45 ${country.colour}`} />
                                    </h3>
                                    <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                        {places.map((place) => (
                                            <li key={place.name} className="flex flex-col rounded-sm border border-rose-950/20 bg-white p-5">
                                                <span className="font-serif text-2xl font-semibold leading-tight text-rose-950">{place.aromanian ?? place.name}</span>
                                                {place.aromanian && <span className="font-serif text-base italic text-yellow-700">{place.name}</span>}
                                                <p className="mt-3 flex-1 text-base text-yellow-950">{place.text}</p>
                                                {place.didYouKnow && (
                                                    <p className="mt-4 border-l-2 border-gold pl-3 text-sm text-yellow-950">
                                                        <span className="font-serif italic text-rose-950">Did you know? </span>
                                                        {place.didYouKnow}
                                                    </p>
                                                )}
                                                {place.link && (
                                                    <Link href={place.link.href} className="group mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gold hover:text-rose-950 transition-colors">
                                                        {place.link.label}
                                                        <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-135 border-t-2 border-l-2 border-current transition-transform group-hover:translate-x-1" />
                                                    </Link>
                                                )}
                                                <div className="mt-4 border-t border-rose-950/15 pt-2">
                                                    <SourceTag sourceKey={place.sources} />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </section>

                <section aria-labelledby="sources" className="mx-auto max-w-5xl border-t border-yellow-600/30 px-5 py-16">
                    <SectionHeading id="sources">Sources</SectionHeading>
                    <ul className="mt-6 flex flex-col gap-3 text-base text-yellow-950">
                        {SOURCES.map((source) => (
                            <li key={source.label} id={source.key && `source-${source.key}`} className="scroll-mt-6 target:font-semibold">
                                {source.url ? (
                                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline decoration-yellow-600 hover:text-rose-950 hover:decoration-rose-950 transition-colors">
                                        {source.label}
                                    </a>
                                ) : source.label}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            <BackToTop />
        </div>
    )
}
