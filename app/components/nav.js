import Link from "next/link"
import Image from "next/image"
export default function Navigation(){
    return(
        <nav className="bg-rose-950">
            {/*Add links to the home, genra and log in pages.*/}
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
                        <li>
                            <Link href="/learn" className="btn hover:bg-yellow-600 p-4 border border-rose-950 rounded-xl">Learn Aromanian</Link>
                        </li>

                        <li>
                            <Link href="/traditions" className="btn hover:bg-yellow-600 p-4 border border-rose-950 rounded-xl">Traditions</Link>
                        </li>

                        {/*<li>
                            <Link href="/events" className="btn hover:bg-yellow-600 p-4 border border-rose-950 rounded-xl">Events</Link>
                        </li>*/}

                        <li>
                            <Link href="/history" className="btn hover:bg-yellow-600 p-4 border border-rose-950 rounded-xl">History</Link>
                        </li>
                    </div>
                        
                </div>
            </ul>
        </nav>
    )
}