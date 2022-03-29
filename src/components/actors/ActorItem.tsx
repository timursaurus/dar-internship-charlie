import { Actor } from "../../types"

type Props = {
  actor: Actor
}

const ActorItem = ({ actor }: Props) => {
  return (
    <li className="py-2 max-w-screen-lg sm:flex children:mr-2 container " >
      <div>
        <img className='md:max-w-70 max-w-50 ' src={actor.image} alt={actor.name + actor.lastname} />
      </div>
      <div className="text-gray-300" >
        <h2 className="text-2xl font-semibold text-gray-50 " >{actor.name} {actor.lastname}</h2>
        <div className="my-1  " >
          <span> Age: {actor.age} </span>
        </div>
        <span className="font-medium " > {actor.bio} </span>
      </div>
    </li>
  )
}

export default ActorItem