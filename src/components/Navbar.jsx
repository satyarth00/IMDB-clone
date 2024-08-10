
import NavbarItems from "./NavbarItems"


const Navbar = () => {
  return (
      <div className="flex justify-center gap-7 dark:bg-gray-600 p-2 bg-amber-100 lg:text-lg ">
          
          <NavbarItems title="Trending" param="fetchTrending"></NavbarItems>
          <NavbarItems title="Top rated" param="fetchTopRated"></NavbarItems>
          
    </div>
  )
}

export default Navbar