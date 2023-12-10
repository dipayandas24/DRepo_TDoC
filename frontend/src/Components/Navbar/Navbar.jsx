import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [repositoriesVisible, setRepositoriesVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOverviewVisible(false);
    setRepositoriesVisible(false);
  }, [location]);

  const toggleOverview = () => {
    setOverviewVisible(!overviewVisible);
    setRepositoriesVisible(false);
  };

  const toggleRepositories = () => {
    setRepositoriesVisible(!repositoriesVisible);
    setOverviewVisible(false);
  };

  const isUserPage = location.pathname === '/user';

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/" className="navbar-title">
          D <span className="navbar-subtitle">-Hub</span>
        </Link>

        {isUserPage && (
          <>
            <div className="toggle-buttons">
              <button onClick={toggleOverview}>Overview</button>
              <button onClick={toggleRepositories}>Repositories</button>
            </div>

            <div className="panels">
              {overviewVisible && <div className="overview-panel">Overview Content</div>}
              {repositoriesVisible && <div className="repositories-panel">Repositories Content</div>}
            </div>
          </>
        )}

        <div className="search-bar">
          <input
            type="search"
            name="search"
            aria-label="Search"
            placeholder="Type / to search for user"
            className="search-field"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
