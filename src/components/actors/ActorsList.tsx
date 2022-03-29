import { Actor } from "../../types"
import ActorItem from './ActorItem'

type Props = {
  actors: Actor[]
}

const ActorsList = ({ actors }: Props) => {
  return (
    <section className="py-4" >
      <h1 className='text-4xl flex justify-center text-gray-50 font-serif ' >All the Actors</h1>
      <ul>
        {actors.map(actor => (
          <ActorItem actor={actor} key={actor.id} />
        ))}
      </ul>
    </section>
  )
}

export default ActorsList