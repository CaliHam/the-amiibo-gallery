import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="pl-20">
      <Link to='/all'><button>Show All Games</button></Link>
      <form>
        Find an Amiibo:
        {/* <input>Name</input> */}
      </form>
    </div>
  )
}

export default Nav