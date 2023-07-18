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
          <h2>
            <Link to="/"> <BiCameraMovie /> Arthan </Link>
          </h2>
        </div>

        <div className="nav-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
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
