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
                    className="w-24 h-auto sm:w-32 md:w-[200px]"
                />
                <p  className="text-orange-50 text-xs m-2 md:text-base sm:m-3 text-sm">&copy; 2026 Nãpoi la Fara Mea. All rights reserved.</p>
                <Link href="/about" className="hover:border-dashed hover:border-2 hover:border-yellow-600 p-3 rounded-xl text-orange-50 text-xs m-2 md:text-base sm:m-3 text-sm">About developer</Link>
            </div>
        </footer>
    )
}