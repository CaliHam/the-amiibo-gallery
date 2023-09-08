import { Link } from 'react-router-dom'
import tag from '../../assets/TAG.png'

const AllAmiibos = () => {
  return (
    <div className='flex'>
      <Link to='/'><img src={tag} /></Link>
      All Amiibos
      <button>Search for an Amiibo</button>
    </div>
  )
}

export default AllAmiibos