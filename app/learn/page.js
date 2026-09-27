'use client'

import Image from "next/image"
import Link from "next/link"

export default function Learn() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-orange-50 font-sans">
            <header>
                <div className="flex flex-col items-center justify-start pt-5 gap-2 text-center">
                    <h1 className="text-base font-bold text-yellow-600 md:text-3xl sm:text-2xl">Learn Aromainian</h1>
                    <h2 className="text-sm font-bold text-rose-950 md:text-xl sm:text-base">A collection of resources, dictionaries, quizes and practice sheets</h2>
                </div>
            </header>
            
            <main className="w-full max-w-3xl p-5 py-8">
                <div>
                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        History of the Aromanian Language
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Aromanian is an Eastern Romance language that developed from Common Romanian, alongside Romanian, Istro-Romanian, and Megleno-Romanian. By the 10th century, Common Romanian had divided into northern and southern varieties, after which Aromanian and Romanian developed separately.
                    
                        <cite className="text-sm block italic text-yellow-600">Wikipedia, Aromanian Language</cite>                    
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Aromanian has been strongly influenced by the languages it came into contact with, particularly Greek, which contributed many words and even some grammatical features. It also contains Turkish vocabulary as a result of the Ottoman presence in the Balkans, while more recently Romanian has influenced Aromanian through increased contact and the availability of Romanian material online. Despite these influences, Aromanian remains primarily a Romance language.

                        <cite className="text-sm block italic text-yellow-600">Wikipedia, Aromanian Language</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Its written history is relatively recent, with the oldest known written text dating to 1731, an inscription by Nektarios Terpos at Ardenica Monastery in present-day Albania.
                        
                        <cite className="text-sm block italic text-yellow-600">Wikipedia, Aromanian Language</cite>
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        Why it matters...
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The language is spoken by an aging population, with fewer young people learning it at home, and no single country where it holds full official status. <cite index="7-1">UNESCO's 2010 Atlas of the World's Languages in Danger classifies it as highly endangered.</cite> Which represents a real risk of the language disappearing within a generation or two.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 items-center sm:grid-cols-2 md:grid-cols-3">
                    <div className="pl-10 max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
                        <Image
                            src="/learn.jpg"
                            alt="Learn aromanian"
                            width={500}
                            height={500}
                            className="w-auto h-auto m-auto md:w-[500px] h-[500px]"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                        />
                        <Link href="/alphabet" className="text-rose-950">
                            <p className="bg-yellow-500 text-center text-xs rounded-sm md:text-base sm:text-sm">Alphabet</p>
                        </Link>
                    </div>

                    <div className="pl-10 max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
                        <Image
                            src="/learn.jpg"
                            alt="Learn aromanian"
                            width={500}
                            height={500}
                            className="w-auto h-auto m-auto md:w-[500px] h-[500px]"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                        />
                        <Link href="/dictionaries" className="text-rose-950">
                            <p className="bg-yellow-500 text-center text-xs rounded-sm md:text-base sm:text-sm">Dictionaries & Translations</p>
                        </Link>
                    </div>

                    <div className="pl-10 max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
                        <Image
                            src="/learn.jpg"
                            alt="Learn aromanian"
                            width={500}
                            height={500}
                            className="w-auto h-auto m-auto md:w-[500px] h-[500px]"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                        />
                        <Link href="/quizzes" className="text-rose-950">
                            <p className="bg-yellow-500 text-center text-xs rounded-sm md:text-base sm:text-sm">Quizes & Practice</p>
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    )
}