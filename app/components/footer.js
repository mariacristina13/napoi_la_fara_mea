import Image from "next/image";
import Link from "next/link";
import { Ornament, EmbroideryBand } from "./ornament";

const LINKS = [
    { href: "/learn", label: "Learn Aromanian" },
    { href: "/traditions", label: "Traditions" },
    { href: "/history", label: "History" },
    { href: "/about", label: "About developer" },
]

export default function Footer(){
    return(
        <footer className="bg-rose-950 text-orange-50">
            <EmbroideryBand />

            <div className="flex flex-col items-center px-4 pt-10 pb-8 text-center">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={200}
                    height={50}
                    className="w-24 h-auto sm:w-32 md:w-[200px]"
                />
                <p className="mt-3 font-serif text-lg italic text-gold md:text-xl">Journey back to Aromanian heritage</p>
                <Ornament light className="mt-4" />

                <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                    {LINKS.map((link, i) => (
                        <li key={link.href} className="flex items-center gap-5">
                            {i > 0 && <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold" />}
                            <Link href={link.href} className="group relative py-1 font-serif text-base text-orange-50 transition-colors hover:text-gold md:text-lg">
                                {link.label}
                                <span aria-hidden className="absolute -bottom-0.5 left-0 h-px w-full origin-center scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li>
                    ))}
                </ul>

                <p className="mt-8 border-t border-gold/30 pt-6 text-xs text-orange-50/70 md:text-sm">&copy; 2026 Nãpoi la Fara Mea. All rights reserved.</p>
            </div>
        </footer>
    )
}
