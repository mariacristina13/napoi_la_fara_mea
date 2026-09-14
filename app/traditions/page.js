import Link from "next/link"
import Image from "next/image"

export default function Traditions() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-orange-50 font-sans">
            <header className="relative w-full bg-rose-950 text-orange-50">
                <Image
                    src="/learn.jpg"
                    alt="Learn aromanian"
                    width={500}
                    height={500}
                    className="w-auto h-auto m-auto md:w-[500px] h-[500px]"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                />

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/80 to-transparent" />

                <div className="absolute z-20 inset-0 flex items-end justify-start p-5 gap-2">
                    <h1 className="text-base font-bold text-yellow-600 md:text-4xl sm:text-2xl">Traditions of the Aromanian People</h1>
                </div>
            </header>

            <main className="w-full max-w-3xl p-5 py-8">
                <div>
                    
                </div>

                <div className="grid grid-cols-1 gap-5 items-center sm:grid-cols-2 md:grid-cols-3">

                    <div className="max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
                        <Image
                            src="/learn.jpg"
                            alt="Learn aromanian"
                            width={500}
                            height={500}
                            className="w-auto h-auto m-auto md:w-[500px] h-[px]"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                        />
                        <Link href="/birth" className="text-rose-950">
                            <p className="bg-yellow-500 text-center text-xs rounded-sm md:text-base sm:text-sm">Birth</p>
                        </Link>
                    </div>

                    <div className="max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
                        <Image
                            src="/learn.jpg"
                            alt="Learn aromanian"
                            width={500}
                            height={500}
                            className="w-auto h-auto m-auto md:w-500 h-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                        />
                        <Link href="/wedding" className="text-rose-950">
                            <p className="bg-yellow-500 text-center text-xs rounded-sm md:text-base sm:text-sm">Wedding</p>
                        </Link>
                    </div>

                    <div className="max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
                        <Image
                            src="/learn.jpg"
                            alt="Learn aromanian"
                            width={500}
                            height={500}
                            className="w-auto h-auto m-auto md:w-500 h-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                        />
                        <Link href="/death" className="text-rose-950">
                            <p className="bg-yellow-500 text-center text-xs rounded-sm md:text-base sm:text-sm">Death</p>
                        </Link>
                    </div>

                    <div className="max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
                        <Image
                            src="/learn.jpg"
                            alt="Learn aromanian"
                            width={500}
                            height={500}
                            className="w-auto h-auto m-auto md:w-500 h-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                        />
                        <Link href="/food" className="text-rose-950">
                            <p className="bg-yellow-500 text-center text-xs rounded-sm md:text-base sm:text-sm">Food</p>
                        </Link>
                    </div>

                    <div className="max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
                        <Image
                            src="/learn.jpg"
                            alt="Learn aromanian"
                            width={500}
                            height={500}
                            className="w-auto h-auto m-auto md:w-500 h-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                        />
                        <Link href="/costumes" className="text-rose-950">
                            <p className="bg-yellow-500 text-center text-xs rounded-sm md:text-base sm:text-sm">Costumes</p>
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    )
}