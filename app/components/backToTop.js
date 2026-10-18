"use client"
import { useEffect, useState } from "react"

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Only show the button once the page has been scrolled down a bit.
    useEffect(() => {
        const onScroll = () => setIsVisible(window.scrollY > 400);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-rose-950 shadow-lg hover:bg-yellow-500 transition-all duration-300 ${isVisible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        >
            <span aria-hidden className="mt-1 h-3 w-3 rotate-45 rounded-tl-xs border-t-3 border-l-3 border-current" />
        </button>
    )
}
