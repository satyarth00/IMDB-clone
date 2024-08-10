import Image from "next/image"
import Link from "next/link"
import { FiThumbsUp } from "react-icons/fi";


const Card = ({result}) => {
  return (
      <div className="group cursor-pointer hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-2 translate-shadow duration-200 ">
          <Link
              href={`/movie/${result.id}`} >
              <Image
                  src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                  width={600}
                  height={300}
                  className="sm:rounded-t-lg h-48"
                  alt="card"
              ></Image>
              <div className="p-2">
                  
                  <p className="line-clamp-2 text-md">{result.overview}</p>
                  <h2 className="text-lg font-bold truncate">
                      {result.title || result.name}
                  </h2>
                  <p className="flex items-center ">
                      {result.release_date || result.first_air_date}
                      <FiThumbsUp className=" h-5 mr-1 ml-3 " />
                      {result.vote_count}
                  </p>
                  
              </div>
</Link>

    </div>
  )
}

export default Card