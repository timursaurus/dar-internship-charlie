import { Movie } from '../../types'
import MovieItem from './MovieItem'

type Props = {
  movies: Movie[]
}


const MoviesList = ({ movies }: Props) => {
  const onSelectMovie = (m: Movie) => {
    alert(m.title)
  }
  
  return (
    <section >
      <div>
        <span className='text-lg bg-dark-200 border border-dark-100 px-2 py-1 rounded text-gray-50 font-serif ' >Available movies &mdash;  <span className='text-orange-400' >  {movies.length} </span> </span>
      </div>
      <ul>
        {movies.map(movie => (
          <MovieItem movie={movie} key={movie.id} onSelect={onSelectMovie} />
        ))}
      </ul>
    </section>
  )
}

export default MoviesList