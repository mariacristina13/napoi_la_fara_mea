"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <nav className="bg-rose-950">
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
                        <span className={`block w-6 h-0.5 bg-orange-50 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-orange-50 transition-opacity ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-orange-50 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>

                    <div className="hidden md:flex flex-row gap-5 p-4">
                        <li className="flex flex-wrap gap-4">
                            <Link href="/learn" className="btn hover:bg-yellow-600 p-4 border border-rose-950 rounded-xl">
                                <p className="text-sm sm:text-sm">Learn Aromanian</p>
                            </Link>
                        </li>

                        <li className="flex flex-wrap gap-4">
                            <Link href="/traditions" className="btn hover:bg-yellow-600 border p-5 border-rose-950 rounded-xl">
                            <p className="sm:text-sm">Traditions</p>
                            </Link>
                        </li>

                        {/*<li>
                            <Link href="/events" className="btn hover:bg-yellow-600 p-4 border border-rose-950 rounded-xl">Events</Link>
                        </li>*/}

                        <li className="flex flex-wrap gap-4">
                            <Link href="/history" className="btn hover:bg-yellow-600 p-4 border border-rose-950 rounded-xl">
                                <p className="text-sm sm:text-sm">History</p>
                            </Link>
                        </li>
                    </div>
                </div>

                {/*Craete the mobile dropdown.*/}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60" : "max-h-0"}`}>
                    <div className="flex flex-col items-center gap-3 px-4 pb-4">
                        <li>
                            <Link href="/learn" onClick={() => setIsOpen(false)} className="btn hover:bg-yellow-600 p-2 border border-rose-950 rounded-xl block">
                                <p className="text-xs">Learn Aromanian</p>
                            </Link>
                        </li>

                        <li>
                            <Link href="/traditions" onClick={() => setIsOpen(false)} className="btn hover:bg-yellow-600 border p-2 border-rose-950 rounded-xl block">
                                <p className="text-xs">Traditions</p>
                            </Link>
                        </li>

                        <li>
                            <Link href="/history" onClick={() => setIsOpen(false)} className="btn hover:bg-yellow-600 p-2 border border-rose-950 rounded-xl block">
                                <p className="text-xs">History</p>
                            </Link>
                        </li>
                    </div>
                </div>
            </ul>
        </nav>
    )
}