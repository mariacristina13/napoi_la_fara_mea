// Faded background pictures for the page banners (the same pictures as the Discover section on the home page).
// All are public domain, from Wikimedia Commons. Each has a credit, shown in the corner of the banner by HeaderImageCredit.

// A page of the Codex Dimonie, an 18th-century Aromanian manuscript. Used on "Learn Aromanian" and its pages.
export const LEARN_HEADER_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Codex_Dimonie.jpg"
export const LEARN_HEADER_CREDIT = { label: "Codex Dimonie, 18th century", page: "https://commons.wikimedia.org/wiki/File:Codex_Dimonie.jpg" }

// Aromanians in traditional costume in Greek Macedonia, 1940s. Used on "Traditions" and its pages.
export const TRADITIONS_HEADER_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/e/e6/Vlasi_vo_Egejska_Makedonija.jpg"
export const TRADITIONS_HEADER_CREDIT = { label: "Aromanians in Greek Macedonia, 1940s, unknown author", page: "https://commons.wikimedia.org/wiki/File:Vlasi_vo_Egejska_Makedonija.jpg" }
// This photo is dark, so it needs to be stronger than the light manuscript page to show through the red banner.
export const TRADITIONS_HEADER_IMAGE_STYLE = "object-cover opacity-45 sepia-50 blur-xs"

// Milton Manaki filming with his Bioscope camera near Bitola. Used on "Notable Aromanians".
export const PERSONALITIES_HEADER_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/5/5a/Milton_Manaki_filming.png"
export const PERSONALITIES_HEADER_CREDIT = { label: "Milton Manaki filming, the Manaki brothers", page: "https://commons.wikimedia.org/wiki/File:Milton_Manaki_filming.png" }

// Moscopole (Voskopojë) in 1742, after an engraving. Used on "History".
export const HISTORY_HEADER_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/7/78/Voskopoja_ne_vitin_1742.jpg"
export const HISTORY_HEADER_CREDIT = { label: "Moscopole in 1742, engraving", page: "https://commons.wikimedia.org/wiki/File:Voskopoja_ne_vitin_1742.jpg" }

// The picture credit in the bottom corner of a banner. The banner must be `relative`.
export function HeaderImageCredit({ credit }) {
    return (
        <a
            href={credit.page}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-5 bottom-3 left-5 text-right font-serif text-xs italic text-orange-50/60 hover:text-gold transition-colors"
        >
            Picture: {credit.label}. Public domain, via Wikimedia Commons
        </a>
    )
}
