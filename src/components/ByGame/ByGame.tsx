import { useEffect, useState } from "react"
// import { Link } from 'react-router-dom'
// import tag from '../../assets/TAG.png'
import pacmanloader from '../../assets/pacmanloader.gif'
// import Amiibo from '../Amiibo/Amiibo'

type AmiiboData = {
  image: string,
  head: number,
  tail: number,
  character: string
}

type GameProps = {
  gameSeries: string,
}

const ByGame: React.FC<GameProps> = ({gameSeries}) => {
  const [amiibos, setAmiibos] = useState([])

  useEffect(() => {
    fetch(`https://www.amiiboapi.com/api/amiibo/?gameseries=${gameSeries}`)
    .then(res => res.json())
    .then(data => setAmiibos(data.amiibo))
  })

  const allAmiibos = amiibos.map((amiibo: AmiiboData) => {
    return (
      <div className="flex flex-col justify-end h-25" key={amiibo.head + amiibo.tail} >
        <img src={amiibo.image} alt={amiibo.character}></img>
      </div>
    )
  })

  return (
    <div className='grid grid-cols-5 gap-4'>
      {amiibos.length ? allAmiibos : <img src={pacmanloader}/>}
    </div>
  )
}

export default ByGame