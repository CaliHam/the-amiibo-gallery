import { Link } from 'react-router-dom'
import tag from '../../assets/TAG.png'
import pacmanloader from '../../assets/pacmanloader.gif'
import { useEffect, useState } from 'react'

const AllAmiibos = () => {
  const [amiibos, setAmiibos] = useState([])

  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiibo')
    .then(res => res.json())
    .then(data => setAmiibos(data.amiibo))
  })

  const allAmiibos = amiibos.map(amiibo => {
    return (
      <img src={amiibo.image} key={amiibo.head + amiibo.tail}></img>
    )
  })

  return (
    <div>
      <Link to='/'><img src={tag} className='object-scale-down h-20 fixed top-0 left-0 right-0'/></Link>
      <div className='flex justify-center pt-10 pb-10'>
        <p className='text-5xl'>All Amiibos</p>
        <input type='text' placeholder='Search for an Amiibo' className='rounded'/>
      </div>
      <div className='grid grid-cols-6 gap-4'>
        {amiibos ? allAmiibos : <img src={pacmanloader}/>}
      </div>
    </div>
  )
}

export default AllAmiibos