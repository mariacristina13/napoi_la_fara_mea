import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="bg-rose-950 text-white p-4">
            <div className="flex flex-col items-center">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={200}
                    height={50}
                />
                <p className="text-sm p-4">&copy; 2026 Nãpoi la Fara Mea. All rights reserved.</p>
                <Link href="/about">About developer</Link>
            </div>
        </footer>
    )
}