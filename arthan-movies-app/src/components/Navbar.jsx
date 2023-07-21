import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";

import '../styles/Navbar.css';


function Navbar() {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return

    navigate(`/search?q=${search}`);
    setSearch("");
  };


  return (
    <div className="Navbar">

      <nav id="navbar">

        <div className="nav-left">
          <Link to="/"> <img src='/logo.png'></img></Link>
        </div>

        <div className="nav-center">
          <Link to="/"><h3>Trending</h3></Link>
          <Link to="/"><h3>Popular</h3></Link>
          <Link to="/"><h3>Top Rated</h3></Link>
          <Link to="/"><h3>Most Viewed</h3></Link>
        </div>

        <div className="nav-right">
          <IconContext.Provider
            value={{ color: 'white', size: '20' }}>
            <form onSubmit={handleSubmit}>
              <input type='text'
                placeholder='Search movie(s)'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
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
