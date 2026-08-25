'use client'

import Image from "next/image"
import Link from "next/link"

export default function Learn() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-orange-50 font-sans">
            <div className="grid grid-cols-1 gap-5 items-center sm:grid-cols-2 md:grid-cols-3">

                <div className="pl-10 max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
                    <Image
                        src="/learn.jpg"
                        alt="Learn aromanian"
                        width={500}
                        height={500}
                        className="w-auto h-auto m-auto md:w-[500px] h-[px]"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                    />
                    <Link href="/learn" className="text-rose-950">
                        <p className="bg-yellow-500 text-center text-base rounded-sm md:text-xl sm:text-lg">Learn aromanian</p>
                    </Link>
                </div>

                <div className="pl-10 max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
                    <Image
                        src="/learn.jpg"
                        alt="Learn aromanian"
                        width={500}
                        height={500}
                        className="w-auto h-auto m-auto md:w-500 h-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                    />
                    <Link href="/history" className="text-rose-950">
                        <p className="bg-yellow-500 text-center text-base rounded-sm md:text-xl sm:text-lg">History</p>
                    </Link>
                </div>

                <div className="pl-10 max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
                    <Image
                        src="/learn.jpg"
                        alt="Learn aromanian"
                        width={500}
                        height={500}
                        className="w-auto h-auto m-auto md:w-500 h-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                    />
                    <Link href="/traditions" className="text-rose-950">
                        <p className="bg-yellow-500 text-center text-base rounded-sm md:text-xl sm:text-lg">Traditions</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}