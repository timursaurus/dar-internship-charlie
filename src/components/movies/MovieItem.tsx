import { useState } from 'react'
import { Movie } from '../../types'
import MediaPlayer from '../MediaPlayer'

type Props = {
  movie: Movie
  isSelected?: boolean
  onSelect: (m: Movie) => void
}

const MovieItem = ({ movie, isSelected = false, onSelect }: Props) => {

  function durationConverter(mins: number): string {
    const h = Math.floor(mins / 60)
    const m = mins % 60
    return `${h > 0 ? h + 'h' : ''} ${m > 0 ? m + 'm' : ''}`
  }

  const [watchLater, setWatchLater] = useState(false)


  return (
    <>
      <li className='py-2 hover:bg-dark-300 duration-200 my-2 max-w-screen-lg  border-b border-dark-200  container ' >
        <div className='md:flex children:mr-2 ' >
          <div onClick={() => onSelect(movie)} className='relative group' >
            <img className='sm:max-w-70 group-hover:( filter grayscale   )  duration-200 ' src={movie.image} alt={movie.title} />
            <div className='hidden group-hover:(block ) text-gray-300 absolute top-1/2 left-1/2 ' >
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M8 5.14v14l11-7l-11-7z" fill="currentColor"></path></svg>
            </div>
          </div>
          <div>
            <h2 className='text-2xl font-semibold text-gray-50 ' >{movie.title}</h2>
            <div className='my-1' >
              <span className=' text-gray-300' > {durationConverter(movie.duration)} | {movie.genre} </span>
            </div>
            <div >
              <span className='font-medium text-gray-300 ' > {movie.description} </span>
            </div>
            <div className='py-2' >
              <button onClick={() => setWatchLater(!watchLater)} className='bg-dark-200 hover:(text-blue-500 bg-dark-100 ) duration-100 px-2 rounded text-light-900 border border-dark-50 ' >
                {watchLater ? 'Remove from Watch Later' : 'Watch Later'}
              </button>
            </div>
          </div>
        </div>
        <div>
          {isSelected && <MediaPlayer url={movie.trailer} />}
        </div>

      </li>
    </>
  )
}

export default MovieItem