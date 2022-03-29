import MoviesList from '../../components/movies/MoviesList'
import { movies, actors } from '../../mock'
import ActorsList from '../../components/actors/ActorsList'

const Main = () => {
  return (
    <>
      <main className=' mx-auto container py-4 max-w-screen-lg  ' >  
        <MoviesList movies={movies} />
        <ActorsList actors={actors}  />
      </main>
    </>
  )
}

export default Main