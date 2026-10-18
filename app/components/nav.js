"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

// `pages` lists every page that belongs to a link, so it stays highlighted on its sub-pages too.
const LINKS = [
    { href: "/learn", label: "Learn Aromanian", pages: ["/learn", "/alphabet", "/dictionaries", "/quizzes"] },
    { href: "/traditions", label: "Traditions", pages: ["/traditions", "/birth", "/wedding", "/death", "/food"] },
    { href: "/history", label: "History", pages: ["/history"] },
]

// Text turns gold and a gold underline grows from the centre on hover; the current page keeps its underline.
function NavLink({ href, label, isActive, onClick }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            aria-current={isActive ? "page" : undefined}
            className={`group relative block py-1 font-serif text-lg transition-colors hover:text-gold ${isActive ? "text-gold" : "text-orange-50"}`}
        >
            {label}
            <span aria-hidden className={`absolute -bottom-0.5 left-0 h-px w-full origin-center bg-gold transition-transform duration-300 group-hover:scale-x-100 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
        </Link>
    )
}

export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    
    return(
        <nav className="border-b-4 border-double border-gold/60 bg-rose-950 px-2 sm:px-4">
            <ul>
                <div className="flex flex-row justify-between items-center">
                    <li>
                        {/*Add image for the logo.*/}
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={150}
                                height={34}
                                className="w-24 h-auto sm:w-32 md:w-[150px]"
                            />
                        </Link>
                    </li>

                    {/*Craete a humburger navigation for the phone screen.*/}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-gold transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-gold transition-opacity ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-gold transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>

                    <div className="hidden md:flex flex-row items-center gap-5 px-4 py-4">
                        {LINKS.map((link, i) => (
                            <li key={link.href} className="flex items-center gap-5">
                                {i > 0 && <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold" />}
                                <NavLink href={link.href} label={link.label} isActive={link.pages.includes(pathname)} />
                            </li>
                        ))}
                    </div>
                </div>

                {/*Craete the mobile dropdown.*/}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60" : "max-h-0"}`}>
                    <div className="flex flex-col items-center gap-3 border-t border-gold/30 px-4 py-4">
                        {LINKS.map((link) => (
                            <li key={link.href}>
                                <NavLink href={link.href} label={link.label} isActive={link.pages.includes(pathname)} onClick={() => setIsOpen(false)} />
                            </li>
                        ))}
                    </div>
                </div>
            </ul>
        </nav>
    )
}