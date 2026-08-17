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
          <h1 className="text-base font-bold text-yellow-600 md:text-4xl sm:text-2xl">Napoi la Fara Mea</h1>
          <h2 className="text-sm font-bold text-orange-50 md:text-2xl sm:text-base">Journey Back To Aromanian Heritage</h2>
        </div>

        <div className="absolute inset-0 z-20 flex flex-row justify-between items-end h-full p-8">
          <h2 className="mt-2 text-xl md:text-base sm:text-xs">Come along on a journey that will take you through decades of <span className="font-bold text-yellow-600">history...</span></h2>
          <Link href="https://www.youtube.com/watch?v=WL_WINNT6hE" className="text-xs text-lime-600 hover:text-lime-400 transition-colors duration-300 md:text-sm">
            Video source
          </Link>
        </div>
      </header>
      
      <main className="w-full max-w-3xl py-32 bg-orange-50">
        <h2 className="text-rose-950 text-center mb-10 text-3xl md:text-5xl">Discover</h2>
        <div className="grid grid-cols-1 gap-5 items-center sm:grid-cols-2 md:grid-cols-3">
          
          <div className="pl-10 max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
            <Image 
            src="/learn.jpg"
            alt= "Learn aromanian"
            width={500}
            height={500} 
            className="w-auto h-auto m-auto md:w-500 h-500"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
            />
            <Link href= "/learn" className="text-rose-950">
              <p className="bg-yellow-500 text-center text-base rounded-lg md:text-xl sm:text-lg">Learn aromanian</p>
            </Link>
          </div>

          <div className="pl-10 max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
            <Image 
            src="/learn.jpg"
            alt= "Learn aromanian"
            width={500}
            height={500}
            className="w-auto h-auto m-auto md:w-500 h-500"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw" 
            />
            <Link href= "/history" className="text-rose-950">
              <p className="bg-yellow-500 text-center text-base rounded-lg md:text-xl sm:text-lg">History</p>
            </Link>
          </div>

          <div className="pl-10 max-w-[280px] mx-auto sm:max-w-[350px] md:pl-5">
            <Image 
            src="/learn.jpg"
            alt= "Learn aromanian"
            width={500}
            height={500}
            className="w-auto h-auto m-auto md:w-500 h-500"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
            />
            <Link href= "/traditions" className="text-rose-950">
              <p className="bg-yellow-500 text-center text-base rounded-lg md:text-xl sm:text-lg">Traditions</p>
            </Link>
          </div>

        </div>

        <div className="flex flex-col items-center mt-20">
          <h2 className="text-rose-950 text-center mb-10 text-3xl md:text-5xl">Gallery</h2>


        </div>
      </main>
    </div>
  );
}
