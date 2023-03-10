import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navigation({ isAuth, toggleAuth }) {
  const navigate = useNavigate();

  function signOut() {
    toggleAuth(false);
    navigate('/')
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        {/*Is de gebruiker ingelogd? Laat dan de blogposts en uitlog knop zien, en anders alleen de login knop */}
        {isAuth === true
          ? <>
            <li>
              <NavLink to="/blogposts">
                Blogposts
              </NavLink>
            </li>
            <li>
              <button type="button" onClick={signOut}>
                Uitloggen
              </button>
            </li>
          </>
          :
          <li>
            <NavLink to="/login">
              Login
            </NavLink>
          </li>}
      </ul>
    </nav>
  );
}

export default Navigation;