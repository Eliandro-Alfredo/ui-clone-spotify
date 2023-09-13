import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play as PlayIcon , PlaySquare, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        
        < Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              < ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              < ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-8">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">  
              <img src="/album.jpg" width={104} height={104} alt="Capa" />
              <strong> Akatsuki 7MZ </strong>

              <button className="w-10 h-10 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                < PlayIcon />
              </button>
            </a>
            
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">  
              <img src="/album0.jpg" width={104} height={104} alt="Capa" />
              <strong> Akatsuki 7MZ </strong>

              <button className="w-10 h-10 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                < PlayIcon />
              </button>
            </a>
            
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">  
              <img src="/album1.jpg" width={104} height={104} alt="Capa" />
              <strong> Akatsuki 7MZ </strong>

              <button className="w-10 h-10 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                < PlayIcon />
              </button>
            </a>
            
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">  
              <img src="/album2.jpg" width={104} height={104} alt="Capa" />
              <strong> Akatsuki 7MZ </strong>

              <button className="w-10 h-10 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                < PlayIcon />
              </button>
            </a>
            
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">  
              <img src="/album3.jpg" width={104} height={104} alt="Capa" />
              <strong> Akatsuki 7MZ </strong>

              <button className="w-10 h-10 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                < PlayIcon />
              </button>
            </a>
            
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">  
              <img src="/album4.jpg" width={104} height={104} alt="Capa" />
              <strong> Akatsuki 7MZ </strong>

              <button className="w-10 h-10 items-center flex justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                < PlayIcon />
              </button>
            </a>
            
          </div>

          <h1 className="font-semibold text-2xl mt-8">Made for Eliandro Dos Santos Alfredo</h1>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-3 group rounded-md  flex flex-col gap-2 hover:bg-white/10" >
              <img className="w-full " src="/alb5um.jpg" width={104} height={104} alt="Capa" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">7MZ, MhRap...</span>
            </a>
            <a className="bg-white/5 p-3 group rounded-md  flex flex-col gap-2 hover:bg-white/10" >
              <img className="w-full " src="/album6.jpg" width={104} height={104} alt="Capa" />
              <strong className="font-semibold">Daily Mix 2</strong>
              <span className="text-xs text-zinc-500">7MZ...</span>
            </a>
            <a className="bg-white/5 p-3 group rounded-md  flex flex-col gap-2 hover:bg-white/10" >
              <img className="w-full " src="/album7.jpg" width={104} height={104} alt="Capa" />
              <strong className="font-semibold">Daily Mix 3</strong>
              <span className="text-xs text-zinc-500">7MZ, MhRap...</span>
            </a>
            <a className="bg-white/5 p-3 group rounded-md  flex flex-col gap-2 hover:bg-white/10" >
              <img className="w-full " src="/album8.jpg" width={104} height={104} alt="Capa" />
              <strong className="font-semibold">Daily Mix 4</strong>
              <span className="text-xs text-zinc-500">7MZ, MhRap...</span>
            </a>
            <a className="bg-white/5 p-3 group rounded-md  flex flex-col gap-2 hover:bg-white/10" >
              <img className="w-full " src="/album9.jpg" width={104} height={104} alt="Capa" />
              <strong className="font-semibold">Daily Mix 5</strong>
              <span className="text-xs text-zinc-500">7MZ, MhRap...</span>
            </a>
            <a className="bg-white/5 p-3 group rounded-md  flex flex-col gap-2 hover:bg-white/10" >
              <img className="w-full " src="/album10.jpg" width={104} height={104} alt="Capa" />
              <strong className="font-semibold">Daily Mix 6</strong>
              <span className="text-xs text-zinc-500">7MZ, MhRap...</span>
            </a>
            <a className="bg-white/5 p-3 group rounded-md  flex flex-col gap-2 hover:bg-white/10" >
              <img className="w-full " src="/album11.jpg" width={104} height={104} alt="Capa" />
              <strong className="font-semibold">Daily Mix 7</strong>
              <span className="text-xs text-zinc-500">7MZ, MhRap...</span>
            </a>
            <a className="bg-white/5 p-3 group rounded-md  flex flex-col gap-2 hover:bg-white/10" >
              <img className="w-full " src="/album12.jpg" width={104} height={104} alt="Capa" />
              <strong className="font-semibold">Daily Mix 8</strong>
              <span className="text-xs text-zinc-500">7MZ, MhRap...</span>
            </a>
            
          </div>

        </main>

        
      </div>
      
      < Footer />

    </div>
  )
}   
 