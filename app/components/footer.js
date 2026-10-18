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
                <Link href="/about" className="group relative m-2 py-1 text-sm text-orange-50 transition-colors hover:text-gold sm:m-3 md:text-base">
                    About developer
                    <span aria-hidden className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 rounded-full bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
            </div>
        </footer>
    )
}