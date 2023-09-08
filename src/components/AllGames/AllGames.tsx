import { Link } from 'react-router-dom'
import tag from '../../assets/TAG.png'
import pacmanloader from '../../assets/pacmanloader.gif'
import { useEffect, useState } from 'react'
import ByGame from '../ByGame/ByGame'

type GameSeries = {
  key: number,
  name: string
}

const AllAmiibos = () => {
  const [amiibos, setAmiibos] = useState([])
  const [chosenSeries, setChosenSeries] = useState('')

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/gameseries')
    .then(res => res.json())
    .then(data => setAmiibos(data.amiibo))
  })

  const uniqueNames = new Set();

  const uniqueData = amiibos.filter((item: GameSeries) => {
    if (!uniqueNames.has(item.name)) {
      uniqueNames.add(item.name);
      return true;
    }
    return false;
  });

  const allGames = uniqueData.map((amiibo: GameSeries) => {
    return (
      <button onClick={() => setChosenSeries(amiibo.name)} key={amiibo.key}>{amiibo.name}</button>
    )
  })

  const renderGameInfo = (gameSeries: string) => {
    return <ByGame gameSeries={gameSeries}/>
  }

  const renderAllGameNames = () => {
    return (
      <div className='grid grid-cols-6 gap-4'>
        {amiibos.length ? allGames : <img src={pacmanloader}/>}
      </div>
    )
  }

  return (
    <div>
      <Link to='/'><img src={tag} className='object-scale-down h-20 fixed top-0 left-0 right-0'/></Link>
      <div className='flex justify-center pt-10 pb-10'>
        {!chosenSeries ? <p className='text-5xl'>All Game Series</p> : <p className='text-5xl'>All Amiibos for {chosenSeries}</p>}
        <input type='text' placeholder='Search for an Amiibo' className='rounded'/>
      </div>
      {!chosenSeries ? renderAllGameNames() : renderGameInfo(chosenSeries)}
    </div>
  )
}

export default AllAmiibos