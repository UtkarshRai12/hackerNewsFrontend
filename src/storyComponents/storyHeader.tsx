import { Link } from "react-router-dom"
import { Moon, Sun } from "lucide-react"
 
import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { useTheme } from "../components/ThemeProvider"
interface storyHeaderProps{};
export const StoryHeader:React.FC=({}:storyHeaderProps)=>{
    const { setTheme } = useTheme()
    return(
<nav className="bg-gray-800 shadow-md py-6 mb-10">
    <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
            <svg className="mr-2 h-10 w-auto" height="20" viewBox="4 4 188 188" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m4 4h188v188h-188z" fill="#000"/><path d="m73.2521756 45.01 22.7478244 47.39130083 22.7478244-47.39130083h19.56569631l-34.32352071 64.48661468v41.49338532h-15.98v-41.49338532l-34.32352071-64.48661468z" fill="#fff"/></svg>
                <a href="#" className="text-white text-2xl font-bold">Hacker News !</a>
            </div>
            <div className="flex items-center">
                <Link to="/top" className="text-gray-300 hover:text-white px-3 py-2">Top</Link>
                <Link to="/job" className="text-gray-300 hover:text-white px-3 py-2">Job</Link>
                <Link to="/show" className="text-gray-300 hover:text-white px-3 py-2">Show</Link>
                <Link to="/best" className="text-gray-300 hover:text-white px-3 py-2">Best</Link>
                {/* <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Past</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Comments</a> */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
            </div>
        </div>
    </div>
</nav>
    )
}