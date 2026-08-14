import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-orange-50 font-sans">
      <header className="relative w-full bg-rose-950 text-orange-50">
    
        <video autoPlay muted loop className="w-full h-[700px] object-cover border-0 overlay-black">
          <source src="/head_video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/80 to-transparent" />

        <div className="absolute z-20 inset-0 flex flex-col items-center justify-start pt-5 gap-2 text-center">
          <h1 className="text-4xl font-bold text-yellow-600">Napoi la Fara Mea</h1>
          <h2 className="text-2xl font-bold text-orange-50">Journey Back To Aromanian Heritage</h2>
        </div>

        <div className="absolute inset-0 z-20 flex flex-row justify-between items-end h-full p-8">
          <h2 className="mt-2 text-xl">Come along on a journey that will take you through decades of <span className="font-bold text-yellow-600">history...</span></h2>
          <Link href="https://www.youtube.com/watch?v=WL_WINNT6hE" className="text-sm text-lime-600 hover:text-lime-400 transition-colors duration-300">
            Video source
          </Link>
        </div>
      </header>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-orange-50 sm:items-start">
       
      </main>
    </div>
  );
}
