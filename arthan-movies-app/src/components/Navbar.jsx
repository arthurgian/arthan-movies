import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";

import '../styles/Navbar.css';

function Navbar() {
  return (

    <div className="Navbar">

      <nav id="navbar">

        <div class="nav-left">
          <h2>
          <Link to="/"> <BiCameraMovie /> Arthan </Link>
          </h2>
        </div>

        <div class="nav-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <div class="nav-right">
        <IconContext.Provider
          value={{color:'white', size:'20'}}>
        <form>
          <input type='text' placeholder='Search movie(s)' />
          <button type='submit'>
            <BiSearchAlt2 />
          </button>
        </form>
        </IconContext.Provider>
        </div>

      </nav>

    </div>
  )
}

export default Navbar
