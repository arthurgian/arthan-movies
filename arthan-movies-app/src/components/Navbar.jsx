import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

function Navbar() {
  return (
    <div className="Navbar">

      <nav id="navbar-container">
        <h2>
          <Link to="/"> <BiCameraMovie />Movies </Link>
        </h2>

        <form>
          <input type='text' placeholder='Search movie(s)' />
          <button type='submit'>
            <BiSearchAlt2 />
          </button>
        </form>

      </nav>

    </div>
  )
}

export default Navbar
