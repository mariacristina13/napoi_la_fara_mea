"use client"
import Link from "next/link"
import { Map, MapControls, MapMarker, MarkerContent, MarkerPopup } from "@/app/components/ui/map"
import { TraditionHeader } from "../components/traditionPage"
import { SectionHeading } from "../components/learnPage"
import { Ornament } from "../components/ornament"

// Moscopole (Voskopojë) in 1742, after an engraving. Public domain, via Wikimedia Commons.
const HISTORY_HEADER_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/7/78/Voskopoja_ne_vitin_1742.jpg"

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
// `didYouKnow` and `link` connect the place to other pages on this site.
const PLACES = [
    // Greece
    {
        name: "Metsovo", aromanian: "Aminciu", country: "Greece", lng: 21.1839, lat: 39.7703,
        text: "The largest and most vibrant year-round Aromanian town, in the Pindus mountains.",
        didYouKnow: "The great benefactors George Averoff and Michael Tositsas were both born here.",
        link: { href: "/personalities", label: "See George Averoff in the Portrait Gallery" },
    },
    {
        name: "Samarina", country: "Greece", lng: 21.0667, lat: 40.1,
        text: "One of the highest villages in Greece, famous for its major annual Aromanian festival.",
        didYouKnow: "It is a classic summer village of the Pindus shepherds, described by Wace and Thompson in The Nomads of the Balkans (1914).",
    },
    {
        name: "Nymfaio", aromanian: "Nevesca", country: "Greece", lng: 21.5, lat: 40.65,
        text: "A historically prosperous merchant town established by Aromanian traders.",
    },
    {
        name: "Avdella", country: "Greece", lng: 21.1333, lat: 40.0167,
        text: "One of the major traditional highland Vlach settlements in the Pindus range.",
        didYouKnow: "The Manaki brothers, pioneers of Balkan photography and film, were born here.",
        link: { href: "/personalities", label: "See the Manaki brothers in the Portrait Gallery" },
    },
    {
        name: "Perivoli", country: "Greece", lng: 21.1167, lat: 39.9833,
        text: "One of the major traditional highland Vlach settlements in the Pindus range.",
    },
    {
        name: "Larissa", country: "Greece", lng: 22.4167, lat: 39.6417,
        text: "A major urban hub in Thessaly, where significant numbers of largely assimilated Aromanians live.",
    },
    {
        name: "Volos", country: "Greece", lng: 22.9333, lat: 39.3667,
        text: "A major urban hub in Thessaly, where significant numbers of largely assimilated Aromanians live.",
    },
    {
        name: "Veria", country: "Greece", lng: 22.2, lat: 40.5167,
        text: "A town in Greek Macedonia with an Aromanian community.",
        didYouKnow: "The engineer and aircraft designer Elie Carafoli, a pioneer of aerodynamics, was born here.",
        link: { href: "/personalities", label: "See Elie Carafoli in the Portrait Gallery" },
    },

    // Albania
    {
        name: "Voskopojë", aromanian: "Moscopole", country: "Albania", lng: 20.5903, lat: 40.6333,
        text: "The most famous historic Aromanian cultural, economic and printing centre, destroyed in the 18th century.",
        didYouKnow: "Its printing press and New Academy made it a centre of learning; the scholar Theodore Kavalliotis taught there.",
    },
    {
        name: "Fier", country: "Albania", lng: 19.5572, lat: 40.725,
        text: "Has a distinct Aromanian quarter, historically known as Ferãcã.",
    },
    {
        name: "Korçë", aromanian: "Curceau", country: "Albania", lng: 20.7667, lat: 40.6167,
        text: "A significant south-eastern centre with a large historic and modern Aromanian population.",
    },
    {
        name: "Grabovë e Sipërme", aromanian: "Grabova", country: "Albania", lng: 20.4086, lat: 40.7953,
        text: "An isolated, historic highland settlement in the Gramos mountains.",
        didYouKnow: "The family of Patriarch Cyril of Bulgaria came from Grabova and Moscopole.",
        link: { href: "/personalities", label: "See Patriarch Cyril in the Portrait Gallery" },
    },
    {
        name: "Tirana", country: "Albania", lng: 19.8181, lat: 41.3283,
        text: "A modern city with a substantial Aromanian community, the result of 20th-century migrations.",
    },
    {
        name: "Elbasan", country: "Albania", lng: 20.0806, lat: 41.1111,
        text: "A modern city with a substantial Aromanian community, the result of 20th-century migrations.",
    },

    // North Macedonia
    {
        name: "Kruševo", aromanian: "Crușova", country: "North Macedonia", lng: 21.2483, lat: 41.37,
        text: "The political and cultural centre of the Aromanians in North Macedonia, where Aromanian is a co-official language.",
        didYouKnow: "In 1903 it was at the heart of the Ilinden Uprising. The painter Nikola Martin was born here, and the singer Toše Proeski grew up here.",
        link: { href: "/personalities", label: "Read about Nikola Martin and Toše Proeski" },
    },
    {
        name: "Bitola", aromanian: "Monastir", country: "North Macedonia", lng: 21.3347, lat: 41.0319,
        text: "A historic diplomatic city with a prominent, long-standing Aromanian community.",
        didYouKnow: "The Manaki brothers had their photography studio here, and a Romanian high school taught Aromanian pupils.",
        link: { href: "/personalities", label: "See the Manaki brothers in the Portrait Gallery" },
    },
    {
        name: "Štip", country: "North Macedonia", lng: 22.1936, lat: 41.7375,
        text: "Home to a significant share of the country's recognised Aromanian minority.",
    },
    {
        name: "Skopje", country: "North Macedonia", lng: 21.4317, lat: 41.9961,
        text: "The capital, home to a significant share of the country's recognised Aromanian minority.",
    },

    // Romania
    {
        name: "Constanța", country: "Romania", lng: 28.6333, lat: 44.1667,
        text: "This port city in Dobruja and the area around it became the main destination for thousands of Aromanians who left the southern Balkans in the early 20th century.",
        didYouKnow: "The tennis player Simona Halep, was born here.",
        link: { href: "/personalities", label: "See Simona Halep in the Portrait Gallery" },
    },

    {
        name: "Bucharest", aromanian: "Bucureshti", country: "Romania", lng: 26.1025, lat: 44.4325,
        text: "The Romanian capital, where many Aromanians have moved over the years, from merchants and students in the 19th century to families from Dobruja and the Balkans in the 20th.",
        didYouKnow: "The Macedo-Romanian Cultural Society, founded here in 1879, still has its headquarters in Bucharest. It started most of the early Aromanian newspapers.",
    },

    // Bulgaria
    {
        name: "Peshtera", country: "Bulgaria", lng: 24.3, lat: 42.0333,
        text: "A town in the western Rhodope mountains, where descendants of Aromanian migrants from the Gramos mountains settled.",
    },
    {
        name: "Rakitovo", country: "Bulgaria", lng: 24.0833, lat: 41.9833,
        text: "A town in the western Rhodope mountains, where descendants of Aromanian migrants from the Gramos mountains settled.",
    },
]

const SOURCES = [
    { label: "Aromanian Cultural Society Farsharotu, “Touring the Vlach villages of Greece”", url: "https://farsharotu.org/touring-the-vlach-villages-of-greece/" },
    { label: "Bluebird Maps, “Vlach or Aromanian settlements in south-east Europe”, 2017", url: "https://bluebirdmaps.com/2017/07/09/vlach-or-aromanian-settlements-in-south-east-europe/" },
    { label: "Wikipedia, “List of Aromanian settlements”", url: "https://en.wikipedia.org/wiki/List_of_Aromanian_settlements" },
    { label: "Wikipedia, “Aromanians”", url: "https://en.wikipedia.org/wiki/Aromanians" },
    { label: "Wikipedia, “Aromanians in Albania”", url: "https://en.wikipedia.org/wiki/Aromanians_in_Albania" },
    { label: "Wikipedia, “Aromanians in North Macedonia”", url: "https://en.wikipedia.org/wiki/Aromanians_in_North_Macedonia" },
    { label: "Wikipedia, “Macedo-Romanian Cultural Society”", url: "https://en.wikipedia.org/wiki/Macedo-Romanian_Cultural_Society" },
    { label: "Columbia University, “Aromanians”", url: "http://www.columbia.edu/cu/romanian/articles/aromani.html" },
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

export default function History() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
            <TraditionHeader
                back={{ href: "/", label: "Home" }}
                label="The past"
                title="History"
                intro="The story of the Aromanian people across the Balkans."
                image={HISTORY_HEADER_IMAGE}
                imageStyle="object-cover opacity-30 sepia-50 blur-xs"
            />

            <main>
                <section aria-labelledby="where" className="mx-auto max-w-5xl px-5 pt-16">
                    <SectionHeading id="where">Where Aromanians live</SectionHeading>
                    <p className="mt-6 max-w-3xl text-base text-yellow-950 md:text-lg">
                        Aromanian communities are spread across five countries of the southern Balkans: mountain villages in
                        the Pindus and Gramos ranges, historic merchant towns, and the cities where many families moved in the
                        20th century.
                    </p>

                    <p className="mt-6 max-w-3xl text-base text-yellow-950 md:text-lg">
                        Click a marker and zoom in to find out more about each place.
                    </p>

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
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline decoration-yellow-600 hover:text-rose-950 hover:decoration-rose-950 transition-colors">
                                    {source.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mx-auto mt-12 w-fit text-center">
                        <p className="font-serif text-xl italic text-yellow-700">More of the Aromanians&apos; history is coming soon.</p>
                        <Ornament stretch className="mt-3" />
                    </div>
                </section>
            </main>
        </div>
    )
}
