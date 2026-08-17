"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <nav className="bg-rose-950">
            <ul className="">
                <div className="flex flex-row justify-between items-center">
                    <li>
                        {/*Add image for the logo.*/}
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={150}
                                height={34}
                            />
                        </Link>
                    </li>

                    <div className="flex flex-row gap-5 p-4">
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
            </ul>
        </nav>
    )
}