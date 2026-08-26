import Link from "next/link"

export default function Alphabet(){
    return(
        <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-orange-50 font-sans">
            <header>
                <div className="flex flex-col items-center justify-start pt-5 gap-2 text-center">
                    <h1 className="text-base font-bold text-yellow-600 md:text-4xl sm:text-2xl">The Aromainian Alphabet</h1>
                </div>
            </header>

            <main className="w-full max-w-3xl p-5 py-8">

                <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                    The Aromanian alphabet is a variant of the Latin script, but it hasn't always been written that way. <cite index="15-1">The earliest known Aromanian writing dates back to manuscripts from the 9th century, and for much of its history the language was written using Greek and Cyrillic scripts</cite> before shifting toward Latin-based systems. <cite index="18-1"></cite>
                </p>

                <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                    <cite index="18-1">The first true Aromanian writing system using the Latin alphabet was introduced in the early 19th century by grammarian Mihail G. Boiagi, who relied on digraphs like "sh" and "nj" instead of diacritical marks to represent sounds the Latin alphabet couldn't capture on its own.</cite>
                </p>

                <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                   Because a standard spelling system didn't exist for most of Aromanian's written history, <cite index="17-1">different writers represented the same distinctive Aromanian sounds like the "dh," "gh," and "th", borrowed from Greek, in inconsistent ways for decades.</cite>
                </p>

                <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                   That finally changed in the late 20th century: <cite index="14-1">the alphabet used today was proposed in 1997 at the Symposium for Standardisation of the Aromanian Writing System in Bitola, North Macedonia, revised in 1999, and has since been adopted by most Aromanian writers across North Macedonia, Serbia, Albania, Bulgaria, and Romania.</cite>
                </p>

                <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                   
                </p>

                <p className="m-2 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                    Sources: 
                </p>

                <ul className="pb-10">
                    <li>
                        <Link href="https://en.wikipedia.org/wiki/Aromanian_alphabet">
                           <p className="text-yellow-950 text-sm m-2 md:text-lg sm:m-3 text-base">
                                Wikipedia: Aromanian Alphabet
                           </p>
                        </Link>
                    </li>

                    <li>
                        <Link href="https://en.wikipedia.org/wiki/Mihail_G._Boiagi">
                            <p className="text-yellow-950 text-sm m-2 md:text-lg sm:m-3 text-base">
                                Wikipedia: Mihail G. Boiagi
                            </p>
                        </Link>
                    </li>

                    <li>
                        <Link href="https://farsharotu.org/on-the-standardization-of-the-aromanian-system-of-writing/">
                            <p className="text-yellow-950 text-sm m-2 md:text-lg sm:m-3 text-base">
                                Aromanian Cultural Society Farsharotu: On the Standardization of the Aromanian System of Writing
                            </p>
                        </Link>
                    </li>
                </ul>

                <div>
                    <h3 className="m-2 pb-5 text-yellow-600 font-bold text-lg sm:m-3 text-xl md:pb-10 text-2xl">
                        Useful links:
                    </h3>

                    <Link href="https://www.omniglot.com/writing/aromanian.htm" className="m-2 text-base font-bold text-rose-950 md:text-xl sm: m-3 text-lg">
                        Omniglot: Aromanian
                    </Link>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        An overview of the Aromanian alphabet and pronunciation system. It also works as a hub, linking out to several of the dictionaries, aromanian music videos and natives speaking the language.
                    </p>
                </div>

            </main>
        </div>
    )
}