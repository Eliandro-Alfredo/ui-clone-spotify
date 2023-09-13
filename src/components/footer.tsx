import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play as PlayIcon , PlaySquare, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";

export default function Footer() {
    return(
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/album.jpg" width={56} height={56} alt="Capa" />
          <div className="flex flex-col">
            <strong className="font-normal">Akatsuki</strong>
            <span className="text-xs text-zinc-400">7MZ</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={18} />
            <SkipBack size={18} />

            <button className="w-10 h-10 items-center flex justify-center pl-1 rounded-full bg-white text-black ">
              < PlayIcon size={22} />
            </button>

            <SkipForward  size={18}/>
            <Repeat  size={18}/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-200">8:31</span>
              <div className="h-1 rounded-full w-96 bg-zinc-600">
                <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
              </div>
            <span className="text-xs text-zinc-200">2:15</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
            < Mic2 size={18}/>
            < LayoutList size={18}/>
            < Laptop2 size={18}/>
            <div className="flex items-center gap-2">
              < Volume  size={18}/>
              <div className="h-1 rounded-full w-24 bg-zinc-600">
                <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
              </div>
            </div>
            < Maximize2  size={18}/>
        </div>
      </footer>
    )
}