'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"


const NavbarItems = ({ title, param }) => {
    const searchPrams = useSearchParams();
    const genre = searchPrams.get('genre');

    return <div>
      
          <Link
              className={`hover:text-amber-600 font-semibold
            ${genre===param?'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''}
                `}
              
              href={`/?genre=${param}`}>{title}</Link>

    </div>
  
    
}

export default NavbarItems

