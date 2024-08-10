import Link from "next/link";
import MenuItem from "./MenuItem"
import { IoIosInformationCircle } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
      <div className="flex justify-between p-3 items-center max-w-6xl m-auto ">
          
          <div className="flex gap-4 ">
             <MenuItem title="Home" address="/" Icon={IoHomeSharp}></MenuItem>
             <MenuItem title="About" address="/about" Icon={IoIosInformationCircle}></MenuItem>
</div>

      <div className="flex items-center gap-4">
       
      <DarkModeSwitch></DarkModeSwitch>

      <Link href="/" className=" flex gap-1 items-center">
             <span className="bg-amber-500 px-2 py-1 rounded text-2xl font-bold">IMDB</span> 
             <span className="hidden sm:inline">clone</span>
             </Link>
      
      </div>
          

 
          


    </div>
  )
}

export default Header