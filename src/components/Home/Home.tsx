import Amiibo from '../../assets/Amiibo.png'
import Nav from '../Nav/Nav'

const Home = () => {
  return (
    <div className='container flex items-center'>
      <div className='container flex flex-col items-center'>
        <h1 className='text-5xl'>The</h1>
        <img src={Amiibo} className='object-contain h-48 w-96 '/>
        <h1 className='text-5xl'>Gallery</h1>
      </div>
      <Nav />
    </div>
  )
}

export default Home