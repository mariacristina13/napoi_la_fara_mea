// Decorative pieces inspired by the diamond motifs of Aromanian embroidery.

// A small divider: two lines with diamonds in the middle. Use `light` on dark backgrounds,
// `start` to line it up with left-aligned text, and `stretch` to make the lines fill the available width.
export function Ornament({ light = false, start = false, stretch = false, className = "" }) {
    const line = `h-px bg-gold ${stretch ? "flex-1" : "w-16 sm:w-24"}`

    return (
        <div aria-hidden className={`flex items-center gap-3 ${start ? "justify-start" : "justify-center"} ${className}`}>
            <span className={line} />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className={`flex h-3 w-3 rotate-45 items-center justify-center border ${light ? "border-orange-50" : "border-rose-950"}`}>
                <span className={`h-1 w-1 ${light ? "bg-orange-50" : "bg-rose-950"}`} />
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className={line} />
        </div>
    )
}

// A full-width band of diamonds, like the embroidered border of a traditional costume.
export function EmbroideryBand() {
    return (
        <div aria-hidden className="flex h-7 w-full items-center justify-center gap-2.5 overflow-hidden border-y-2 border-gold bg-rose-950">
            {Array.from({ length: 80 }, (_, i) => (
                <span key={i} className={`h-2.5 w-2.5 shrink-0 rotate-45 ${i % 2 === 0 ? "bg-gold" : "border border-orange-50"}`} />
            ))}
        </div>
    )
}
