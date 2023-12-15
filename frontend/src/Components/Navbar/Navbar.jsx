import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate()

 const [profileName, setProfileName] = useState('');
 const handleSearch = (event) => {
  if (event.key === 'Enter') {
    navigate(`/${profileName}`);
  }
};

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/" className="navbar-title">
          D<span className="navbar-subtitle">Repo</span>
        </Link>

        <div className="search-bar">
          <input
            type="search"
            name="search"
            aria-label="Search"
            placeholder="Type / to search for user"
            className="search-field"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            onKeyUp={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
