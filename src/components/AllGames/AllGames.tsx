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
      <button onClick={() => setChosenSeries(amiibo.name)} key={amiibo.key} className='text-xl transition-all rounded hover:scale-110 hover:text-white hover:bg-red-300'>{amiibo.name}</button>
    )
  })

  const renderGameInfo = (gameSeries: string) => {
    return <ByGame gameSeries={gameSeries}/>
  }

  const renderAllGameNames = () => {
    return (
      <div className='grid grid-cols-6 gap-8 bg-red-200 to-90% rounded-xl p-7'>
        {amiibos.length ? allGames : <img src={pacmanloader}/>}
      </div>
    )
  }

  return (
    <div>
      <Link to='/'><img src={tag} className='object-scale-down h-20 fixed top-0 left-0 right-0'/></Link>
      <div className='flex justify-center pt-10 pb-10'>
        {!chosenSeries ? <p className='text-5xl'>All Game Series</p> : <p className='text-5xl pr-2'>All Amiibos for {chosenSeries} </p>}
        {chosenSeries && <button onClick={() => setChosenSeries('')} className='rounded bg-white pr-2 pl-2'>Back</button>}
      </div>
      {!chosenSeries ? renderAllGameNames() : renderGameInfo(chosenSeries)}
    </div>
  )
}

export default AllAmiibos